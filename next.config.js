/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  redirects: async () => {
    return [
      {
        source: "/categories",
        destination: "/categories/all",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer({ ...nextConfig });
