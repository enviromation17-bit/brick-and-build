// Single destination for every lead on the site — the contact form, the
// Toba Tek Singh register-interest form, and the assistant's inline capture
// all call this same function, so everything lands in the same place
// (a Google Sheet, via an n8n webhook — see /automation in the project docs).
//
// TO CONNECT: paste your n8n Webhook "Production URL" below.
const LEAD_WEBHOOK_URL = ""; // <- paste your n8n Webhook URL here once it's set up

export async function submitLead(data) {
  const payload = {
    ...data,
    page: window.location.pathname,
    submittedAt: new Date().toISOString(),
  };

  if (!LEAD_WEBHOOK_URL) {
    console.info("[submitLead] placeholder — LEAD_WEBHOOK_URL not set yet.", payload);
    return new Promise((resolve) => setTimeout(resolve, 400));
  }

  const res = await fetch(LEAD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Lead submission failed");
}
