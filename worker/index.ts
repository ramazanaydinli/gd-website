/**
 * Gündoğu İnşaat — Worker
 * Statik siteyi (env.ASSETS) sunar + /api/contact uç noktası ile
 * lead formunu Resend üzerinden e-postaya çevirir.
 *
 * Gerekli:
 *   - RESEND_API_KEY  (secret)  → Cloudflare > Worker > Settings > Variables & Secrets
 *   - CONTACT_TO      (var)     → bildirimin gideceği adres (default info@gundoguinsaat.com)
 *   - CONTACT_FROM    (var)     → gönderen (default onboarding@resend.dev; domain doğrulanınca @gundoguinsaat.com yap)
 */

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = 200;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX) : "";
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // Honeypot — botlar bu gizli alanı doldurur; sessizce başarı dön.
  if (clean(data.website)) return json({ ok: true });

  const name = clean(data.name);
  const company = clean(data.company);
  const email = clean(data.email);
  const phone = clean(data.phone); // opsiyonel

  if (!name || !company || !email || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "validation" }, 422);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "not_configured" }, 500);
  }

  const to = env.CONTACT_TO || "info@gundoguinsaat.com";
  const from = env.CONTACT_FROM || "Gündoğu İnşaat <onboarding@resend.dev>";

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;font-size:15px;color:#1F2731;line-height:1.6">
      <h2 style="margin:0 0 16px;font-weight:600">Yeni sunum talebi</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#6B7686">Ad Soyad</td><td style="padding:4px 0"><strong>${esc(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#6B7686">Firma</td><td style="padding:4px 0"><strong>${esc(company)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#6B7686">E-posta</td><td style="padding:4px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 16px 4px 0;color:#6B7686">Telefon</td><td style="padding:4px 0"><strong>${esc(phone)}</strong></td></tr>` : ""}
      </table>
      <p style="margin:20px 0 0;color:#6B7686;font-size:13px">Bu talep gundoguinsaat.com üzerindeki iletişim formundan gönderildi. Yanıtlarsanız doğrudan talep sahibine ulaşır.</p>
    </div>`.trim();

  const text = `Yeni sunum talebi\n\nAd Soyad: ${name}\nFirma: ${company}\nE-posta: ${email}${phone ? `\nTelefon: ${phone}` : ""}\n\n(gundoguinsaat.com iletişim formu)`;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Yeni sunum talebi — ${name} / ${company}`,
      html,
      text,
    }),
  });

  if (!resp.ok) {
    let detail = "";
    try {
      detail = await resp.text();
    } catch {
      /* ignore */
    }
    console.error("resend_error", resp.status, detail);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      if (request.method !== "POST") {
        return json({ ok: false, error: "method_not_allowed" }, 405);
      }
      return handleContact(request, env);
    }

    // Diğer her şey → statik dosyalar (out/)
    return env.ASSETS.fetch(request);
  },
};
