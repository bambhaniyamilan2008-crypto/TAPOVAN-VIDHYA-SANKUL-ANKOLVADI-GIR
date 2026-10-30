import { Metadata } from "next";
import { Building2, Monitor, Beaker, Utensils, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastructure | Tapoval Vidhya Sankul",
  description: "Explore the world-class infrastructure, labs, and hostel facilities at Tapoval Vidhya Sankul.",
};

const facilities = [
  {
    icon: <Beaker size={32} />,
    title: "Advanced Science Labs",
    desc: "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology providing hands-on practical experience safely under expert guidance.",
  },
  {
    icon: <Monitor size={32} />,
    title: "Computer & IT Center",
    desc: "High-speed internet enabled computer labs with the latest hardware and software to keep students updated with modern technology.",
  },
  {
    icon: <Home size={32} />,
    title: "Secure Hostel",
    desc: "A home away from home. We provide separate, highly secure, and comfortable residential facilities for boys and girls with strict wardens.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Hygienic Canteen",
    desc: "Spacious dining area serving highly nutritious, pure vegetarian, and hygienic food prepared in a clean environment.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Building2 className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">World-Class Infrastructure</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Providing a safe, inspiring, and advanced physical environment for holistic learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow">
              {/* Image Placeholder */}
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative flex items-center justify-center text-gray-400 group-hover:bg-school-blue/10 transition-colors">
                Photo
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="text-school-blue mb-3 bg-blue-50 w-fit p-3 rounded-xl">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}