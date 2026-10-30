import { Metadata } from "next";
import { Target, Eye, BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tapoval Vidhya Sankul",
  description: "Learn about the history, vision, and mission of Tapoval Vidhya Sankul.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-school-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Tapoval Vidhya Sankul</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nurturing potential, building character, and shaping the leaders of tomorrow since 2010.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-school-gold">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg text-school-blue">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a premier educational institution that fosters holistic development, critical thinking, and a lifelong passion for learning in a highly dynamic and competitive global environment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-school-blue">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-50 rounded-lg text-school-gold">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education through a balanced curriculum, integrating modern technology with traditional values. We aim to empower students to achieve academic excellence and ethical strength.
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden border-4 border-school-gold flex items-center justify-center text-gray-400">
                Principal Photo
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-school-blue mb-4">Principal's Message</h2>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "Education is not just about academic success; it's about preparing children for life. At Tapoval Vidhya Sankul, we focus on discovering the unique potential inside every child. Our dedicated faculty ensures that our students grow up to be responsible, confident, and compassionate citizens."
              </p>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Dr. Rajesh Patel</h4>
                <p className="text-school-gold font-medium">Principal, Tapoval Vidhya Sankul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mediums & Classes */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
              <BookOpen className="text-school-blue" />
              <span className="font-semibold text-gray-700">Gujarati & English Medium</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
              <GraduationCap className="text-school-gold" />
              <span className="font-semibold text-gray-700">KG to 12th Standard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}