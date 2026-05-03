import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const from = formData.get('from') as string;
    const subject = formData.get('subject') as string;
    const body = formData.get('body') as string;

    const { data, error } = await resend.emails.send({
      from: 'Dotflex.UI <onboarding@resend.dev>',     // ← This is Resend's verified sender
      to: 'shreyymishh@gmail.com',
      subject: `[Dotflex.UI] ${subject}`,
      replyTo: from,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p>${body.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    console.log("✅ Email sent successfully via Resend! ID:", data?.id);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Catch Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}