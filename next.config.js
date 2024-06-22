/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {nextConfig}

module.exports = {
    

  //avoiding CORS error, more here: https://vercel.com/support/articles/how-to-enable-cors
  async headers() {
      return [
        {
          // matching all API routes
          source: "/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          ]
        }
      ]
  },
}