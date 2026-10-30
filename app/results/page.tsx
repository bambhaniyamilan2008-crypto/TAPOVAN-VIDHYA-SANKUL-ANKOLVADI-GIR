import { Metadata } from "next";
import { Trophy, Medal, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Results | Tapoval Vidhya Sankul",
  description: "Hall of fame and outstanding board results of Tapoval Vidhya Sankul students.",
};

// Dummy Data (Admin panel se real data aayega baad me)
const toppers = [
  { id: 1, name: "Aarav Patel", exam: "12th Science", score: "99.9 PR", year: "2024", image: "A" },
  { id: 2, name: "Diya Shah", exam: "10th Board", score: "98.5%", year: "2024", image: "D" },
  { id: 3, name: "Rohan Desai", exam: "12th Commerce", score: "97.2%", year: "2024", image: "R" },
  { id: 4, name: "Meera Joshi", exam: "JEE Mains", score: "99.1 PR", year: "2024", image: "M" },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Trophy className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Hall of Fame</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating the extraordinary academic achievements of our brilliant students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 flex flex-wrap gap-4 items-center justify-between border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Latest Results (2024)</h2>
          {/* Future implementation: Filter dropdowns */}
          <div className="flex gap-3">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-school-blue">
              <option>All Exams</option>
              <option>10th Board</option>
              <option>12th Science</option>
              <option>12th Commerce</option>
            </select>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((student) => (
            <div key={student.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group relative">
              <div className="absolute top-4 right-4 bg-school-gold text-white p-2 rounded-full z-10 shadow-md">
                <Medal size={20} />
              </div>
              <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400 group-hover:bg-school-blue/10 transition-colors">
                {/* Yahan baad me next/image aayega */}
                {student.image}
              </div>
              <div className="p-6 text-center border-t-4 border-school-blue">
                <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                <p className="text-school-blue font-semibold mb-2">{student.exam}</p>
                <div className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-bold text-lg">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  {student.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}