/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'msa-club.com',
            port: '', 
            pathname: '/assets/**', 
          },
         
        ],
      },
};

export default nextConfig;
