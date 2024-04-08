import { MetadataRoute } from "next";
import { navbar_list } from "@components/constants";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = navbar_list.map((item) => ({
    url: `https://pranayama-yoga-studio.online${item.link}`,
    // You can add other properties like changefreq, priority, etc. if needed
  }));

  return pages;
}
