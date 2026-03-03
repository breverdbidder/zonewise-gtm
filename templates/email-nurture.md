# HubSpot Email Nurture Sequence — 4 Emails
**Version:** 2.0 | Updated: March 3, 2026  
**Trigger:** New signup on zonewise.ai  
**Rule:** Every email covers BOTH foreclosure sales AND tax deed sales. Never mention only one.

---

## Email 1 — Welcome (Immediate)

**Subject:** Your free FL auction analysis is ready

Hey [First Name],

ZoneWise analyzes Florida properties across both foreclosure sales and tax deed sales — the two ways distressed real estate moves in this state.

Reply with any FL parcel ID and I'll run it through the full pipeline:

- **LienWise** — surviving liens (critical for HOA foreclosure cases) + tax cert chains (for tax deed sales)
- **CMAWise** — ARV, comps, neighborhood demographics
- **ZoneAnalyze** — zoning exit strategy (flip, hold, or develop?)
- **Max bid formula** — BID / REVIEW / SKIP with your number

It's free. Takes 60 seconds. Reply with any parcel ID from your county.

— ZoneWise

---

## Email 2 — Social Proof (Day 3)

**Subject:** How a $42K surviving lien almost cost an investor everything

[First Name],

Last month a Brevard investor was ready to bid on a foreclosure sale. The judgment was $180K. The property was worth $280K after repairs. Numbers looked great.

ZoneWise flagged it: **$42K surviving HOA lien**. The HOA had foreclosed — meaning the senior mortgage survives the sale and transfers to the buyer.

He passed. The winning bidder paid $195K. Then discovered the lien.

The same logic applies to tax deed sales. Outstanding tax certificates, cert chains with redemption issues — LienWise auto-searches AcclaimWeb and RealTDM for both sale types before you ever raise your paddle or click BID.

[Attached: sample ZoneWise report — both a foreclosure and a tax deed property]

What county are you in? I'll pull your next upcoming sales.

— ZoneWise

---

## Email 3 — Education (Day 7)

**Subject:** The 3 numbers that change everything at a FL auction

[First Name],

Whether you're bidding at the Titusville courthouse (foreclosure sales) or clicking through RealForeclose online (tax deed sales), three numbers determine every decision:

**1. ARV — After Repair Value**
What is this property worth fixed up? ZoneWise pulls 6-month comps, adjusts for condition, neighborhood income, and vacancy rate. Not Zillow's guess — actual closed sales.

**2. Surviving Encumbrances**
- *Foreclosure sales:* Senior mortgages survive HOA foreclosures. Code enforcement liens can survive. ZoneWise LienWise auto-checks AcclaimWeb every time.
- *Tax deed sales:* Outstanding tax certs, IRS liens, and utility liens can survive. ZoneWise RealTDM integration catches cert chain issues automatically.

**3. Max Bid**
`(ARV × 70%) − Estimated Repairs − $10K − MIN($25K, 15% × ARV)`

That's the ceiling. ZoneWise calculates it instantly. Bid/judgment ratio ≥75% = BID. 60-74% = REVIEW. Below 60% = SKIP.

Knowing these three numbers for every property in your county — for both foreclosure and tax deed sales — is the edge. Most investors are still doing this manually.

[CTA: Run a free analysis on your next property →]

— ZoneWise

---

## Email 4 — Offer (Day 14)

**Subject:** Your trial starts now — both FL auction types, 14 days free

[First Name],

ZoneWise Pro is $99/month for your county.

Here's what that covers:

✓ **Both foreclosure sales AND tax deed sales** — every scheduled auction, scraped daily  
✓ **LienWise auto-detection** — surviving liens, tax cert chains, HOA status  
✓ **ZoneAnalyze** — zoning compliance and exit strategy for every property  
✓ **298 KPIs** — 3× more intelligence than PropertyOnion  
✓ **Full DOCX reports** — ready for your deal file  
✓ **MCP access** — query ZoneWise inside Claude Desktop and Cursor  

14-day free trial. Card required to start — we only want serious investors.

Your next auctions in [County]:
- Foreclosure sale: [date] — [N] properties on docket
- Tax deed sale: [date] — [N] properties on RealForeclose

[Start 14-Day Trial → $99/mo after trial]

If $99/mo isn't the right fit, reply and tell me why — I read every response.

— Ariel, ZoneWise.AI

---

## Sequence Notes

- All emails logged to Supabase `email_events` table on send + open + click
- If Email 2 gets a reply → flag as hot lead in HubSpot → notify Ariel immediately
- If user clicks trial link before Email 4 → pause sequence, trigger trial onboarding sequence
- 30 days after Email 4 with no conversion → move to low-cadence monthly newsletter
