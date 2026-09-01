import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://nodra-studio.lexthus.chatgpt.site/sitemap.xml",
  };
}
