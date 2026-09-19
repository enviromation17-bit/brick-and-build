# Lead automation — setup guide

Two workflows, both importable into n8n (Workflows → Import from File).

## 1. `1-lead-capture-workflow.json` — catches every lead
- Fires whenever the contact form, the Toba Tek Singh form, or the assistant's
  inline capture is submitted on the website.
- Appends one row per lead into a Google Sheet.

**Setup:**
1. Create a Google Sheet. Name one tab `Leads` with this header row:
   `Name | Phone | Email | Role | Interest | Message | Source | Page | Submitted At`
2. Import the workflow into n8n.
3. Open the **Google Sheets** node → connect your Google account → select that
   sheet and the `Leads` tab.
4. Turn the workflow **Active**.
5. Open the **Webhook** node → copy its **Production URL**.
6. Paste that URL into `LEAD_WEBHOOK_URL` at the top of `js/main.js` on the
   website, then redeploy the site.

## 2. `2-thirty-day-digest-workflow.json` — tells the owner what came in
- Runs automatically every 30 days.
- Reads the same sheet, keeps only rows from the last 30 days, and emails a
  plain-text summary to the owner.

**Setup:**
1. Import the workflow into n8n.
2. Open the **Google Sheets** node → point it at the same sheet as workflow 1.
3. Open the **Gmail** node → connect the owner's Gmail account → replace
   `OWNER_EMAIL_HERE@example.com` with the real inbox.
4. Turn the workflow **Active**.

Want it sent over WhatsApp instead of email? Swap the Gmail node for a
WhatsApp/Twilio node — the rest of the workflow stays the same.

## Notes
- Credentials (Google Sheets, Gmail) don't transfer on import — you'll
  reconnect them once inside n8n; that's normal.
- These two workflows are independent, so you can turn either on/off without
  affecting the other.
- If you'd like the assistant to also answer on WhatsApp directly (not just
  capture leads from the website), that's a separate, third workflow — see
  the note in the main conversation about what that needs.
