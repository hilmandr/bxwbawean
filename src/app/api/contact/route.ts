import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { nama, email, telepon, pesan } = await request.json();

    const transporter = nodemailer.createTransport({
      // service: "zoho",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_APP_EMAIL,
        pass: process.env.MY_APP_PASS,
      },
    });

    const mailOption = {
      from: email,
      to: process.env.MY_EMAIL_RECIEVER,
      replyTo: email,
      subject: "Email dari website bandara",
      html: `
        <h3>Hello ${nama}</h3>
        <li> Nomor Telepon: ${telepon}</li> 
        <li> Isi Pesan: ${pesan}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 },
    );
  }
}
