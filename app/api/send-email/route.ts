import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "programmingwithmosh@gmail.com",
    subject: "Test sending emails",
    react: WelcomeTemplate({ name: "Gerardo" }),
  });
  return NextResponse.json({});
}
