import nodemailer from "nodemailer";
import { properties } from "@/data/properties";

const getTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error("EMAIL_USER or EMAIL_PASS is not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const propertyId = typeof body?.propertyId === "string" ? body.propertyId.trim() : "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const emailUser = process.env.EMAIL_USER as string;
    const property = propertyId
      ? properties.find((item) => item.id === propertyId)
      : undefined;

    const propertyText = property
      ? `\n\nProperty Inquiry:\n- Title: ${property.title}\n- Location: ${property.location}\n- Type: ${property.type}\n- Price: LKR ${property.price.toLocaleString()}\n- Beds/Baths: ${property.beds}/${property.baths}`
      : "";

    const propertyHtml = property
      ? `
        <h3 style="margin-top:16px;">Property Details</h3>
        <p><strong>Title:</strong> ${property.title}</p>
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Type:</strong> ${property.type}</p>
        <p><strong>Price:</strong> LKR ${property.price.toLocaleString()}</p>
        <p><strong>Beds/Baths:</strong> ${property.beds}/${property.baths}</p>
        <img src="${property.heroImage}" alt="${property.title}" style="margin-top:10px;max-width:100%;border-radius:12px;" />
      `
      : "";

    await transporter.sendMail({
      from: `Prime Estates Website <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}${propertyText}`,
      html: `
        <h2>New Property Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        ${propertyHtml}
      `,
    });

    await transporter.sendMail({
      from: `Prime Estates <${emailUser}>`,
      to: email,
      subject: property
        ? `We received your inquiry about ${property.title}`
        : "We received your inquiry",
      text: property
        ? `Hi ${name},\n\nThank you for contacting Prime Estates. We received your message and will respond quickly.\n\nYour message:\n${message}\n\nProperty details:\n- Title: ${property.title}\n- Location: ${property.location}\n- Type: ${property.type}\n- Price: LKR ${property.price.toLocaleString()}\n\nRegards,\nPrime Estates`
        : `Hi ${name},\n\nThank you for contacting Prime Estates. We received your message and will respond quickly.\n\nYour message:\n${message}\n\nRegards,\nPrime Estates`,
      html: property
        ? `
          <h2>Thank you for your inquiry, ${name}</h2>
          <p>We received your message and our team will respond quickly.</p>
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
          <h3 style="margin-top:16px;">Property You Inquired About</h3>
          <p><strong>Title:</strong> ${property.title}</p>
          <p><strong>Location:</strong> ${property.location}</p>
          <p><strong>Type:</strong> ${property.type}</p>
          <p><strong>Price:</strong> LKR ${property.price.toLocaleString()}</p>
          <p><strong>Beds/Baths:</strong> ${property.beds}/${property.baths}</p>
          <img src="${property.heroImage}" alt="${property.title}" style="margin-top:10px;max-width:100%;border-radius:12px;" />
          <p style="margin-top:16px;">Regards,<br />Prime Estates</p>
        `
        : `
          <h2>Thank you for your inquiry, ${name}</h2>
          <p>We received your message and our team will respond quickly.</p>
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
          <p style="margin-top:16px;">Regards,<br />Prime Estates</p>
        `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send inquiry.";
    return Response.json({ error: message }, { status: 500 });
  }
}
