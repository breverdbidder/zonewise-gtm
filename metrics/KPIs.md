# ZoneWise.AI — GTM KPIs
**Version:** 2.0 | Updated: March 3, 2026  
**Log to:** Supabase `daily_metrics` table  
**Review:** Every Sunday (5 min)

---

## North Star Metric
**Queries Per Active User Per Week**  
Target: **5+ queries/user/week = product-market fit confirmed**  
Rationale: Measures genuine dependency, not just trial conversion. An investor running 5+ analyses/week is relying on ZoneWise for real decisions — both foreclosure and tax deed auctions.

---

## Funnel Metrics

| Stage | Metric | Day 30 | Day 60 | Day 90 |
|---|---|---|---|---|
| **Distribution** | MCP installs (Claude Desktop + Cursor) | 25 | 75 | 150+ |
| **Awareness** | LinkedIn newsletter subscribers | 50 | 150 | 300 |
| **Interest** | Email list subscribers | 50 | 150 | 250 |
| **Activation** | Foreclosure + tax deed auctions analyzed/week | 303 (live) | 600+ | 1,000+ |
| **Activation** | Free tool / MCP query uses | 20 | 75 | 200 |
| **Activation** | Demo calls booked | 2 | 8 | 15 |
| **Revenue** | Paying customers | 0 | 10 | 50 |
| **Revenue** | MRR | $0 | $990 | **$7,500** |
| **Revenue** | API customers (PropTech devs) | 0 | 0 | 3+ |
| **Retention** | Monthly churn | — | <5% | <5% |
| **Retention** | Trial → Paid conversion | — | >35% | >40% |
| **Health** | Queries/active user/week (North Star) | — | 3+ | **5+** |
| **Health** | NPS (first 10 customers) | — | >50 | >50 |

---

## Revenue Breakdown (Day 90 target: $7,500 MRR)

| Tier | Subscribers | MRR |
|---|---|---|
| Pro ($99/mo) | 35 | $3,465 |
| Team ($299/mo) | 10 | $2,990 |
| Enterprise (custom avg $999) | 1 | $999 |
| API ($0.50/query avg ~$200/mo) | 3 | $600 |
| **TOTAL** | **49** | **$7,054** |

*Rounded to $7,500 with annual plan prepays. Achievable by Day 90 with MEP gate compliance.*

---

## Channel Attribution

Track via UTM + HubSpot source field:

| Source | UTM | Expected Mix at Day 90 |
|---|---|---|
| MCP install → query → signup | `source=mcp` | 40% |
| LinkedIn outreach → demo → paid | `source=linkedin` | 25% |
| Newsletter → free tool → trial | `source=newsletter` | 20% |
| Scout Pass referral | `source=referral_[code]` | 10% |
| Organic / SEO | `source=organic` | 5% |

---

## MEP Gate Checkpoints

ZoneWise only expands counties when prior tier hits accuracy + MRR gates:

| Gate | Trigger | Condition |
|---|---|---|
| Phase 1 unlock | Hillsborough + Palm Beach + Pinellas | 30 days at 90% accuracy in Brevard + Miami-Dade + Orange |
| Tier 1 unlock (10 counties) | All 10 major FL counties | Phase 1 at 90% + $990 MRR confirmed |
| 67-county GA | General availability | Tier 1 at 90% + $7,500 MRR + 3 design partner testimonials |

---

## Weekly Sunday Review (5 min)

- [ ] MRR delta from last week (Stripe dashboard)
- [ ] MCP installs delta (registry analytics)
- [ ] New email + LinkedIn subscribers
- [ ] Foreclosure + tax deed auctions analyzed (both types in Supabase `pipeline_runs`)
- [ ] Demo calls held + conversion rate
- [ ] Churn this week (if ≥3 → investigate immediately)
- [ ] North Star: queries/user/week — trending up or down?
- [ ] One thing to improve before next Sunday

---

## Supabase Tables for Logging

| Table | What to Log |
|---|---|
| `daily_metrics` | MRR, subscribers, MCP installs, auctions analyzed, queries/user/week |
| `pipeline_runs` | foreclosure_count, tax_deed_count, bid_flags, cost_usd, duration_minutes |
| `mcp_installs` | client_type, county_queried, first_query_at |
| `free_analyses` | parcel_id, county, auction_type, pipeline_stages_completed |
| `trials` | user_id, county, plan_tier, converted (bool) |
| `churn_events` | user_id, reason, plan_tier, months_active |
| `scout_passes` | pass_code, referrer_id, claimed_by, converted |
