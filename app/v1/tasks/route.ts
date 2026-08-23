const RATE_LIMIT_HEADERS = {
  "RateLimit-Limit": "100",
  "RateLimit-Remaining": "99",
  "RateLimit-Reset": "60",
  "RateLimit-Policy": "100;w=60",
  "X-RateLimit-Limit": "100",
  "X-RateLimit-Remaining": "99",
  "X-RateLimit-Reset": "60",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key, X-Idempotency-Key, X-Agent-ID",
};

export async function POST(req: Request) {
  const idempotencyKey = req.headers.get("idempotency-key") || req.headers.get("x-idempotency-key") || "";
  const taskId = "task_" + Math.random().toString(36).substring(2, 10);

  return new Response(
    JSON.stringify({
      task_id: taskId,
      status: "processing",
      progress: 0,
      poll_url: `https://bydhruvil.in/v1/tasks/${taskId}`,
      created_at: new Date().toISOString(),
    }),
    {
      status: 202,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Location": `/v1/tasks/${taskId}`,
        ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
        ...RATE_LIMIT_HEADERS,
      },
    }
  );
}

export async function GET() {
  return new Response(
    JSON.stringify({
      tasks: [],
      message: "Async job execution pattern for heavy evaluations and agent tasks.",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8", ...RATE_LIMIT_HEADERS },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: RATE_LIMIT_HEADERS });
}
