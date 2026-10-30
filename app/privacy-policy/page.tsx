import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tapoval Vidhya Sankul",
  description: "Privacy policy and data protection terms for Tapoval Vidhya Sankul.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-school-blue mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p><strong>Last Updated:</strong> October 2024</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you apply for admissions or contact us via our website, we collect personal information such as student name, parent name, phone number, email address, and academic details. This data is collected securely to process your requests.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            The information collected is strictly used for school administrative purposes, admission processing, and communication. We do not sell, rent, or share your personal data with third-party advertising agencies. 
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures (including secure databases and encryption) to protect your personal information against unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. No Advertisements</h2>
          <p>
            Our website is strictly educational and does not host any third-party advertisements or tracking scripts. We value the privacy of our students and their guardians.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <strong>info@alphavidhyasankul.com</strong> or visit our main campus.
          </p>
        </div>
      </div>
    </div>
  );
}