import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebaseAdmin";
import { admissionSchema } from "@/schema";

// Ye line add karni hai bas! 👇
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const validatedData = admissionSchema.parse(body);

    if (validatedData.website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const { website, ...dataToSave } = validatedData;

    const admissionData = {
      ...dataToSave,
      status: "pending",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    await adminDb.collection("admissions").add(admissionData);

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("Admission Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}