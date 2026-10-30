import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebaseAdmin";
import { contactSchema } from "@/schema";


export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot (bot protection)
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const enquiryData = {
      ...parsed.data,
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
    };
    delete enquiryData.website;

    await adminDb.collection("enquiries").add(enquiryData);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}