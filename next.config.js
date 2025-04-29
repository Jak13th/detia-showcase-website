/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        // Ajoutez ici les domaines pour les images externes si nécessaire
        // Par exemple: 'images.unsplash.com', 'res.cloudinary.com'
      ],
    },
  };
  
  module.exports = nextConfig;