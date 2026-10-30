import { Metadata } from "next";
import { Newspaper, Calendar, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Notices | Tapoval Vidhya Sankul",
  description: "Stay updated with the latest news, notices, and events at Tapoval Vidhya Sankul.",
};

const posts = [
  {
    id: 1,
    type: "Notice",
    title: "Diwali Vacation Schedule 2024",
    date: "Oct 15, 2024",
    excerpt: "Please note that the school will remain closed for Diwali vacation from Oct 28 to Nov 15. Regular classes will resume on Nov 16.",
    icon: <Bell className="text-red-500" size={20} />,
  },
  {
    id: 2,
    type: "News",
    title: "Science Fair Winners Announced",
    date: "Oct 10, 2024",
    excerpt: "Congratulations to our Class 11 Science students for winning the first prize at the State Level Science Exhibition in Gandhinagar.",
    icon: <Newspaper className="text-blue-500" size={20} />,
  },
  {
    id: 3,
    type: "Event",
    title: "Annual Sports Meet Registration",
    date: "Oct 05, 2024",
    excerpt: "Registrations for the Annual Sports Meet 2024 are now open. Interested students must submit their forms to their class teachers by Oct 20.",
    icon: <Calendar className="text-green-500" size={20} />,
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Newspaper className="w-16 h-16 mx-auto text-school-gold mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">News & Notices</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay informed about everything happening at Tapoval Vidhya Sankul.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6">
              
              {/* Date & Type Tag */}
              <div className="shrink-0 md:w-48 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-2">
                <div className="text-sm font-bold text-gray-500">{post.date}</div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
                  {post.icon} {post.type}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={`#`} className="text-school-blue font-semibold hover:text-school-gold transition-colors inline-flex items-center gap-1 text-sm">
                  Read full notice &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}