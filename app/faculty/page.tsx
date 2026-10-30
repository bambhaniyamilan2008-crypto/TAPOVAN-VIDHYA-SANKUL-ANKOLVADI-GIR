import { Metadata } from "next";
import { Users, GraduationCap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Faculty | Tapoval Vidhya Sankul",
  description: "Meet the expert and highly qualified teaching staff of Tapoval Vidhya Sankul.",
};

const facultyList = [
  { id: 1, name: "Mr. Amit Trivedi", subject: "Mathematics", qual: "M.Sc, B.Ed", exp: "15 Years", dept: "Science" },
  { id: 2, name: "Ms. Sneha Patel", subject: "Physics", qual: "M.Sc Physics", exp: "10 Years", dept: "Science" },
  { id: 3, name: "Mr. Rahul Verma", subject: "Accountancy", qual: "M.Com, CA", exp: "12 Years", dept: "Commerce" },
  { id: 4, name: "Mrs. Kavita Mehta", subject: "English", qual: "M.A. English, B.Ed", exp: "8 Years", dept: "Languages" },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Expert Faculty</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Guiding lights who shape the future with knowledge, experience, and dedication.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyList.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-400">
                {teacher.name.charAt(4)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
              <p className="text-school-blue font-semibold mb-4">{teacher.subject}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap size={16} className="text-school-gold" />
                  <span>{teacher.qual}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-school-gold" />
                  <span>{teacher.exp} Experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}