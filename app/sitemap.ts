import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Apna asli live domain yahan dalna
  const baseUrl = 'https://www.tapovanvidhyasankul.com';
  
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/admissions`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/academics`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/campuses`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sports`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/results`, lastModified: new Date(), priority: 0.8 },
  ];
}