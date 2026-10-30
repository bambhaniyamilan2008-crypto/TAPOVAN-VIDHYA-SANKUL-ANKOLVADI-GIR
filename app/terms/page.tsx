import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tapovan Vidhya Sankul",
  description: "Terms and conditions of use for Tapovan Vidhya Sankul Ankolvadi-Gir.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-school-blue mb-8 border-b pb-4">Terms and Conditions</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p><strong>Effective Date:</strong> October 2026</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the website of Tapovan Vidhya Sankul Ankolvadi-Gir, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use of Website Content</h2>
          <p>
            All content provided on this website is for informational purposes regarding admissions, academics, and school activities. The images, logos, and curriculum details are the property of Tapovan Vidhya Sankul. Unauthorized copying or commercial use is prohibited.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Admission & Online Forms</h2>
          <p>
            Submitting an online admission enquiry form does not guarantee admission. The final decision rests with the school administration based on eligibility criteria, document verification, and seat availability. All information provided by the applicant must be true and accurate.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Code of Conduct</h2>
          <p>
            Users agree not to use the website or its contact forms for spamming, sending malicious files, or any unlawful activity. We reserve the right to block access to anyone violating these terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
          <p>
            If you have any queries regarding these terms, please reach out to us at our main campus in Ankolvadi-Gir or via our official contact page.
          </p>
        </div>
      </div>
    </div>
  );
}