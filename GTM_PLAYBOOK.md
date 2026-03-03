# ZoneWise.AI GTM Playbook v1.0
> March 2026 | Everest Capital USA | CONFIDENTIAL

## Executive Summary
ZoneWise.AI is the only platform delivering real-time, AI-powered foreclosure auction intelligence at scale across all 67 Florida counties. This playbook defines a 90-day GTM sprint from zero to first paying customers using a 3-agent AI stack and solo founder execution model.

**Primary Goal:** $2,500 MRR by Day 90 (25 paid subscribers)

---

## 1. ICP — Ideal Customer Profile

### ICP-1 (PRIMARY): Solo FL Investor
- Buys 2–10 properties/year at foreclosure auction
- $100K–$500K to deploy, self-managed
- Pain: 10+ hrs/week manual research, misses or overbids
- **Willingness to pay: $99/mo**

### ICP-2 (SECONDARY): Small Investor Group
- 2–5 person partnership, pooling capital
- Needs consistent methodology, shareable reports
- **Willingness to pay: $199/mo**

### ICP-3 (TERTIARY): Title / RE Attorney
- 10–50 foreclosure closings/month
- Needs lien and title data fast
- **Willingness to pay: $199/mo flat fee**

### Where to Find ICP-1
- Reddit: r/realestateinvesting, r/foreclosures, r/florida
- LinkedIn: "Real Estate Investor" + Florida filter
- Facebook: "Florida Real Estate Investors" groups
- BiggerPockets FL foreclosure forums
- PropertyOnion community

---

## 2. Positioning

### Positioning Statement
> "For Florida real estate investors who bid at foreclosure auctions, ZoneWise.AI is the only AI-powered platform that analyzes every property across all 67 Florida counties — delivering BID / REVIEW / SKIP decisions in seconds, not hours."

### vs. PropertyOnion
| | PropertyOnion | ZoneWise.AI |
|---|---|---|
| Counties | 1–3 | 67 |
| ML Predictions | No | Yes |
| Lien Automation | No | Yes |
| Max Bid Formula | No | Yes |
| Agentic AI | No | Yes |
| Price | $199/mo | $99/mo (launch) |

---

## 3. Channels

### 3.1 Content-Led Growth
ZoneWise generates unique data no one else has. The output IS the marketing.

| Asset | Frequency | Distribution | Purpose |
|-------|-----------|--------------|---------|
| FL Foreclosure Pulse | Weekly | Email + LinkedIn | List building |
| County Spotlight | Weekly | LinkedIn + landing page | SEO + leads |
| Free Property Analysis | On-demand | zonewise.ai CTA | Conversion |
| Case Studies | Monthly | Email + LinkedIn | Social proof |
| Demo Video | One-time | YouTube + LinkedIn | SEO + authority |

### 3.2 Direct Outreach (20 LinkedIn messages/week)
See `templates/linkedin-sequence.md` for full 4-step sequence.

**Target:** FL investors with 500–5K followers, active posting about RE investing, based in FL

### 3.3 Partnerships
- Title companies: free lien summaries → referrals
- RE Attorneys: white-label reports at $199/mo
- Investor meetups: Brevard REIA free county report trade
- PropertyOnion: data licensing ($500–1K/mo potential)

---

## 4. Pricing

| Tier | Price | Access | Target |
|------|-------|--------|--------|
| Free | $0 | 1 property analysis | Demo conversion |
| Pro | $99/mo | 1 county, daily | Solo investor |
| Statewide | $399/mo | All 67 counties | Multi-county / attorney |

**Rationale:** Average FL flip = $30K–$100K profit. At $99/mo, ZoneWise = <1 hr attorney time. 1 avoided overbid at $10K = 8.4 years of subscription. Priced below PropertyOnion for launch.

---

## 5. 90-Day Timeline

### Phase 1: Foundation (Days 1–30)
- [ ] Day 3: Ariel LinkedIn → ZoneWise.AI founder
- [ ] Day 5: Landing page live (Claude Code)
- [ ] Day 7: First FL Foreclosure Pulse published
- [ ] Day 10: HubSpot CRM + 4-email sequence live (Claude Code)
- [ ] Day 14: Free property analysis tool live (Claude Code)
- [ ] Day 14: 3 Reddit value posts
- [ ] Day 21: 1 title company conversation
- [ ] Day 30: 50 email subscribers ← GATE

### Phase 2: Activation (Days 31–60)
- [ ] Day 35: Stripe subscription live (Claude Code)
- [ ] Day 36: First monetization email to 50 subs
- [ ] Day 40: 3 new FL counties in pipeline
- [ ] Day 45: 5 demo calls completed
- [ ] Day 45: First 3 paying customers ($297 MRR)
- [ ] Day 60: 10 paying customers ($990 MRR) ← GATE

### Phase 3: Scale (Days 61–90)
- [ ] Day 65: Referral program live
- [ ] Day 70: 10 counties live
- [ ] Day 70: First YouTube demo video
- [ ] Day 75: 1 speaking slot confirmed
- [ ] Day 80: Press pitch sent (BiggerPockets, etc.)
- [ ] Day 90: $2,500 MRR / 25 customers ← GOAL

---

## 6. Ariel's Daily Routine (20 min max)

| Time | Duration | Action |
|------|----------|--------|
| Morning | 5 min | Review Claude Code run + Supabase metrics |
| Morning | 10 min | LinkedIn: 5 requests + reply + 1 post |
| Evening | 5 min | HubSpot: check new signups, respond to demo requests |

**Claude Code handles autonomously:** report generation, email sends, landing page updates, metrics logging, HubSpot sequence updates.

---

## 7. Tech Stack (all free or existing)

| Function | Tool | Cost |
|----------|------|------|
| Landing Page | Cloudflare Pages | FREE |
| CRM + Email | HubSpot Free | FREE |
| Payments | Stripe | $0 + 2.9% |
| Database | Supabase | FREE tier |
| Outreach | LinkedIn (manual) | FREE |
| Content AI | Claude Sonnet 4.5 | Max plan |
| Automation | n8n self-hosted | FREE |
| Analytics | Cloudflare + GA4 | FREE |

---

## 8. Risk Register

| Risk | Level | Mitigation |
|------|-------|-----------|
| Investors DIY mindset | MED | Demo-first, free tool creates habit |
| Scraper blocking | MED | AgentQL anti-detection, fallback UI |
| PropertyOnion FL expansion | LOW | 67-county + agentic AI = 18-mo build |
| Ariel ADHD context-switch | HIGH | 20-min/day design, Claude Code overnight |
| Wrong ICP (attorneys) | MED | ICP-1 is primary, attorney = upside only |

