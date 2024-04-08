import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/privacy",
          "/admin",
          "/admin/*",
          "/changePassword",
          "/profile",
        ],
      },
    ],
    sitemap: `https://pranayama-yoga-studio.online/sitemap.xml`,
  };
}
