import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.agerfly.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.agerfly.com/nosotros",
      lastModified: new Date(),
    },
    {
      url: "https://www.agerfly.com/contacto",
      lastModified: new Date(),
    },
    {
      url: "https://www.agerfly.com/soporte",
      lastModified: new Date(),
    },
    {
      url: "https://www.agerfly.com/privacidad",
      lastModified: new Date(),
    },
    {
      url: "https://www.agerfly.com/terminos",
      lastModified: new Date(),
    },
  ]
}