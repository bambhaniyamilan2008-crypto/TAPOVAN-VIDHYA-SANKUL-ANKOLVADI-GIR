import { Metadata } from "next";
import { Image as ImageIcon, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Tapoval Vidhya Sankul",
  description: "Glimpses of events, campus life, and activities at Tapoval Vidhya Sankul.",
};

// Dummy Data for Gallery
const galleryImages = [
  { id: 1, title: "Annual Function 2023", category: "Events" },
  { id: 2, title: "Science Exhibition", category: "Academics" },
  { id: 3, title: "Independence Day", category: "Events" },
  { id: 4, title: "Sports Meet", category: "Sports" },
  { id: 5, title: "Campus Overview", category: "Infrastructure" },
  { id: 6, title: "Computer Lab Session", category: "Academics" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Camera className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Photo Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into the vibrant life, events, and culture at Tapoval Vidhya Sankul.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Categories (Static for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="bg-school-blue text-white px-6 py-2 rounded-full font-semibold shadow-md">All</button>
          <button className="bg-white text-gray-600 hover:text-school-blue px-6 py-2 rounded-full font-semibold border border-gray-200 shadow-sm transition-colors">Events</button>
          <button className="bg-white text-gray-600 hover:text-school-blue px-6 py-2 rounded-full font-semibold border border-gray-200 shadow-sm transition-colors">Academics</button>
          <button className="bg-white text-gray-600 hover:text-school-blue px-6 py-2 rounded-full font-semibold border border-gray-200 shadow-sm transition-colors">Sports</button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer">
              {/* Image Placeholder */}
              <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                <ImageIcon className="text-gray-400 w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-school-blue/0 group-hover:bg-school-blue/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 border-t border-gray-50">
                <span className="text-xs font-bold text-school-gold uppercase tracking-wider">{img.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}