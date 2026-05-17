/**
 * Wordmark — tracked-caps brand name. Always Cormorant Garamond Light.
 *
 * THIS FILE IS THE CANONICAL React SOURCE FOR THE WORDMARK.
 * Every React-rendered medium imports this via `@dorvelon/design-system/brand`.
 *
 * 0.29.0 — the wordmark is unified on Cormorant Garamond across ALL lockups
 * (horizontal AND vertical). Prior to 0.29.0 the horizontal lockup used Inter
 * for the wordmark and only the vertical lockup used Cormorant; per the
 * 0.29.0 cascade decision the wordmark is the editorial-serif element in
 * every lockup so the brand mark reads identically across nav, footer,
 * paginated PDFs, social, and the masthead. The `family` prop is retired.
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────────────
 * theme     — drives letter colour to match the Monogram (see LogoTheme)
 * fontSize  — in px. Default 18.
 * text      — brand name string. Default 'DORVELON'.
 * className — passed to the wrapping <span>.
 * style     — merged into the inline style (e.g. to override letter-spacing).
 */

import type { LogoTheme } from './Monogram';
import type { CSSProperties } from 'react';

const LETTER_COLORS: Record<LogoTheme, string> = {
  primary:      '#0E2240',
  'mono-navy':  '#0E2240',
  reverse:      '#FFFFFF',
  'mono-cream': '#FFFFFF',
};

/**
 * 0.29.0 alias retained so `WordmarkFamily` imports in existing code keep
 * compiling. The only legal value is `'cormorant'`; passing `'inter'` is no
 * longer supported and `brand:check` flags any consumer that does.
 */
export type WordmarkFamily = 'cormorant';

/**
 * The single fontFamily + weight + tracking the Wordmark renders. Mirrors
 * the byte-stack used inside the canonical horizontal-lockup SVG so the
 * cascade-enforcement script can verify they stay in lockstep.
 */
export const WORDMARK_FONT_FAMILY = "'Cormorant Garamond', Georgia, serif";
export const WORDMARK_FONT_WEIGHT = 300;
export const WORDMARK_LETTER_SPACING = '0.22em';

interface WordmarkProps {
  theme?: LogoTheme;
  fontSize?: number;
  text?: string;
  className?: string;
  style?: CSSProperties;
}

export function Wordmark({
  theme = 'primary',
  fontSize = 18,
  text = 'DORVELON',
  className,
  style,
}: WordmarkProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        fontFamily:    WORDMARK_FONT_FAMILY,
        fontSize,
        fontWeight:    WORDMARK_FONT_WEIGHT,
        letterSpacing: WORDMARK_LETTER_SPACING,
        color:         LETTER_COLORS[theme],
        lineHeight:    1,
        ...style,
      }}
    >
      {text}
    </span>
  );
}
