import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebaseAdmin";
import { admissionSchema } from "@/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Honeypot Security Check (Bot protection)
    // Agar bot ne 'website' field bhar di, toh usko fake success dikha do
    if (body.website) {
      console.warn("Bot detected via honeypot.");
      return NextResponse.json({ ok: true, message: "Application submitted successfully." });
    }

    // 2. Server-side Validation with Zod
    const parsed = admissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data provided", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // 3. Save to Firestore Securely via Admin SDK
    const admissionData = {
      ...parsed.data,
      status: "new", // Admin portal me track karne ke liye
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    // Honeypot field ko DB me save nahi karna
    delete admissionData.website;

    await adminDb.collection("admissions").add(admissionData);

    return NextResponse.json(
      { ok: true, message: "Application submitted successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Admission API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}