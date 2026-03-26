import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BRAND} from './BrandedFrame';

interface LowerThirdProps {
  name: string;
  title: string;
  startFrame?: number;
  endFrame?: number;
}

export const LowerThird: React.FC<LowerThirdProps> = ({
  name,
  title,
  startFrame = 0,
  endFrame = 999,
}) => {
  const frame = useCurrentFrame();

  const slideIn = interpolate(frame, [startFrame, startFrame + 15], [-200, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const fadeOut = interpolate(frame, [endFrame - 10, endFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const barWidth = interpolate(frame, [startFrame, startFrame + 20], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: 30,
        opacity: fadeOut,
        transform: `translateX(${slideIn}px)`,
      }}
    >
      {/* Orange accent bar */}
      <div
        style={{
          width: `${barWidth}%`,
          maxWidth: 300,
          height: 3,
          backgroundColor: BRAND.orange,
          marginBottom: 8,
        }}
      />
      <div style={{fontSize: 22, fontWeight: 700, color: BRAND.white}}>
        {name}
      </div>
      <div style={{fontSize: 14, fontWeight: 400, color: BRAND.gray, marginTop: 2}}>
        {title}
      </div>
    </div>
  );
};
