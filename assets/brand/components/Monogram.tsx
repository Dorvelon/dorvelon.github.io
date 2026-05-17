/**
 * DN Monogram — path-outlined brand mark (no runtime font dependency).
 *
 * THIS FILE IS THE CANONICAL React SOURCE FOR THE MONOGRAM.
 * ─────────────────────────────────────────────────────────────────────────────
 * Every React-rendered medium (web_application, spectacle_deck, any future
 * React shell) imports this component via `@dorvelon/design-system/brand`.
 * Do NOT re-implement the DN geometry, dashed construction marks, or gold
 * pedestal in any consumer — the canonical SVG in
 * `6_assets/brand/dorvelon-monogram.svg` plus this React mirror are the
 * only two places those coordinates may live.
 *
 * 0.30.0 — the DN letterforms are now baked-in `<path>` outlines. The brand
 * mark no longer depends on a registered Didot face; the third font slot
 * (`type.family.monogramMark`) is retired and consumers stop registering
 * any Didot face. The path data below mirrors `dorvelon-monogram.svg`
 * verbatim and `brand:check` rule 5 enforces lockstep across React + all
 * four canonical SVGs. Path provenance: extracted once from a
 * commercially-licensed **Luxury Didot Medium** OTF (foundry PostScript
 * name `Superhits-Medium`) via
 * `design-system/scripts/extract-monogram-paths.ts`.
 *
 * 0.29.1 — pedestal-rect lockstep enforced (no drift between React + SVG).
 *
 * viewBox: -22 -12 220 235  (220 × 235 internal coordinate space)
 * Natural aspect ratio: 220 / 235 ≈ 0.936 : 1
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────────────
 * theme     — colour scheme (see LogoTheme)
 * size      — rendered height in px; width is derived from aspect ratio. Default 96.
 * showGrid  — show/hide architectural grid lines + gold pedestal stem.
 *             Defaults: primary → true, mono-navy → false, reverse → true, mono-cream → false.
 *             Pass explicitly to override.
 * className — CSS class applied to the <svg> element.
 *
 * Themes (all gold accents use the consolidated system palette as of 0.11.0:
 * gold.500 #8C6D3F primary, gold.600 #A87830 lift for reverse-theme visibility
 * on dark navy backgrounds.)
 * ─────────────────────────────────────────────────────────────────────────────
 * primary     — navy letters (#0E2240) + gold grid (#8C6D3F)  — light surfaces
 * mono-navy   — navy letters only, no decoration              — light surfaces, minimal
 * reverse     — white letters (#FFFFFF) + gold grid (#A87830) — dark surfaces (lift for contrast)
 * mono-cream  — cream letters only, no decoration             — dark surfaces, minimal
 */

export type LogoTheme = "primary" | "mono-navy" | "reverse" | "mono-cream";

const VBX = -22,
  VBY = -12,
  VBW = 220,
  VBH = 235;

const THEMES: Record<
  LogoTheme,
  { letter: string; accent: string; defaultGrid: boolean }
> = {
  primary: { letter: "#0E2240", accent: "#8C6D3F", defaultGrid: true },
  "mono-navy": { letter: "#0E2240", accent: "#8C6D3F", defaultGrid: false },
  reverse: { letter: "#FFFFFF", accent: "#A87830", defaultGrid: true },
  "mono-cream": { letter: "#FFFFFF", accent: "#A87830", defaultGrid: false },
};

/**
 * Outlined DN letterforms — `transform` bakes the font-units-to-SVG-units
 * mapping (scale 0.13 with y axis flipped, origin at the original baseline
 * x/y). Mirrors `6_assets/brand/dorvelon-monogram.svg` byte-for-byte;
 * `brand:check` enforces lockstep across all four canonical SVGs and this
 * component. Update via `design-system/scripts/extract-monogram-paths.ts`.
 */
export const MONOGRAM_DN_PATHS = {
  D: {
    transform: "matrix(0.13 0 0 -0.13 16 152)",
    d: "M17 700L17 692L93 692L93 8L29 8L29 0L224 0C405 1 495 176 495 351C495 526 404 700 222 700ZM180 692L218 692C342 692 403 521 403 350C403 179 341 8 218 8L180 8Z",
  },
  N: {
    transform: "matrix(0.13 0 0 -0.13 52 195)",
    d: "M150 8L87 8L87 609L415 1L415 0L423 0L423 692L487 692L487 700L350 700L350 692L415 692L415 176L133 700L14 700L14 692L78 692L78 8L14 8L14 0L150 0Z",
  },
} as const;

interface MonogramProps {
  theme?: LogoTheme;
  size?: number;
  showGrid?: boolean;
  className?: string;
}

export function Monogram({
  theme = "primary",
  size = 96,
  showGrid,
  className,
}: MonogramProps) {
  const t = THEMES[theme];
  const grid = showGrid ?? t.defaultGrid;
  const w = Math.round((size * VBW) / VBH);

  return (
    <svg
      width={w}
      height={size}
      viewBox={`${VBX} ${VBY} ${VBW} ${VBH}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* ── Architectural construction marks — asymmetric, at letterform features.
           Horizontals bracket D's cap-height (paired) + cross D's middle bar.
           Verticals trace D's left edge, the gold-stem column, and N's right edge.
           Each line is clipped to a meaningful range, not a full-canvas cage. */}
      {grid && (
        <g
          stroke={t.accent}
          strokeWidth="1"
          strokeDasharray="25 4 4 4"
          opacity="0.65"
        >
          {/* Cap-height pair — short, only spanning the upper letterform region */}
          <line x1="8" y1="55" x2="100" y2="55" />
          {/* D's middle bar — long, spans full width as the dominant horizontal */}
          <line x1={VBX + 23} y1="113" x2={VBX + VBW - 35} y2="113" />
          {/* short line intersect the first vertical left bottom */}
          <line x1="24" y1="185" x2="90" y2="185" />

          {/* D-left edge — short, only top half */}
          <line x1="36" y1="30" x2="36" y2="210" />
          {/* Gold-stem column — long, spans full height as the dominant vertical */}
          <line x1="57" y1={VBY + 60} x2="57" y2={VBY + VBH - 70} />
          {/* N-right edge — short, only bottom half */}
          <line x1="144" y1="78" x2="144" y2="165" />
        </g>
      )}

      {/* ── DN letterforms — outlined paths (see MONOGRAM_DN_PATHS). ── */}
      <path
        transform={MONOGRAM_DN_PATHS.D.transform}
        fill={t.letter}
        d={MONOGRAM_DN_PATHS.D.d}
      />
      <path
        transform={MONOGRAM_DN_PATHS.N.transform}
        fill={t.letter}
        d={MONOGRAM_DN_PATHS.N.d}
      />

      {/* ── Gold pedestal — twin hairline vertical stems + serif foot at the
           DN intersection. Coordinates LOCKED to the canonical SVG asset
           (`6_assets/brand/dorvelon-monogram.svg` and the three sibling SVGs);
           `brand:check` enforces the lockstep. */}
      {grid && (
        <>
          <rect x="68.5" y="104" width="1" height="90" fill={t.accent} />
          <rect x="70.5" y="108" width="1" height="85" fill={t.accent} />
          <rect x="54"   y="193" width="32" height="2" fill={t.accent} />
        </>
      )}
    </svg>
  );
}
