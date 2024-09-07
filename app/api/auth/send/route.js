import { EmailTemplate } from "@/emails/verification.email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(Request) {
  const OTP = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const { userName, emailAddress } = await Request.json(); // Ensure you are parsing JSON correctly

  try {
    const { data, error } = await resend.emails.send({
      from: "delivered@resend.dev", // Ensure this is a valid email address
      to: [emailAddress], // Ensure emailAddress is a string
      subject: "Complete Verification",
      react: EmailTemplate({ userName, OTP }),
    });

    if (error) {
      console.log(`An Error occurred: ${error.name} - ${error.message}`);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(OTP), { status: 200 }); // Return OTP to frontEnd in case no error occured
  } catch (error) {
    console.log(`An Error occurred: ${error.message}`);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
