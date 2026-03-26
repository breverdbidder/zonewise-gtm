#!/bin/bash
# ContentWise Avatar Stitch — FFmpeg concat with crossfade + watermark
# Usage: ./avatar_stitch.sh intro.mp4 body.mp4 outro.mp4 output.mp4

set -e

INTRO="${1:?Usage: avatar_stitch.sh intro.mp4 body.mp4 outro.mp4 output.mp4}"
BODY="${2:?Missing body.mp4}"
OUTRO="${3:?Missing outro.mp4}"
OUTPUT="${4:-final_output.mp4}"

WORKDIR=$(mktemp -d)
FADE=0.5

echo "🎬 ContentWise Stitch — $INTRO + $BODY + $OUTRO → $OUTPUT"

# Get durations
INTRO_DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$INTRO")
BODY_DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$BODY")
OUTRO_DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUTRO")

echo "  Intro: ${INTRO_DUR}s | Body: ${BODY_DUR}s | Outro: ${OUTRO_DUR}s"

# Normalize all inputs to same resolution and fps
for src in "$INTRO" "$BODY" "$OUTRO"; do
  name=$(basename "$src" .mp4)
  ffmpeg -y -i "$src" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=020617,fps=30" \
    -c:v libx264 -preset fast -crf 23 \
    -c:a aac -ar 44100 -ac 2 \
    "$WORKDIR/${name}_norm.mp4" 2>/dev/null
done

# Concat with crossfade
INTRO_NORM="$WORKDIR/$(basename "$INTRO" .mp4)_norm.mp4"
BODY_NORM="$WORKDIR/$(basename "$BODY" .mp4)_norm.mp4"
OUTRO_NORM="$WORKDIR/$(basename "$OUTRO" .mp4)_norm.mp4"

# Horizontal (16:9) version
ffmpeg -y \
  -i "$INTRO_NORM" -i "$BODY_NORM" -i "$OUTRO_NORM" \
  -filter_complex "
    [0:v][1:v]xfade=transition=fade:duration=${FADE}:offset=$(echo "$INTRO_DUR - $FADE" | bc)[v01];
    [v01][2:v]xfade=transition=fade:duration=${FADE}:offset=$(echo "$INTRO_DUR + $BODY_DUR - 2*$FADE" | bc)[vout];
    [0:a][1:a]acrossfade=d=${FADE}[a01];
    [a01][2:a]acrossfade=d=${FADE}[aout]
  " \
  -map "[vout]" -map "[aout]" \
  -c:v libx264 -preset fast -crf 22 \
  -c:a aac -b:a 128k \
  "$WORKDIR/horizontal.mp4" 2>/dev/null

# Add ZoneWise watermark (bottom-right, semi-transparent)
ffmpeg -y -i "$WORKDIR/horizontal.mp4" \
  -vf "drawtext=text='zonewise.ai':fontsize=18:fontcolor=white@0.3:x=w-tw-20:y=h-th-15:fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf" \
  -c:v libx264 -preset fast -crf 22 \
  -c:a copy \
  "${OUTPUT}" 2>/dev/null

echo "✅ Horizontal: ${OUTPUT}"

# Vertical (9:16) version for reels
VERT_OUTPUT="${OUTPUT%.mp4}_vertical.mp4"
ffmpeg -y -i "${OUTPUT}" \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=020617" \
  -c:v libx264 -preset fast -crf 22 \
  -c:a copy \
  "$VERT_OUTPUT" 2>/dev/null

echo "✅ Vertical: ${VERT_OUTPUT}"

# Cleanup
rm -rf "$WORKDIR"

TOTAL_DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "${OUTPUT}")
echo "📊 Total duration: ${TOTAL_DUR}s"
echo "🎬 Done!"
