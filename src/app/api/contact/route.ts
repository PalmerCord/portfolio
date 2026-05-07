import { Resend } from "resend";
import { NextResponse } from "next/server";

// Lazily instantiated so build-time collection doesn't require the env var
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Basic input sanitization — strip HTML tags to prevent injection in email body
function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, 5000);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  const name = sanitize(data.name);
  const email = sanitize(data.email);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 422 });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  const company = sanitize(data.company);
  const engagementType = sanitize(data.engagementType);
  const platform = Array.isArray(data.platform)
    ? data.platform.map((p) => sanitize(p)).filter(Boolean).join(", ")
    : "";
  const budget = sanitize(data.budget);
  const timeline = sanitize(data.timeline);
  const currentStack = sanitize(data.currentStack);
  const biggestChallenge = sanitize(data.biggestChallenge);
  const projectDescription = sanitize(data.projectDescription);

  const emailBody = `
New inquiry from ${name}

── Contact ──────────────────────
Name:    ${name}
Email:   ${email}
Company: ${company || "—"}

── Project ──────────────────────
Engagement: ${engagementType || "—"}
Platforms:  ${platform || "—"}
Budget:     ${budget || "—"}
Timeline:   ${timeline || "—"}

── Technical context ─────────────
Current stack: ${currentStack || "—"}

Biggest challenge:
${biggestChallenge || "—"}

Project description:
${projectDescription || "—"}
`.trim();

  const { error } = await getResend().emails.send({
    // Switch "from" to a verified domain address after setting up cordpalmer.com in Resend
    from: "Cord Palmer Portfolio <onboarding@resend.dev>",
    to: "hello@cordpalmer.com",
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
    text: emailBody,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
