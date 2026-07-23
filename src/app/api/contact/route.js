import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    const requesterName = (name || "Requester").trim();
    const senderEmail = process.env.EMAIL_USER;
    const senderPassword = process.env.EMAIL_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || senderEmail;

    if (!senderEmail || !senderPassword) {
      throw new Error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    await transporter.sendMail({
      from: `"${requesterName}" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New enquiry from ${requesterName}`,
      html: `
        <h2>New Contact Enquiry from ${requesterName}</h2>
        <table border="1" cellpadding="8">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Message</b></td><td>${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
