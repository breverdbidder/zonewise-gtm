# Claude Code GTM Automation Tasks
**Version:** 2.0 | Updated: March 3, 2026  
**Rule:** Zero human-in-the-loop. All tasks autonomous. Report completion to Supabase `insights` table.  
**Rule:** Every task that touches auction data must cover BOTH foreclosure sales AND tax deed sales.

---

## Weekly Recurring (Every Monday 6 AM EST)

- [ ] Generate **FL Zoning + Auction Intelligence Weekly** from pipeline data
  - Pull foreclosure sales count + BID flags + avg bid/judgment ratio (all active counties)
  - Pull tax deed sales count + BID flags + avg opening bid discount (all active counties)
  - Select county spotlight (rotate weekly through active counties)
  - Extract 1 unique data insight from 10.8M parcel dataset
  - Draft subject line + 3 alternatives for A/B test
- [ ] Send via HubSpot to full email list
- [ ] Post newsletter summary to LinkedIn (draft only — Ariel approves in 30 sec via mobile)
- [ ] Log to Supabase `email_events`: emails_sent, open_rate, click_rate, unsubscribes

---

## On New Email Signup

- [ ] Add to HubSpot contact with source tag (UTM attribution)
- [ ] Trigger 4-email nurture sequence (v2.0 — both auction types throughout)
- [ ] Log to Supabase `leads`: email, source, county (if provided), signup_at
- [ ] If county provided → pull next 3 upcoming foreclosure + tax deed auctions for that county → attach to Email 1 personalization

---

## On Free Tool / MCP Query (parcel ID submitted)

- [ ] Run full 5-agent ZoneWise pipeline: DiscoverWise → LienWise → CMAWise → ZoneAnalyze → TitleWise
- [ ] Return complete report within 60 seconds
- [ ] Classify auction type (foreclosure sale or tax deed sale) and include both if multiple
- [ ] Log to Supabase `free_analyses`: parcel_id, county, auction_type, pipeline_stages_completed, duration_ms
- [ ] If user views same report 3+ times → flag as hot lead in HubSpot → add to demo outreach sequence

---

## On MCP Tool Install (Claude Desktop / Cursor)

- [ ] Log install event to Supabase `mcp_installs`: tool_name, client_type, county_queried, timestamp
- [ ] After first query → trigger HubSpot "MCP user" email sequence (3 emails)
- [ ] After 5 queries → send upgrade prompt: "You've run 5 analyses — Pro unlocks unlimited for $99/mo"

---

## On Trial Start

- [ ] Verify Stripe trial setup (14-day, card on file)
- [ ] Send HubSpot "trial started" sequence (3 emails — Days 1, 10, 13)
  - Day 1: "Here's what to run first — your county's upcoming foreclosure + tax deed auctions"
  - Day 10: "4 days left — here's your trial summary: [N] analyses, [N] BID flags found"
  - Day 13: "Last day tomorrow — [next auction date in their county]"
- [ ] Log to Supabase `trials`: user_id, county, plan_tier, trial_start, trial_end, stripe_customer_id

---

## On Subscription Cancel

- [ ] Log reason to Supabase `churn_events`: user_id, reason, plan_tier, months_active
- [ ] Send 1 win-back email after 7 days: "Your next [county] foreclosure sale is [date]. Tax deed sale: [date]. Come back for free."
- [ ] Surface to Ariel in Sunday review if churn ≥3 in a week

---

## On Scout Pass Generated

- [ ] Create pass record in Supabase `scout_passes`: pass_code, referrer_id, counties_granted, expires_at
- [ ] Log event: pass_generated

## On Scout Pass Claimed

- [ ] Create trial account with referrer's county access (both foreclosure + tax deed)
- [ ] Add +7 days to referrer's subscription in Stripe
- [ ] Notify referrer: "Scout Pass claimed by [Name]. +7 days added to your subscription."
- [ ] Log to Supabase `scout_passes`: claimed_by, claimed_at, trial_activated

---

## Nightly (2 AM EST)

- [ ] Scrape all active counties: foreclosure sales (court dockets) + tax deed sales (RealForeclose)
- [ ] Run DiscoverWise pipeline on all new auction records
- [ ] Update Supabase `multi_county_auctions` table
- [ ] Flag any new BID-tier properties → push alert to subscribed users (county filter)
- [ ] Log pipeline run to Supabase `pipeline_runs`: counties_scraped, foreclosure_count, tax_deed_count, bid_flags, duration_minutes, cost_usd

---

## Blocked Task Protocol

1. Retry task 3× with 5-minute backoff
2. Log to Supabase `insights`: `{task, error, attempts, timestamp, recommended_fix}`
3. Surface to Ariel **only if:** payment system affected OR auction data gap > 48 hours OR churn ≥3/week
