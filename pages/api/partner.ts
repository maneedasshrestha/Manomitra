import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { org, contact, email, phone, message } = req.body;

  if (!org || !contact || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const host = req.headers.host;
  const protocol = host && host.startsWith('localhost') ? 'http' : 'https';
  const logoUrl = `${protocol}://${host}/images/logo.jpg`;

  try {
    await transporter.sendMail({
      from: `"${contact}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: 'Partnership Application',
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #ec960820; padding: 32px; max-width: 480px; margin: auto;">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src='${logoUrl}' alt='Manomitra Logo' style='height: 48px; margin-bottom: 8px;' />
            <h2 style="color: #ec9608; margin: 0; font-size: 1.5rem;">New Partnership Application</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Organization:</td><td style="padding: 8px 0;">${org}</td></tr>
            <tr><td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Contact Person:</td><td style="padding: 8px 0;">${contact}</td></tr>
            <tr><td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Email:</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="font-weight: bold; color: #ec9608; padding: 8px 0;">Phone:</td><td style="padding: 8px 0;">${phone || '-'}</td></tr>
          </table>
          <div style="background: #ec960810; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ec9608; margin-top: 0; font-size: 1.1rem;">Partnership Idea / Message</h3>
            <p style="margin: 0; color: #222;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <div style="text-align: center; color: #888; font-size: 0.9rem; margin-top: 24px;">
            <em>This message was sent via the Manomitra website partnership form.</em>
          </div>
        </div>
      `
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
