/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
         
          
          // Add more domains here if needed
        ],
      },
};

export default nextConfig;
