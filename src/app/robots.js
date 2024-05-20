const config = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://www.marvel365bet.com"
      : "http://localhost:3000",
};
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/",
    },
    sitemap:
      config.baseUrl === "https://www.marvel365bet.com"
        ? "https://www.marvel365bet.com/sitemap.xml"
        : "http://localhost:3000/sitemap.xml",
  };
}
