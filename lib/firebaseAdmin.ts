import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Handle newlines in the private key correctly
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  } catch (error) {
    console.error('Firebase Admin Initialization Error', error);
  }
}

// 🔥 YAHAN CHANGE KIYA HAI: Vercel build crash rokne ke liye condition lagayi
export const adminDb = admin.apps.length ? admin.firestore() : ({} as any);
export const adminAuth = admin.apps.length ? admin.auth() : ({} as any);
export const adminStorage = admin.apps.length ? admin.storage() : ({} as any);