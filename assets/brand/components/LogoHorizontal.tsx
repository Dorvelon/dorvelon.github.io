/**
 * LogoHorizontal — monogram left, wordmark right, vertically centered.
 *
 * CANONICAL React composition of `Monogram` + `Wordmark` for the
 * horizontal brand lockup. All React consumers import this via
 * `@dorvelon/design-system/brand`; do not re-compose the pair locally.
 *
 * 0.29.0 — the wordmark renders in Cormorant Garamond Light (Wordmark's only
 * face since 0.29.0). The horizontal lockup now matches the vertical lockup's
 * editorial-serif treatment; the prior Inter-wordmark variant is retired.
 *
 * Sizing:  `size` sets the monogram height in px.
 *          Wordmark fontSize scales at 30% of monogram height.
 *          Gap scales at 28% of monogram height.
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────────────
 * theme     — colour scheme applied to both monogram and wordmark
 * size      — monogram height in px. Default 96.
 * showGrid  — passed to Monogram; overrides per-theme default.
 * text      — wordmark text. Default 'DORVELON'.
 * className — applied to the outer flex container.
 */

import type { LogoTheme } from './Monogram';
import { Monogram } from './Monogram';
import { Wordmark } from './Wordmark';

interface LogoHorizontalProps {
  theme?: LogoTheme;
  size?: number;
  showGrid?: boolean;
  text?: string;
  className?: string;
}

export function LogoHorizontal({
  theme = 'primary',
  size = 96,
  showGrid,
  text,
  className,
}: LogoHorizontalProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: Math.round(size * 0.28),
      }}
    >
      <div style={{ marginTop: Math.round(size * -0.2) }}>
        <Monogram theme={theme} size={size} showGrid={showGrid} />
      </div>
      <Wordmark theme={theme} fontSize={Math.round(size * 0.3)} text={text} />
    </div>
  );
}
