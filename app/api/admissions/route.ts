import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebaseAdmin";
import { admissionSchema } from "@/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate incoming data with our new schema
    const validatedData = admissionSchema.parse(body);

    // 2. Honeypot Check: Agar kisi bot ne 'website' field bhar diya, to entry reject kar do
    if (validatedData.website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // 3. 'website' ko alag nikal lo, aur baaki ka data 'dataToSave' me daal do (No 'delete' keyword needed)
    const { website, ...dataToSave } = validatedData;

    // 4. Final Data for Database (Isme naye schema ke saare fields apne aap aa jayenge)
    const admissionData = {
      ...dataToSave,
      status: "pending",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    // 5. Save to Firestore
    await adminDb.collection("admissions").add(admissionData);

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("Admission Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}