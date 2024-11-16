import { SMTPClient } from 'emailjs';

export async function POST(request: { json: () => PromiseLike<{ to: any; subject: any; text: any; }> | { to: any; subject: any; text: any; }; }) {
  const { to, subject, text } = await request.json();

  const emailClient = new SMTPClient({
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  try {
      console.log("Attempting to send email")
    const message = await emailClient.sendAsync({
            text: text,
            from: process.env.SMTP_FROM!,
            to: to,
            subject: subject,
    });

    return Response.json({ success: true, message });
  } catch (error) {
    return Response.json({ success: false, error: error });
  }
}

