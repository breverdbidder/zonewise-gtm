import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

// ZoneWise Brand Colors
export const BRAND = {
  navy: '#1E3A5F',
  orange: '#F59E0B',
  bg: '#020617',
  white: '#F8FAFC',
  gray: '#94A3B8',
  darkGray: '#1E293B',
  success: '#10B981',
  danger: '#EF4444',
};

interface BrandedFrameProps {
  children: React.ReactNode;
  showLogo?: boolean;
  showWatermark?: boolean;
  title?: string;
}

export const BrandedFrame: React.FC<BrandedFrameProps> = ({
  children,
  showLogo = true,
  showWatermark = true,
  title,
}) => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.bg,
        fontFamily: 'Inter, system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${BRAND.navy}, ${BRAND.orange})`,
        }}
      />

      {/* Logo */}
      {showLogo && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 30,
            opacity: logoOpacity,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              backgroundColor: BRAND.orange,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 800,
              color: BRAND.bg,
            }}
          >
            Z
          </div>
          <span
            style={{
              color: BRAND.white,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            ZONEWISE<span style={{color: BRAND.orange}}>.AI</span>
          </span>
        </div>
      )}

      {/* Title bar */}
      {title && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 30,
            opacity: logoOpacity,
          }}
        >
          <span
            style={{
              color: BRAND.gray,
              fontSize: 14,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {title}
          </span>
        </div>
      )}

      {/* Main content area */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 30,
          right: 30,
          bottom: 60,
        }}
      >
        {children}
      </div>

      {/* Watermark */}
      {showWatermark && (
        <div
          style={{
            position: 'absolute',
            bottom: 15,
            right: 20,
            opacity: 0.4,
            fontSize: 12,
            color: BRAND.gray,
            fontWeight: 500,
          }}
        >
          zonewise.ai · Powered by AI
        </div>
      )}

      {/* Bottom gradient bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.navy})`,
        }}
      />
    </AbsoluteFill>
  );
};
