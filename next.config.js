/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },

  /*   webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  }, */
};

module.exports = nextConfig;
