import { Metadata } from "next";
import { MapPin, Phone, Mail, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Campuses | Tapoval Vidhya Sankul",
  description: "Explore the different units and branches of Tapoval Vidhya Sankul.",
};

const campuses = [
  {
    name: "Main Unit (KG to 10th)",
    address: "123 Education Road, Knowledge City, Gujarat - 360001",
    phone: "+91 98765 43210",
    email: "main@alphavidhyasankul.com",
    mapLabel: "Map: Main Unit",
    theme: "border-school-blue",
  },
  {
    name: "Science Unit (11th & 12th)",
    address: "456 Science Park Avenue, Knowledge City, Gujarat - 360002",
    phone: "+91 98765 43211",
    email: "science@alphavidhyasankul.com",
    mapLabel: "Map: Science Unit",
    theme: "border-school-gold",
  },
  {
    name: "Girls Campus",
    address: "789 Safeway Road, Knowledge City, Gujarat - 360003",
    phone: "+91 98765 43212",
    email: "girls@alphavidhyasankul.com",
    mapLabel: "Map: Girls Campus",
    theme: "border-pink-500",
  },
];

export default function CampusesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Building className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Campuses</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strategically located, purpose-built campuses to provide the best learning environment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {campuses.map((campus, index) => (
          <div key={index} className={`bg-white rounded-2xl shadow-sm border-t-4 ${campus.theme} border-x border-b border-gray-100 overflow-hidden flex flex-col lg:flex-row`}>
            {/* Campus Details */}
            <div className="p-8 lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{campus.name}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 leading-relaxed">{campus.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">{campus.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{campus.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="lg:w-1/2 bg-gray-200 min-h-[300px] flex items-center justify-center text-gray-500 font-medium relative">
              <div className="absolute inset-0 bg-school-blue/5"></div>
              {campus.mapLabel} (Embed Google Map iframe here later)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}