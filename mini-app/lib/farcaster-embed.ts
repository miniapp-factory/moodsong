import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/logo.png`,
        ogTitle: "Song Suggestor App",
        ogDescription: "Suggests songs based on user emotion",
        ogImageUrl: `${url}/logo.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: "Song Suggestor App",
            url: url,
            splashImageUrl: `${url}/logo.png`,
            iconUrl: `${url}/logo.png`,
            splashBackgroundColor: "#000000",
            description: "Suggests songs based on user emotion",
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}
