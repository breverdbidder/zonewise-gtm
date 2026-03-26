import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {BRAND} from './BrandedFrame';

interface DataCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  startFrame?: number;
  duration?: number;
  color?: string;
  fontSize?: number;
  decimals?: number;
}

export const DataCounter: React.FC<DataCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
  startFrame = 0,
  duration = 30,
  color = BRAND.orange,
  fontSize = 48,
  decimals = 0,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  // Eased progress for smooth counting
  const eased = 1 - Math.pow(1 - progress, 3);
  const currentValue = value * eased;

  const opacity = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(frame, [startFrame, startFrame + 12], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const formatted = decimals > 0
    ? currentValue.toFixed(decimals)
    : Math.round(currentValue).toLocaleString();

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 800,
          color,
          fontFamily: 'Inter, monospace',
          lineHeight: 1.1,
        }}
      >
        {prefix}{formatted}{suffix}
      </div>
      <div
        style={{
          fontSize: fontSize * 0.3,
          color: BRAND.gray,
          fontWeight: 500,
          marginTop: 6,
          textTransform: 'uppercase',
          letterSpacing: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
};
