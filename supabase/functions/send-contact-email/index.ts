import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  details?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, projectType, details }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs (trim whitespace)
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      project_type: projectType?.trim() || null,
      details: details?.trim() || null,
    };

    console.log("Processing contact form submission:", { name: sanitizedData.name, email: sanitizedData.email });

    // Save to database using service role client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert([sanitizedData])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Submission saved to database:", submission.id);

    // Format project type for display
    const projectTypeDisplay = projectType 
      ? projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      : 'Not specified';

    // Send notification email to business owner
    const notificationEmailResponse = await resend.emails.send({
      from: "Hamilton Bath Renovations <onboarding@resend.dev>",
      to: ["ecombagbiz@gmail.com"],
      subject: `New Estimate Request from ${sanitizedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Lead Details
          </h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
            ${sanitizedData.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></p>` : ''}
            <p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectTypeDisplay}</p>
            ${sanitizedData.details ? `
              <p style="margin: 8px 0;"><strong>Project Details:</strong></p>
              <p style="background-color: white; padding: 12px; border-radius: 4px; margin-top: 4px;">
                ${sanitizedData.details.replace(/\n/g, '<br>')}
              </p>
            ` : ''}
            <p style="margin: 8px 0; color: #6b7280; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                dateStyle: 'long', 
                timeStyle: 'short' 
              })}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Submission ID: ${submission.id}
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Hamilton Bath Renovations <onboarding@resend.dev>",
      to: [sanitizedData.email],
      subject: "Thank you for contacting Hamilton Bath Renovations",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank you for reaching out!</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Hi ${sanitizedData.name},
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Thank you for contacting Hamilton Bath Renovations! We've received your estimate request for 
            <strong>${projectTypeDisplay}</strong> and will get back to you within 24 hours to discuss your project.
          </p>
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
            <ul style="color: #374151; line-height: 1.8;">
              <li>We'll review your project details</li>
              <li>Contact you within 24 hours</li>
              <li>Schedule a free in-home consultation</li>
              <li>Provide a detailed estimate</li>
            </ul>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            In the meantime, feel free to call us at <a href="tel:+17039467608" style="color: #2563eb;">(703) 946-7608</a> 
            if you have any immediate questions.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Best regards,<br>
            <strong>Hamilton Bath Renovations Team</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="font-size: 14px; color: #6b7280; text-align: center;">
            Hamilton Bath Renovations<br>
            Serving Vienna, Fairfax, Herndon, Reston, and surrounding areas<br>
            <a href="mailto:hamiltonbath@gmail.com" style="color: #2563eb;">hamiltonbath@gmail.com</a> | 
            <a href="tel:+17039467608" style="color: #2563eb;">(703) 946-7608</a>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your request has been submitted successfully!",
        submissionId: submission.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "An error occurred while processing your request. Please try again or contact us directly.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
