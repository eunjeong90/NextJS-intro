/** @type {import('next').NextConfig} */
const API_KEY = "f672361f3090133b19a5dedad76f43a7";
const nextConfig = {
  reactStrictMode: true,
  // redirects시 유저가 url이 바뀌는 걸 볼 수 있음
  async redirects() {
    return [{
      source: "/cinema/:path*",
      destination: "/movie/:path*",
      permanent: false,
    }]
  },
  // redirects 시키지만 url이 변화하지 않음!
  async rewrites() {
    return[{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    },
    {
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
    }
  ]
  }
}

module.exports = nextConfig
