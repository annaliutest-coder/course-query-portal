Project Specification: Fast Event Check-In CRM1. Project OverviewWe are building a Kiosk-style Event Check-In System using Next.js 14 (App Router), PostgreSQL, and Prisma ORM.The system is designed for fast data entry on tablets (iPad).Tech Stack:Framework: Next.js 14+Database: PostgreSQL (deployed on Zeabur)ORM: PrismaUI Library: Tailwind CSS, Lucide ReactExternal Service: Gmail API for sending welcome emails.2. Database Schema (prisma/schema.prisma)Please use the following schema exactly:generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  phone     String?
  tags      String[]
  createdAt DateTime @default(now())
  logs      EventLog[]
}

model EventLog {
  id        String   @id @default(cuid())
  eventName String
  checkInAt DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
3. Backend Logic (Server Action)Create a Server Action at app/actions/check-in.ts.Requirements:Function Name: checkInUser(formData: FormData)Input: Accepts email (required) and name (optional).Logic:Check if the user exists by email.Upsert Logic:If user exists: Update their tags (add "2026春季招生活動" if not present) and update name/phone if provided.If user does not exist: Create a new user with the email and tag.Create an EventLog entry for this check-in.Email Trigger: After successful DB operation, call the Gmail utility to send a welcome email.Revalidate: revalidatePath('/dashboard').4. Email Service (Gmail API)Create a utility at lib/gmail.ts.Requirements:Use nodemailer and googleapis.Subject Line: "華語文教學系國際與文化組歡迎您！"Content: HTML format. Includes a welcome message and a simulated link to download the department brochure (PDF).Environment Variables: Use GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_USER.5. Frontend UI (Kiosk Interface)Create the main page at app/page.tsx (or a dedicated route).UI Requirements:Style: Dark mode, futuristic/tech style (using Tailwind colors like slate-900, indigo-600, emerald-500).Mode 1: New User (Default/Fastest):Only requires Email input.Large input field for easy typing on iPad.Checkbox for "Send Welcome Email" (checked by default).Mode 2: QR Scan (Simulated):A button to simulate scanning a QR code (since we don't have a real camera lib yet).When clicked, simulate finding a user and auto-filling the form.Feedback:Show a loading spinner during submission.Show a full-screen Success Message (Green Checkmark) upon completion.Auto-reset the form after 3 seconds for the next user.System Log:Display a small, terminal-like log at the bottom showing actions (e.g., "Email sent to user@example.com").6. Deployment (Zeabur)Ensure package.json includes a postinstall script: prisma generate.Ensure the app connects to DATABASE_URL provided by the environment.