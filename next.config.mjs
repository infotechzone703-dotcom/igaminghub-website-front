/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/manage/:path*',
        destination: 'http://localhost:3001/manage/:path*',
      },
      {
        source: '/client/:path*',
        destination: 'http://localhost:3001/client/:path*',
      },
      {
        source: '/reseller/:path*',
        destination: 'http://localhost:3001/reseller/:path*',
      },
      {
        source: '/proxy/:path*',
        destination: 'http://localhost:3001/proxy/:path*',
      },
      {
        source: '/login',
        destination: 'http://localhost:3001/login',
      },
      {
        source: '/logout',
        destination: 'http://localhost:3001/logout',
      },
      {
        source: '/return-impersonation',
        destination: 'http://localhost:3001/return-impersonation',
      }
    ]
  }
};

export default nextConfig;
