/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://127.0.0.1:5000/result/" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
