/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'agerfly.com',
          },
        ],
        destination: 'https://www.agerfly.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig