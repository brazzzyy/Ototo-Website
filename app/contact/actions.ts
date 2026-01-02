'use server'

import { Resend } from 'resend';

// REMINDER: Once domain has been bought and verified
// change this to 'ototoWI@outlook.com' 
const CONTACT_EMAIL = 'lor528152@outlook.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      console.log('📧 Contact form submission (email not sent - no API key):', { name, email, phone, message });
      return { 
        success: false, 
        error: 'Email service is not configured. Please contact us directly at ototoWI@outlook.com' 
      };
    }

    const resend = new Resend(RESEND_API_KEY);
    
    // REMINDER: once deployed, must verify domain with Resend to use this email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    await resend.emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - Ototo Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `.trim(),
    });

    return { success: true, message: 'Thank you for your message! We\'ll get back to you soon.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Something went wrong. Please try again later.' };
  }
}

