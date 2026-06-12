export async function POST(req: Request) {
  const { text } = await req.json()

  const response = await fetch("https://api.fish.audio/v1/tts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FISH_AUDIO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      reference_id: process.env.FISH_AUDIO_VOICE_ID,
      format: "mp3",
      latency: "normal",
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    return new Response(error, { status: response.status })
  }

  const audioBuffer = await response.arrayBuffer()
  return new Response(audioBuffer, {
    headers: { "Content-Type": "audio/mpeg" },
  })
}
