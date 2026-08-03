# Recalibrate Research Map City Marker Coordinates

## Goal
Fix the misaligned city markers in the "RESEARCH FIELDWORK SITES" widget by updating their absolute `top`/`left` percentage positions.

## Changes
1. Update the `CITIES` array in `src/components/ResearchMap.tsx` with the corrected geographic coordinates:
   - Astana: `top: 26%`, `left: 58%`
   - Almaty: `top: 68%`, `left: 76%`
   - Atyrau: `top: 48%`, `left: 18%`
   - Aktau: `top: 61%`, `left: 17%`
   - Tashkent: `top: 74%`, `left: 56%`
2. Confirm the map container already uses `relative` positioning and the image uses `object-contain` to keep percentages locked across screen sizes.
3. Preserve existing marker styling (glowing gold/cyan dots), localized labels, and hover tooltips across EN/KK/RU.

## Verification
- Run a TypeScript check to ensure no type errors from coordinate changes.
- Visually verify marker placement on the live preview across viewport sizes.
