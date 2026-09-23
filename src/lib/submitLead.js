// Brick & Built — all leads (form, assistant, WhatsApp link) → Google Sheet CRM
const LEAD_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbycn3s1AHPA1RVWPkakOxkO-fbA5zoBSZZWjkjb4xQiggwMyK8oa6joSHeozNO4fOXSjQ/exec";

function detectSource(explicit) {
  if (explicit) return String(explicit).toLowerCase();
  try {
    const q = new URLSearchParams(window.location.search).get("source");
    if (q) return String(q).toLowerCase();
  } catch {
    /* ignore */
  }
  return "form";
}

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.phone
 * @param {string} [data.interest]
 * @param {string} [data.role]
 * @param {string} [data.message]
 * @param {string} [data.source]  form | assistant | whatsapp | manual
 * @param {string} [data.page]
 */
export async function submitLead(data) {
  const payload = {
    name: String(data.name || "").trim(),
    phone: String(data.phone || "").trim(),
    interest: String(data.interest || "").trim(),
    role: String(data.role || "").trim(),
    message: String(data.message || data.note || "").trim(),
    source: detectSource(data.source),
    page: data.page || (typeof window !== "undefined" ? window.location.pathname : ""),
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.phone) {
    throw new Error("name and phone are required");
  }

  if (!LEAD_WEBHOOK_URL) {
    console.info("[submitLead] LEAD_WEBHOOK_URL not set", payload);
    return new Promise((resolve) => setTimeout(resolve, 400));
  }

  // Google Apps Script: text/plain + no-cors avoids CORS preflight issues
  await fetch(LEAD_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  // no-cors cannot read response; treat as success if request was sent
  return { ok: true };
}
