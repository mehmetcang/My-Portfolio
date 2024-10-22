import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gultekin55mhmt@gmail.com',
    pass: 'your-gmail-app-password'
  }
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    await transporter.sendMail({
      from: 'gultekin55mhmt@gmail.com',
      to: 'gultekin55mhmt@gmail.com',
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
