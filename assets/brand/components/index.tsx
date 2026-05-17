/**
 * @dorvelon/design-system/brand — canonical React brand components.
 *
 * SINGLE SOURCE OF TRUTH for React-rendered brand marks. Every consumer
 * (web_application, spectacle_deck, any future React shell) imports from
 * this barrel; no consumer re-implements the DN geometry, the dashed
 * construction marks, the gold pedestal, or the wordmark typography.
 *
 * For non-React renderers (react-pdf, email, linkedin), the canonical
 * artifact is the SVG file in `6_assets/brand/dorvelon-*.svg`, which
 * mirrors the geometry exported by these components. The two surfaces
 * (React + SVG) are kept in lockstep by `scripts/brand-check.ts` — see
 * `npm run -w design-system brand:check`.
 *
 * 0.30.0 — strict 2-font rule (Cormorant + Inter). The DN monogram is
 * baked geometry (paths), not live text, so there is no third "monogram
 * mark" font slot. See `MONOGRAM_DN_PATHS` in `./Monogram.tsx` for the
 * canonical path data shared with all four brand SVGs.
 */

export { Monogram, MONOGRAM_DN_PATHS } from './Monogram';
export type { LogoTheme } from './Monogram';
export {
  Wordmark,
  WORDMARK_FONT_FAMILY,
  WORDMARK_FONT_WEIGHT,
  WORDMARK_LETTER_SPACING,
} from './Wordmark';
export type { WordmarkFamily } from './Wordmark';
export { LogoHorizontal } from './LogoHorizontal';
export { LogoVertical } from './LogoVertical';
