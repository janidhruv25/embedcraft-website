const nodemailer = require('nodemailer');

// Use the support@embedcraft.online credentials
const config = {
  host: 'smtp.zoho.in',
  port: 587,
  secure: false,
  auth: {
    user: 'support@embedcraft.online',
    pass: '8SBjTr9daZ3m', // ← Paste the App Password you generated
  },
};

async function testEmail() {
  console.log('🔍 Testing Zoho SMTP...');
  console.log('📧 Host:', config.host);
  console.log('👤 User:', config.auth.user);
  console.log('🔑 Password length:', config.auth.pass.length);

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    const info = await transporter.sendMail({
      from: config.auth.user,
      to: config.auth.user,
      subject: '✅ Test Email from EMBEDCRAFT',
      text: 'If you received this, your Zoho SMTP is working!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #0E8A62;">✅ Test Email Successful!</h2>
          <p style="color: #1D2A39;">Your Zoho SMTP configuration is working correctly.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9CA3AF; font-size: 14px;">Sent from EMBEDCRAFT</p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('📨 Message ID:', info.messageId);
    console.log('📧 Check your inbox at support@embedcraft.online');
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('📝 Response:', error.response);
    }
  }
}

testEmail();