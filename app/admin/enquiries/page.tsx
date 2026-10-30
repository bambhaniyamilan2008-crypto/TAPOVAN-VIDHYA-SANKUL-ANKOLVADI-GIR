import { adminDb } from "@/lib/firebaseAdmin";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  let enquiries: any[] = [];
  
  try {
    const snapshot = await adminDb
      .collection("enquiries")
      .orderBy("createdAt", "desc")
      .get();
      
    enquiries = snapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    }));
  } catch (error) {
    console.error("Error fetching enquiries:", error);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Enquiries</h1>

      <div className="grid grid-cols-1 gap-6">
        {enquiries.length === 0 ? (
          <div className="bg-white p-8 text-center text-gray-500 rounded-xl border border-gray-100">
            No messages yet.
          </div>
        ) : (
          enquiries.map((msg) => (
            <div key={msg.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{msg.name}</h3>
                  <div className="text-sm text-gray-500 flex gap-4 mt-1">
                    <span>📞 {msg.phone}</span>
                    {msg.email && <span>✉️ {msg.email}</span>}
                  </div>
                </div>
                <div className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  {format(new Date(msg.createdAt), "dd MMM yyyy, hh:mm a")}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-gray-700 text-sm border border-gray-100">
                <span className="font-semibold text-gray-900 block mb-1">Message:</span>
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}