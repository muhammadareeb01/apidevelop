import { api } from "blitz"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.RESEND_API_KEY) {
  throw new Error('Missing required environment variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, or RESEND_API_KEY')
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

export default api(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  try {
    const { email, name, zip_code, preferred_retailers, device_preference, feedback } = req.body
    console.log("Received waitlist signup request for:", email)

    if (!email || !name || !zip_code) {
      return res.status(400).json({ error: "Name, email, and ZIP code are required" })
    }

    if (!Array.isArray(preferred_retailers) || preferred_retailers.length === 0) {
      return res.status(400).json({ error: "Please select at least one preferred retailer" })
    }

    if (!device_preference) {
      return res.status(400).json({ error: "Please select a device preference" })
    }

    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password: Math.random().toString(36).slice(-12) + Math.random().toString(36).slice(-12) + "!@#$%^&*",
      email_confirm: true,
    })

    if (authError) {
      if (authError.message.includes("already registered")) {
        console.log("Email already registered in auth.users:", email)
      } else {
        throw authError
      }
    }

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          name,
          zip_code,
          preferred_retailers,
          device_preference,
          feedback,
          user_id: authData?.user?.id,
          status: "pending",
          metadata: {
            signup_source: "website",
            signup_date: new Date().toISOString(),
            provider: "resend",
          },
        },
      ])

    if (insertError) {
      if (insertError.code === "23505") {
        return res.status(400).json({ error: "Email already registered" })
      }
      throw insertError
    }

    await resend.emails.send({
      from: "Prox <alston@joinprox.com>",
      to: email,
      subject: "Welcome to Prox! 🎉",
      html: `
        <div style="font-family: Helvetica, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #082517; margin-bottom: 20px;">Welcome to Prox!</h1>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hello ${name || "there"}, thank you for joining our waitlist! We are excited to have you on board.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            We will keep you updated on our launch and make sure you are among the first to know when Prox becomes available.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            The Prox Team
          </p>
        </div>
      `,
    })

    await resend.emails.send({
      from: "Prox <alston@joinprox.com>",
      to: "alston@joinprox.com",
      subject: "New Waitlist Signup",
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has joined the waitlist:</p>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>ZIP Code:</strong> ${zip_code || "Not provided"}</p>
        <p><strong>Preferred Retailers:</strong> ${preferred_retailers?.join(", ") || "None"}</p>
        <p><strong>Device Preference:</strong> ${device_preference || "Not provided"}</p>
        <p><strong>Feedback:</strong> ${feedback || "None"}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    res.status(200).json({ message: "Successfully joined waitlist and sent welcome emails", userId: authData?.user?.id })
  } catch (error) {
    console.error("Waitlist error:", error)
    res.status(500).json({ error: "Failed to join waitlist" })
  }
})