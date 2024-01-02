// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
