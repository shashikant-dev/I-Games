import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
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