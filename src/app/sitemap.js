import React from "react";
import ArticleData from "./article/constants";

const fetchDataAndLog = async () => {
  try {
    const data = await ArticleData();
    return data.articleCards;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return []; 
  }
};

const Sitemap = async () => {
  const data = await fetchDataAndLog();

  console.log(data);
  const baseUrl = "https://www.marvel365bet.com";

  const articleUrl = data?.map((URLarticle) => ({
    url: `${baseUrl}/article/${URLarticle.slug}`,
    lastModified: new Date(URLarticle.updatedAt).toISOString(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/article`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...articleUrl,
  ];
};

export default Sitemap;
