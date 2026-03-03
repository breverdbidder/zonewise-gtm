# Claude Code GTM Automation Tasks

Zero human-in-the-loop. All tasks autonomous. Report completion to Supabase insights table.

## Weekly Recurring (Every Monday 6 AM EST)
- [ ] Generate FL Foreclosure Pulse from pipeline data
- [ ] Send via HubSpot to email list
- [ ] Post summary to LinkedIn (draft only — Ariel approves)
- [ ] Log to Supabase: emails_sent, open_rate, click_rate

## On New Email Signup
- [ ] Add to HubSpot contact
- [ ] Trigger 4-email nurture sequence
- [ ] Log to Supabase: leads table

## On Free Tool Use (parcel ID submitted)
- [ ] Run full ZoneWise pipeline
- [ ] Return report within 60 seconds
- [ ] Log to Supabase: free_analyses table
- [ ] If user views report 3+ times → flag as hot lead in HubSpot

## On Trial Start
- [ ] Set Stripe trial (14 days)
- [ ] Send HubSpot "trial started" sequence (3 emails)
- [ ] Log to Supabase: trials table

## On Subscription Cancel
- [ ] Log reason to Supabase: churn_reasons
- [ ] Send 1 win-back email after 7 days
- [ ] Surface to Ariel if churn >3 in a week

## Blocked Task Protocol
1. Retry 3 times with 5-min backoff
2. Log to Supabase insights: {task, error, attempts, timestamp}
3. Surface to Ariel only if: payment system affected OR data loss risk
