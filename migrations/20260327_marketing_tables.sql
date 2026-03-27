-- ZoneWise Marketing Agent Squad — Supabase Migration
-- Created: March 27, 2026
-- Purpose: 16 marketing tables for 44-agent marketing pipeline

-- SEO Tables
CREATE TABLE IF NOT EXISTS marketing_keywords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL,
  volume_est int,
  difficulty int,
  cluster text,
  parcel_source text,
  validated boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic text NOT NULL,
  source text,
  score float,
  freshness text,
  county_relevance text[],
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_content_gaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gap text NOT NULL,
  competitor_url text,
  our_opportunity text,
  priority_score int,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_trends (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trend text NOT NULL,
  signal_strength float,
  fl_relevance float,
  decay_rate text,
  created_at timestamptz DEFAULT now()
);

-- Content Tables
CREATE TABLE IF NOT EXISTS marketing_content_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid,
  format text NOT NULL,
  assigned_agent text,
  priority text DEFAULT 'P1',
  cost_budget float DEFAULT 1.00,
  status text DEFAULT 'queued',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  body_md text,
  meta_desc text,
  schema_json jsonb,
  internal_links text[],
  cta text,
  brand_score float,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_social_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  body text NOT NULL,
  thread_parts text[],
  media_url text,
  schedule_time timestamptz,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_newsletters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject text NOT NULL,
  body_html text,
  segment text,
  send_date timestamptz,
  sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Distribution Tables
CREATE TABLE IF NOT EXISTS marketing_published (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid,
  platform text NOT NULL,
  url text,
  utm_params jsonb,
  published_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_engagement_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid,
  platform text NOT NULL,
  metric text NOT NULL,
  value float,
  date date DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS marketing_headline_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid,
  variants text[],
  winner text,
  improvement_pct float,
  created_at timestamptz DEFAULT now()
);

-- Competitor Tables
CREATE TABLE IF NOT EXISTS marketing_competitor_changes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor text NOT NULL,
  url text,
  change_type text,
  detected_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_competitor_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  title text,
  h2s text[],
  word_count int,
  topic text,
  our_coverage_score float,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_threats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor text NOT NULL,
  url text,
  threat_score float,
  auto_response_triggered boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Outreach Tables
CREATE TABLE IF NOT EXISTS marketing_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  company text,
  email text,
  source text,
  icp_score float,
  enriched_data jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS marketing_weekly_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  week_start date NOT NULL,
  report_yaml text,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_mk_keyword ON marketing_keywords(keyword);
CREATE INDEX IF NOT EXISTS idx_mt_score ON marketing_topics(score DESC);
CREATE INDEX IF NOT EXISTS idx_mcq_status ON marketing_content_queue(status);
CREATE INDEX IF NOT EXISTS idx_msp_platform ON marketing_social_posts(platform, published);
CREATE INDEX IF NOT EXISTS idx_mem_content ON marketing_engagement_metrics(content_id, date);
CREATE INDEX IF NOT EXISTS idx_mcc_competitor ON marketing_competitor_changes(competitor, detected_at);
CREATE INDEX IF NOT EXISTS idx_ml_source ON marketing_leads(source, icp_score DESC);
