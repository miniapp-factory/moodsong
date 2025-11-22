import { title, description, url } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    name: "Song Suggestor App",
    description: "Suggests songs based on user emotion",
    image: `${url}/logo.png`,
  });
}
