import createNextIntlPlugin from "next-intl/plugin";
import createNextMDXPlugin from "@next/mdx";
import NextBundleAnalyzer from "@next/bundle-analyzer";

import rehypeShiki from "@shikijs/rehype";

const withNextIntl = createNextIntlPlugin();
const withMDX = createNextMDXPlugin({
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: "vitesse-light",
            dark: "vitesse-dark",
          },
          defaultColor: false,
        },
      ],
    ],
  },
});
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/mp/lib.min.js",
        destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
      },
      {
        source: "/mp/lib.js",
        destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.js",
      },
      {
        source: "/mp/decide",
        destination: "https://decide.mixpanel.com/decide",
      },
      {
        source: "/mp/:slug",
        // use "api-eu.mixpanel.com" if you need to use EU servers
        destination: "https://api.mixpanel.com/:slug",
      },
    ];
  },
  webpack: (config) => {
    // https://github.com/vercel/next.js/discussions/36981
    config.module.generator["asset/resource"] =
      config.module.generator["asset"];
    config.module.generator["asset/source"] = config.module.generator["asset"];
    delete config.module.generator["asset"];

    const imageLoaderRule = config.module.rules.find(
      (rule) => rule.loader === "next-image-loader",
    );
    imageLoaderRule.exclude = /\.inline\.(png|jpg|svg)$/i;

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.inline\.(png|jpg|gif)$/i,
        type: "asset/inline",
      },
      {
        test: /\.all-contributorsrc/,
        type: "json",
      },
    ];
    return config;
  },
};

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
