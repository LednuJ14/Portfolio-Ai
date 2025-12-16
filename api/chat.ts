declare const process: { env: Record<string, string | undefined> };

interface RequestLike {
  method: string;
  body?: unknown;
}

interface ResponseLike {
  setHeader(name: string, value: string): void;
  status(code: number): ResponseLike;
  type(t: string): ResponseLike;
  send(body: string): void;
  json(obj: unknown): void;
  end(): void;
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.status(200).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const host = process.env.FLOWISE_API_HOST;
  const id = process.env.CHATFLOW_ID;
  const key = process.env.FLOWISE_API_KEY;
  if (!host || !id) {
    res.status(500).json({ error: "Proxy not configured" });
    return;
  }
  const url = `${host}/api/v1/prediction/${id}`;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (key) headers["Authorization"] = `Bearer ${key}`;
  const payload = typeof req.body === "object" && req.body ? req.body : {};
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.status(response.status).send(text);
}
