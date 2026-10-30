import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Admin aur API routes search engines se hide kiye hain
    },
    // Jab live domain le lo, to is URL ko badal dena
    sitemap: 'https://www.tapovanvidhyasankul.com/sitemap.xml',
  };
}