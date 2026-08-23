const RATE_LIMIT_HEADERS = {
  "RateLimit-Limit": "100",
  "RateLimit-Remaining": "99",
  "RateLimit-Reset": "60",
  "RateLimit-Policy": "100;w=60",
  "X-RateLimit-Limit": "100",
  "X-RateLimit-Remaining": "99",
  "X-RateLimit-Reset": "60",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key, X-Idempotency-Key, X-Agent-ID",
};

export async function GET(
  req: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;

  return new Response(
    JSON.stringify({
      task_id: taskId,
      status: "completed",
      progress: 100,
      result: {
        agent: "Dhruvil AI",
        message: "Async task completed successfully.",
        summary: "Evaluated candidate profile and technical portfolio data.",
      },
      updated_at: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...RATE_LIMIT_HEADERS,
      },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: RATE_LIMIT_HEADERS });
}
