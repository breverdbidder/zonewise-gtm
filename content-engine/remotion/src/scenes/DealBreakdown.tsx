import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig} from 'remotion';
import {BrandedFrame, BRAND} from '../components/BrandedFrame';
import {DataCounter} from '../components/DataCounter';

interface DealData {
  address: string;
  city: string;
  county: string;
  caseNumber: string;
  judgment: number;
  finalBid: number;
  arv: number;
  repairs: number;
  bidJudgmentRatio: number;
  recommendation: 'BID' | 'REVIEW' | 'SKIP';
  mlConfidence: number;
}

const REC_COLORS = {
  BID: BRAND.success,
  REVIEW: BRAND.orange,
  SKIP: BRAND.danger,
};

const StatCard: React.FC<{
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  startFrame: number;
  color?: string;
}> = ({label, value, prefix = '$', suffix = '', startFrame, color = BRAND.white}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const slideX = interpolate(frame, [startFrame, startFrame + 12], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${slideX}px)`,
        backgroundColor: BRAND.darkGray,
        borderRadius: 8,
        padding: '14px 18px',
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{fontSize: 12, color: BRAND.gray, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4}}>
        {label}
      </div>
      <DataCounter
        value={value}
        prefix={prefix}
        suffix={suffix}
        label=""
        startFrame={startFrame + 5}
        duration={20}
        color={color}
        fontSize={28}
      />
    </div>
  );
};

export const DealBreakdown: React.FC<{deal: DealData}> = ({deal}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});
  const badgeScale = spring({frame: frame - 20, fps, config: {damping: 10, stiffness: 100}});
  const gaugeProgress = interpolate(frame, [50, 80], [0, deal.bidJudgmentRatio / 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const profit = deal.arv - deal.finalBid - deal.repairs;
  const roi = ((profit / deal.finalBid) * 100);

  return (
    <BrandedFrame title="DEAL ANALYSIS">
      {/* Property header */}
      <div style={{opacity: headerOpacity, marginBottom: 24}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <div style={{fontSize: 24, fontWeight: 800, color: BRAND.white}}>
            {deal.address}
          </div>
          <div
            style={{
              transform: `scale(${badgeScale})`,
              backgroundColor: REC_COLORS[deal.recommendation],
              color: BRAND.bg,
              padding: '4px 12px',
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            {deal.recommendation}
          </div>
        </div>
        <div style={{fontSize: 14, color: BRAND.gray, marginTop: 4}}>
          {deal.city}, {deal.county} County · Case {deal.caseNumber}
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 24,
        }}
      >
        <StatCard label="Judgment" value={deal.judgment} startFrame={15} />
        <StatCard label="Final Bid" value={deal.finalBid} startFrame={20} color={BRAND.orange} />
        <StatCard label="ARV" value={deal.arv} startFrame={25} color={BRAND.success} />
        <StatCard label="Est. Repairs" value={deal.repairs} startFrame={30} color={BRAND.danger} />
      </div>

      {/* Bid/Judgment Ratio gauge */}
      <div style={{marginBottom: 20}}>
        <div style={{fontSize: 13, color: BRAND.gray, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8}}>
          Bid / Judgment Ratio
        </div>
        <div style={{position: 'relative', height: 24, backgroundColor: BRAND.darkGray, borderRadius: 12, overflow: 'hidden'}}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${gaugeProgress * 100}%`,
              backgroundColor: deal.bidJudgmentRatio >= 75 ? BRAND.success : deal.bidJudgmentRatio >= 60 ? BRAND.orange : BRAND.danger,
              borderRadius: 12,
              transition: 'width 0.1s',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 10,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              fontWeight: 700,
              color: BRAND.white,
            }}
          >
            {Math.round(gaugeProgress * 100)}%
          </div>
        </div>
      </div>

      {/* Bottom row: ROI + ML Confidence */}
      <div style={{display: 'flex', gap: 40}}>
        <DataCounter
          value={roi}
          suffix="%"
          label="Estimated ROI"
          startFrame={60}
          duration={20}
          color={roi > 0 ? BRAND.success : BRAND.danger}
          fontSize={32}
          decimals={1}
        />
        <DataCounter
          value={deal.mlConfidence}
          suffix="%"
          label="ML Confidence"
          startFrame={65}
          duration={20}
          color={BRAND.orange}
          fontSize={32}
          decimals={1}
        />
        <DataCounter
          value={profit}
          prefix="$"
          label="Est. Profit"
          startFrame={70}
          duration={20}
          color={profit > 0 ? BRAND.success : BRAND.danger}
          fontSize={32}
        />
      </div>
    </BrandedFrame>
  );
};
