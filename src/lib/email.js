import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function sendEmail({ to, subject, html, text, from }) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML if no text provided
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
}

export async function sendBulkEmail({ emails, subject, html, text, from }) {
  const results = [];
  const transporter = createTransporter();

  // Send emails in batches to avoid overwhelming the SMTP server
  const batchSize = 50;
  const batches = [];

  for (let i = 0; i < emails.length; i += batchSize) {
    batches.push(emails.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    const promises = batch.map(async (email) => {
      try {
        const mailOptions = {
          from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
          to: email.email,
          subject,
          html: html.replace(/\{\{name\}\}/g, email.name || 'Subscriber'),
          text: text ? text.replace(/\{\{name\}\}/g, email.name || 'Subscriber') : undefined,
        };

        const result = await transporter.sendMail(mailOptions);
        return {
          email: email.email,
          success: true,
          messageId: result.messageId
        };
      } catch (error) {
        return {
          email: email.email,
          success: false,
          error: error.message
        };
      }
    });

    const batchResults = await Promise.all(promises);
    results.push(...batchResults);

    // Add delay between batches to avoid rate limiting
    if (batches.indexOf(batch) < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return results;
}

export function generatePasswordResetEmail(name, resetLink) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset - iGames Admin</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3B82F6; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; background: #f8f9fa; }
        .button { display: inline-block; padding: 12px 30px; background: #3B82F6; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { padding: 20px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>iGames Admin Portal</h1>
        </div>
        <div class="content">
          <h2>Password Reset Request</h2>
          <p>Hello ${name},</p>
          <p>You have requested to reset your password for the iGames Admin Portal. Click the button below to reset your password:</p>
          <p style="text-align: center;">
            <a href="${resetLink}" class="button">Reset Password</a>
          </p>
          <p>If you didn't request this password reset, please ignore this email. The link will expire in 10 minutes.</p>
          <p>If the button doesn't work, copy and paste this link into your browser:</p>
          <p style="word-break: break-all;">${resetLink}</p>
        </div>
        <div class="footer">
          <p>&copy; 2025 iGames.cloud. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return { html, subject: 'Password Reset - iGames Admin Portal' };
}

export function generateBulkEmailTemplate(content) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Newsletter - iGames.cloud</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #3B82F6; color: white; padding: 30px 20px; text-align: center; }
        .content { padding: 40px 30px; background: white; }
        .footer { padding: 30px 20px; text-align: center; color: #666; font-size: 14px; background: #f8f9fa; }
        .unsubscribe { color: #666; font-size: 12px; margin-top: 20px; }
        img { max-width: 100%; height: auto; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>iGames.cloud</h1>
          <p>Gaming & Sports Technology Solutions</p>
        </div>
        <div class="content">
          ${content}
        </div>
        <div class="footer">
          <p>&copy; 2025 iGames.cloud. All rights reserved.</p>
          <div class="unsubscribe">
            <p>You are receiving this email because you subscribed to our newsletter.</p>
            <p>If you no longer wish to receive these emails, you can unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return html;
}

export function generateContactFormEmail(formData) {
  const { name, email, phone, company, service, message } = formData;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - iGames.cloud</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #3B82F6, #60A5FA);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .header p {
          margin: 5px 0 0 0;
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          padding: 30px;
        }
        .field-group {
          margin-bottom: 25px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        .field-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .field-label {
          font-weight: bold;
          color: #3B82F6;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
          display: block;
        }
        .field-value {
          font-size: 16px;
          color: #333;
          margin: 0;
          word-wrap: break-word;
        }
        .message-field {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #3B82F6;
        }
        .priority-badge {
          display: inline-block;
          background: #10B981;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          color: #666;
          font-size: 14px;
          background: #f8f9fa;
          border-top: 1px solid #eee;
        }
        .timestamp {
          color: #888;
          font-size: 12px;
          margin-top: 10px;
        }
        .contact-info {
          background: #f0f7ff;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .contact-info h3 {
          margin: 0 0 10px 0;
          color: #3B82F6;
          font-size: 16px;
        }
        .contact-info p {
          margin: 5px 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎮 New Contact Inquiry</h1>
          <p>iGames.cloud - Gaming & Sports Technology Solutions</p>
        </div>

        <div class="content">
          <div style="text-align: center; margin-bottom: 25px;">
            <span class="priority-badge">New Submission</span>
          </div>

          <div class="field-group">
            <span class="field-label">👤 Full Name</span>
            <p class="field-value">${name}</p>
          </div>

          <div class="field-group">
            <span class="field-label">📧 Email Address</span>
            <p class="field-value"><a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a></p>
          </div>

          ${phone ? `
          <div class="field-group">
            <span class="field-label">📱 Phone Number</span>
            <p class="field-value"><a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a></p>
          </div>
          ` : ''}

          ${company ? `
          <div class="field-group">
            <span class="field-label">🏢 Company</span>
            <p class="field-value">${company}</p>
          </div>
          ` : ''}

          ${service ? `
          <div class="field-group">
            <span class="field-label">🎯 Service Interest</span>
            <p class="field-value">${service}</p>
          </div>
          ` : ''}

          ${message ? `
          <div class="field-group">
            <span class="field-label">💬 Message</span>
            <div class="message-field">
              <p class="field-value">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          ` : ''}

          <div class="contact-info">
            <h3>📞 Quick Response Actions</h3>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3B82F6;">Reply to ${name}</a></p>
            ${phone ? `<p><strong>Call:</strong> <a href="tel:${phone}" style="color: #3B82F6;">${phone}</a></p>` : ''}
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/${phone ? phone.replace(/[^0-9]/g, '') : ''}" style="color: #25D366;">Send WhatsApp Message</a></p>
          </div>

          <div class="timestamp">
            <p>📅 Submitted: ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
          </div>
        </div>

        <div class="footer">
          <p><strong>iGames.cloud</strong> - Gaming & Sports Technology Solutions</p>
          <p>This is an automated notification from your website contact form.</p>
          <p style="margin-top: 15px; font-size: 12px; color: #888;">
            🔔 Please respond to inquiries within 24 hours for the best customer experience.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `🎮 New Contact Inquiry from ${name} - iGames.cloud`;

  return { html, subject };
}