import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure your SMTP transport (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Get the base URL from the request headers
  const host = req.headers.host;
  const protocol = host && host.startsWith('localhost') ? 'http' : 'https';
  const logoUrl = `${protocol}://${host}/images/logo.jpg`;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: subject || 'Contact Form Submission',
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #ec960820; padding: 32px; max-width: 480px; margin: auto;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src='${logoUrl}' alt='Manomitra Logo' style='height: 48px; margin-bottom: 8px;' />
            <h2 style="color: #ec9608; margin: 0; font-size: 1.5rem;">New Contact Form Submission</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Subject:</td>
              <td style="padding: 8px 0;">${subject || 'Contact Form Submission'}</td>
            </tr>
          </table>
          <div style="background: #ec960810; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ec9608; margin-top: 0; font-size: 1.1rem;">Message</h3>
            <p style="margin: 0; color: #222;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <div style="text-align: center; color: #888; font-size: 0.9rem; margin-top: 24px;">
            <em>This message was sent via the Manomitra website contact form.</em>
          </div>
        </div>
      `
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
