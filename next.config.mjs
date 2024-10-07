/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' https://*.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
            },
          ],
        },
      ]
    },
  };
  
  export default nextConfig;