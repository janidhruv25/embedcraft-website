import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter for Gmail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  console.log("=== CONTACT API CALLED ===");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify connection
    await transporter.verify();
    console.log("Transporter verified successfully!");

    // =============================================
    // EMAIL 1: Send to support@embedcraft.online (YOU)
    // =============================================
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@embedcraft.online',
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f7fb;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background: #0E8A62; padding: 25px 30px;">
              <h2 style="margin: 0; color: white; font-size: 24px;">New Contact Form Submission</h2>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.8);">From EMBEDCRAFT website</p>
            </div>
            <div style="padding: 30px;">
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Name:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563;">${name}</p>
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Email:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563;">
                  <a href="mailto:${email}" style="color: #0E8A62;">${email}</a>
                </p>
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Message:</strong>
                <div style="margin-top: 5px; background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 3px solid #0E8A62;">
                  <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
                </div>
              </div>
              <div style="background: #f0fdf4; padding: 12px 16px; border-radius: 8px; border: 1px solid #bbf7d0;">
                <p style="margin: 0; color: #166534; font-size: 14px;">
                  💡 Reply directly to: <strong>${email}</strong>
                </p>
              </div>
            </div>
            <div style="background: #f9fafb; padding: 15px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sent from EMBEDCRAFT Website</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // =============================================
    // EMAIL 2: Auto-reply to the sender
    // =============================================
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting EMBEDCRAFT',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f7fb;">
          <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background: #0E8A62; padding: 25px 30px; text-align: center;">
              <h2 style="margin: 0; color: white; font-size: 24px;">Thank You for Reaching Out</h2>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 16px; color: #374151; margin-bottom: 15px;">Dear ${name},</p>
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
                Thank you for contacting <strong>EMBEDCRAFT</strong>. We have received your message and will review it shortly.
              </p>
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
                We will get back to you within 24 hours. If your matter is urgent, please feel free to reach out to us directly.
              </p>
              <div style="margin: 25px 0; padding: 15px; background: #f3f4f6; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #374151; font-weight: 600;">Connect with us:</p>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <a href="mailto:support@embedcraft.online" style="display: inline-block; padding: 8px 16px; background: #0E8A62; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Email Us</a>
                  <a href="https://embedcraft.online" style="display: inline-block; padding: 8px 16px; background: #1D2A39; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Visit Website</a>
                </div>
              </div>
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 10px;">Best regards,</p>
              <p style="color: #374151; font-weight: 600; margin: 0;">The EMBEDCRAFT Team</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">Embedded Solutions. Real Impact.</p>
            </div>
            <div style="background: #f9fafb; padding: 15px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">This is an automated response. Please do not reply directly to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}