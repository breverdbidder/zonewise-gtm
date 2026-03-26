import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig} from 'remotion';
import {BrandedFrame, BRAND} from '../components/BrandedFrame';
import {DataCounter} from '../components/DataCounter';

// Florida county data structure
interface CountyData {
  name: string;
  auctions: number;
  totalValue: number;
  hotLevel: 'low' | 'medium' | 'high' | 'hot';
}

interface HeatmapSceneProps {
  counties: CountyData[];
  date: string;
  totalAuctions: number;
  totalValue: number;
}

const HEAT_COLORS = {
  low: '#1E3A5F',
  medium: '#2563EB',
  high: '#F59E0B',
  hot: '#EF4444',
};

const CountyBar: React.FC<{
  county: CountyData;
  index: number;
  maxAuctions: number;
}> = ({county, index, maxAuctions}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const delay = index * 3;
  const barProgress = spring({
    frame: frame - delay,
    fps,
    config: {damping: 15, stiffness: 80},
  });

  const barWidth = (county.auctions / maxAuctions) * 100 * barProgress;
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
        opacity,
      }}
    >
      <div
        style={{
          width: 120,
          fontSize: 14,
          fontWeight: 600,
          color: BRAND.white,
          textAlign: 'right',
          flexShrink: 0,
        }}
      >
        {county.name}
      </div>
      <div style={{flex: 1, position: 'relative', height: 28}}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${barWidth}%`,
            height: '100%',
            backgroundColor: HEAT_COLORS[county.hotLevel],
            borderRadius: 4,
            transition: 'width 0.3s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${barWidth}%`,
            marginLeft: 8,
            fontSize: 14,
            fontWeight: 700,
            color: HEAT_COLORS[county.hotLevel],
            lineHeight: '28px',
          }}
        >
          {Math.round(county.auctions * barProgress)}
        </div>
      </div>
    </div>
  );
};

export const HeatmapScene: React.FC<HeatmapSceneProps> = ({
  counties,
  date,
  totalAuctions,
  totalValue,
}) => {
  const frame = useCurrentFrame();
  const sorted = [...counties].sort((a, b) => b.auctions - a.auctions);
  const maxAuctions = sorted[0]?.auctions || 1;
  const top10 = sorted.slice(0, 10);

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <BrandedFrame title="AUCTION HEATMAP">
      {/* Date header */}
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: 20,
        }}
      >
        <div style={{fontSize: 28, fontWeight: 800, color: BRAND.white}}>
          Florida Auction Activity
        </div>
        <div style={{fontSize: 16, color: BRAND.gray, marginTop: 4}}>
          {date} · {counties.length} Counties Reporting
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          gap: 60,
          marginBottom: 30,
        }}
      >
        <DataCounter
          value={totalAuctions}
          label="Total Auctions"
          startFrame={10}
          duration={25}
          fontSize={36}
        />
        <DataCounter
          value={totalValue / 1000000}
          prefix="$"
          suffix="M"
          label="Total Value"
          startFrame={15}
          duration={25}
          fontSize={36}
          decimals={1}
        />
      </div>

      {/* County bars */}
      <div style={{marginTop: 10}}>
        <div
          style={{
            fontSize: 13,
            color: BRAND.gray,
            textTransform: 'uppercase',
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          Top Counties by Activity
        </div>
        {top10.map((county, i) => (
          <CountyBar
            key={county.name}
            county={county}
            index={i}
            maxAuctions={maxAuctions}
          />
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          gap: 20,
          opacity: interpolate(frame, [40, 55], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {Object.entries(HEAT_COLORS).map(([level, color]) => (
          <div key={level} style={{display: 'flex', alignItems: 'center', gap: 6}}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 2,
                backgroundColor: color,
              }}
            />
            <span style={{fontSize: 12, color: BRAND.gray, textTransform: 'capitalize'}}>
              {level}
            </span>
          </div>
        ))}
      </div>
    </BrandedFrame>
  );
};
