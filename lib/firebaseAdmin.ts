import * as admin from 'firebase-admin';

// 1. Dono naam check kar lenge (NEXT_PUBLIC wala bhi aur normal wala bhi)
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

// 2. Condition: Agar teeno keys milengi, tabhi initialize hoga, warna build pass ho jayega bina crash hue
if (!admin.apps.length && projectId && clientEmail && privateKey) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: projectId,
        clientEmail: clientEmail,
        privateKey: privateKey,
      }),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  } catch (error) {
    console.error('Firebase Admin Initialization Error:', error);
  }
}

// 3. Vercel build crash se bachne ke liye safe exports
export const adminDb = admin.apps.length ? admin.firestore() : ({} as any);
export const adminAuth = admin.apps.length ? admin.auth() : ({} as any);
export const adminStorage = admin.apps.length ? admin.storage() : ({} as any);