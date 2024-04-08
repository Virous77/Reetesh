export default async function sitemap() {
  const URL = "https://cv.reetesh.in";

  const restUrls = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
  ];

  return [...restUrls];
}
