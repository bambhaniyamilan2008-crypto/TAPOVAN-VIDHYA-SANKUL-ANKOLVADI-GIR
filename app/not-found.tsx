import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-4">
      <FileQuestion className="w-24 h-24 text-school-blue mb-6 opacity-50" />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist at Tapovan Vidhya Sankul.
      </p>
      <Link
        href="/"
        className="bg-school-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}