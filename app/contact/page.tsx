import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Tapoval Vidhya Sankul",
  description: "Get in touch with Tapoval Vidhya Sankul for admissions and enquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-school-blue mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We would love to hear from you. Reach out to us for admissions, feedback, or any other queries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Details & Map */}
          <div className="bg-school-blue text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-school-gold">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-school-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Main Campus</p>
                    <p className="text-gray-300">123 Education Road, Knowledge City,<br />Gujarat, India - 360001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-school-gold flex-shrink-0" />
                  <p className="text-lg">+91 98765 43210</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-school-gold flex-shrink-0" />
                  <p className="text-lg">info@alphavidhyasankul.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-48 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center border border-white/20">
               <p className="text-white/60 font-medium text-sm">Google Maps Embed Here</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}