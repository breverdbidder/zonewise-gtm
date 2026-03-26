import {Composition} from 'remotion';
import {HeatmapScene} from './scenes/HeatmapScene';
import {DealBreakdown} from './scenes/DealBreakdown';

// Sample data for testing
const SAMPLE_COUNTIES = [
  {name: 'Brevard', auctions: 23, totalValue: 4350000, hotLevel: 'hot' as const},
  {name: 'Orange', auctions: 18, totalValue: 6200000, hotLevel: 'high' as const},
  {name: 'Duval', auctions: 15, totalValue: 3800000, hotLevel: 'high' as const},
  {name: 'Hillsborough', auctions: 14, totalValue: 5100000, hotLevel: 'high' as const},
  {name: 'Palm Beach', auctions: 12, totalValue: 7800000, hotLevel: 'medium' as const},
  {name: 'Broward', auctions: 11, totalValue: 4900000, hotLevel: 'medium' as const},
  {name: 'Pinellas', auctions: 9, totalValue: 2900000, hotLevel: 'medium' as const},
  {name: 'Volusia', auctions: 7, totalValue: 1800000, hotLevel: 'low' as const},
  {name: 'Lee', auctions: 6, totalValue: 2100000, hotLevel: 'low' as const},
  {name: 'Seminole', auctions: 5, totalValue: 1500000, hotLevel: 'low' as const},
];

const SAMPLE_DEAL = {
  address: '1234 Ocean Ave',
  city: 'Satellite Beach',
  county: 'Brevard',
  caseNumber: '05-2026-CA-012345',
  judgment: 285000,
  finalBid: 198000,
  arv: 380000,
  repairs: 45000,
  bidJudgmentRatio: 69.5,
  recommendation: 'REVIEW' as const,
  mlConfidence: 72.3,
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeatmapComposition"
        component={HeatmapScene}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          counties: SAMPLE_COUNTIES,
          date: 'March 26, 2026',
          totalAuctions: 120,
          totalValue: 40450000,
        }}
      />

      <Composition
        id="DealBreakdownComposition"
        component={DealBreakdown}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          deal: SAMPLE_DEAL,
        }}
      />

      {/* Vertical versions for reels */}
      <Composition
        id="HeatmapVertical"
        component={HeatmapScene}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          counties: SAMPLE_COUNTIES,
          date: 'March 26, 2026',
          totalAuctions: 120,
          totalValue: 40450000,
        }}
      />

      <Composition
        id="DealBreakdownVertical"
        component={DealBreakdown}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          deal: SAMPLE_DEAL,
        }}
      />
    </>
  );
};
