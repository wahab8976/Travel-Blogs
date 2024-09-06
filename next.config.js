// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any request starting with /api/
        destination: "https://autocomplete.search.hereapi.com/v1/:path*", // Redirect to the external API
      },
    ];
  },
};
