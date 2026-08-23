const API_CATALOG_LINKSET = {
  linkset: [
    {
      anchor: "https://bydhruvil.in",
      item: [
        {
          href: "https://bydhruvil.in/openapi.json",
          rel: "service-desc",
          type: "application/vnd.oai.openapi+json;version=3.1",
        },
        {
          href: "https://bydhruvil.in/developers",
          rel: "service-doc",
          type: "text/html",
        },
        {
          href: "https://bydhruvil.in/llms.txt",
          rel: "describedby",
          type: "text/markdown",
        },
        {
          href: "https://bydhruvil.in/ask",
          rel: "service",
          type: "application/json",
        },
        {
          href: "https://bydhruvil.in/.well-known/mcp/server-card.json",
          rel: "service-desc",
          type: "application/json",
        },
      ],
    },
  ],
};

export async function GET() {
  return new Response(JSON.stringify(API_CATALOG_LINKSET, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    },
  });
}
