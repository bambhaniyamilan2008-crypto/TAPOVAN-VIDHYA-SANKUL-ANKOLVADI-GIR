import { Metadata } from "next";
import { BookOpen, Download, GraduationCap, Microscope, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Academics & Curriculum | Tapoval Vidhya Sankul",
  description: "Academic structure, curriculum details, and timetables for Std KG to 12th.",
};

const programs = [
  {
    title: "Pre-Primary & Primary (KG to Std 5)",
    desc: "Focus on foundational literacy, numeracy, and cognitive development through play-way methods.",
    icon: <BookOpen className="text-school-blue" size={32} />,
  },
  {
    title: "Secondary (Std 6 to 10)",
    desc: "Comprehensive curriculum focusing on core subjects, analytical thinking, and board exam preparation.",
    icon: <Calculator className="text-school-blue" size={32} />,
  },
  {
    title: "Higher Secondary (Std 11 & 12 Science)",
    desc: "Rigorous preparation for Board exams along with competitive exams like JEE, NEET, and GUJCET.",
    icon: <Microscope className="text-school-blue" size={32} />,
  },
  {
    title: "Higher Secondary (Std 11 & 12 Commerce/Arts)",
    desc: "In-depth study of accountancy, business, economics, and humanities for future professional courses.",
    icon: <GraduationCap className="text-school-blue" size={32} />,
  },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <BookOpen className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Academic Programs</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive education in Gujarati & English mediums, designed to foster intellectual growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prog.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        {/* Timetables & Downloads */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-school-blue mb-8 text-center">Curriculum & Timetables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-school-gold transition-colors">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Std 1 to 5 Timetable</h4>
              <p className="text-sm text-gray-500 mb-6">Academic Year 2024-25</p>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors mt-auto w-full justify-center">
                <Download size={18} /> Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-school-gold transition-colors">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Std 6 to 10 Timetable</h4>
              <p className="text-sm text-gray-500 mb-6">Academic Year 2024-25</p>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors mt-auto w-full justify-center">
                <Download size={18} /> Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-school-gold transition-colors">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Std 11 & 12 Timetable</h4>
              <p className="text-sm text-gray-500 mb-6">Science & Commerce Streams</p>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors mt-auto w-full justify-center">
                <Download size={18} /> Download PDF
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}