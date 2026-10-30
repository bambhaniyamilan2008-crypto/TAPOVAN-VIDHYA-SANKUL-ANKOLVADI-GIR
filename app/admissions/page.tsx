import AdmissionForm from "@/components/forms/AdmissionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Tapoval Vidhya Sankul",
  description: "Apply for admissions at Tapoval Vidhya Sankul. Fill the online enquiry form for KG to 12th standards.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Information */}
        <div className="pt-4">
          <h1 className="text-4xl font-extrabold text-school-blue mb-4">
            Admissions Open <span className="text-school-gold">2024-25</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Take the first step towards a bright future. We offer holistic education in both Gujarati and English mediums, backed by top-tier infrastructure and expert faculty.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility Criteria</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pre-Primary: Minimum age 3 years</li>
                <li>Standard 1: Minimum age 6 years</li>
                <li>Standard 11: Based on Std 10 Board Results</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Required Documents</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Birth Certificate (Original & Copy)</li>
                <li>Previous year's Marksheet</li>
                <li>School Leaving Certificate (LC)</li>
                <li>Aadhar Card (Student & Parents)</li>
                <li>Passport size photographs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: The Form Component */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <AdmissionForm />
        </div>
        
      </div>
    </div>
  );
}