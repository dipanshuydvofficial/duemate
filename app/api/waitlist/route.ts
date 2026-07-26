import { NextResponse } from "next/server"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Demo signup endpoint.
 * Swap the console.log for your database, Resend, Loops or CRM call.
 */
export async function POST(request: Request) {
  let email = ""

  try {
    const body = (await request.json()) as { email?: string }
    email = (body.email ?? "").trim().toLowerCase()
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 })
  }

  if (!EMAIL.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 422 })
  }

  // Simulate persistence latency so the loading state is visible in the demo.
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.log(`[duemate] signup: ${email}`)

  return NextResponse.json({
    message: `Workspace reserved for ${email}. Check your inbox to finish setup.`,
  })
}
