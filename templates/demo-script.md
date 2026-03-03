# Demo Call Script (30 min)
**Version:** 2.0 | Updated: March 3, 2026

**Pre-call prep:**
- Pull 2-3 properties from their county (both foreclosure + tax deed if available)
- Check LinkedIn for their recent deals — do they focus on one or both auction types?
- Know their next scheduled auction dates (foreclosure courthouse + tax deed RealForeclose)

---

## 0:00–2:00 Discovery
> "Tell me about your last auction — was that a foreclosure sale at the courthouse or a tax deed sale online?"

> "And how do you typically split your time between the two types?"

*Listen for: which type they favor, what county, what size deals. Determines which ZoneWise capability to lead with.*

---

## 2:00–5:00 Problem Framing
> "How much time are you spending on research per property today — between pulling liens, checking the parcel, estimating ARV, figuring out the zoning for your exit?"

> "And has a lien or title issue ever killed a deal after you'd already bid?"

*Key pain: surviving senior mortgages in HOA foreclosure cases. Outstanding tax certs in tax deed chains. Both are LienWise's core value.*

---

## 5:00–20:00 Live Demo

### Step 1 — Pick a real parcel from their county (use one they recognize)
> "Give me any parcel ID from [their county] — one you've looked at recently, or I can pull one from this week's upcoming [foreclosure / tax deed] sale."

### Step 2 — Run the full pipeline live (60–90 seconds)
Walk through each stage out loud:

1. **DiscoverWise** — "Here's the auction record. This is a [foreclosure / tax deed] sale. Judgment amount: $[X]. Opening bid: $[Y]."
2. **LienWise** — "Auto-searched AcclaimWeb and RealTDM. [No surviving senior liens detected / WARNING: $42K HOA lien — senior mortgage survives this foreclosure / Outstanding tax cert from 2022 — must redeem at closing.]"
3. **CMAWise** — "ARV from comps: $[X]. Neighborhood income $[Y]K, vacancy [Z]%. Walk Score [N]."
4. **ZoneAnalyze** — "Zoned [R-1A / C-2 / etc.]. Setback [X]ft. Permitted uses: [SFR / multi-family / commercial]. Exit strategy: [flip / hold / develop]."
5. **Max Bid formula** — "ARV × 70% − Repairs − $10K − MIN($25K, 15% ARV) = **$[MAX BID]**. Bid/judgment ratio: [Z]%. Recommendation: **[BID / REVIEW / SKIP]**."

### Step 3 — The LienWise moment (most powerful)
If a lien is detected:
> "This is the thing that kills deals. That $42K surviving HOA lien — if you'd won this foreclosure, it transfers to you. ZoneWise caught it automatically. That's the difference between a $40K profit and a $2K loss."

For tax deed:
> "That outstanding 2022 tax cert — in a tax deed sale it typically gets wiped, but there are cert chain edge cases. TitleWise flags them before you bid."

---

## 20:00–25:00 Fit Check
> "Does this match how you think about deals? What would you add or change?"

> "Are you running both foreclosure sales and tax deed sales, or focused on one right now?"

*Listen for: volume of deals per month, counties they cover, whether they'd use the zoning / HBU analysis or just the auction intelligence. Determines Pro vs Team tier.*

---

## 25:00–30:00 Close

**For ICP-1 solo investor (1-2 counties):**
> "$99/mo covers your county — both foreclosure sales and tax deed sales, all 298 KPIs, LienWise auto-detection, full reports. 14-day trial included. Your next [county] foreclosure is [date] and tax deed sale is [date]. Want to run those properties before you bid?"

**For ICP-2 developer / multi-county investor:**
> "$299/mo gives you 5 seats, all active counties, bulk export, and API access. We're adding [X] counties this quarter. 14-day trial."

**Annual upsell:**
> "Annual plan saves you 2 months — $990/yr for Pro, $2,990/yr for Team."

---

## Objection Handling

| Objection | Response |
|---|---|
| "Too expensive" | "What does one missed overbid cost you? One avoided $20K mistake pays for 16 months of Pro." |
| "I already use PropertyOnion" | "PropertyOnion covers foreclosure + tax deed auctions too — but zero zoning, zero ML, zero lien automation. ZoneWise has 298 KPIs vs their 96. Want to run the same property through both?" |
| "I only do tax deed / only foreclosure" | "ZoneWise covers both in every report — you don't have to use both, but the data is there when you want it. Tax deed investors tell us LienWise's cert chain detection alone is worth it." |
| "I need to think about it" | "Totally fair. Trial is free for 14 days — no friction. I'll send you a report on [their next auction property] tonight. If it's useful, sign up. If not, no cost." |

---

**Post-call action (Claude Code, autonomous):**
- Log call outcome to Supabase `demo_calls` table
- If demo → trial: trigger HubSpot trial sequence
- If demo → no show: send 1 follow-up with sample report attached
- If interested but not ready: add to 30-day nurture sequence
