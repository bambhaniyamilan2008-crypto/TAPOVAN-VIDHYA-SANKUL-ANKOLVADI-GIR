import { Metadata } from "next";
import { Trophy, Medal, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Sports | Tapoval Vidhya Sankul",
  description: "State-of-the-art sports facilities and achievements at Tapoval Vidhya Sankul.",
};

const sportsList = [
  { name: "Cricket", desc: "Professional full-size ground with net practice facility." },
  { name: "Basketball", desc: "Standard synthetic court for inter-school tournaments." },
  { name: "Volleyball", desc: "Well-maintained court with expert coaching." },
  { name: "Athletics", desc: "Running track and facilities for track and field events." },
  { name: "Table Tennis", desc: "Indoor sports arena equipped with professional tables." },
  { name: "Chess & Carrom", desc: "Indoor mind-sports room to enhance cognitive skills." },
];

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Activity className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Sports & Athletics</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Physical fitness and teamwork are integral parts of our holistic education approach.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Achievements Banner */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-school-gold">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Trophy className="text-school-gold" /> Recent Achievement
            </h2>
            <p className="text-gray-600 mt-2">
              Our Under-19 Cricket team won the State Level Championship 2023. Proud of our young athletes!
            </p>
          </div>
          <div className="shrink-0 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
            <Medal size={20} /> State Champions
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-school-blue">Our Sports Facilities</h2>
          <p className="text-gray-600 mt-2">Equipped with the best infrastructure and professional coaches.</p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsList.map((sport, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-school-blue rounded-full flex items-center justify-center font-bold text-xl mb-4">
                {sport.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{sport.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}