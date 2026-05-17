/**
 * LogoVertical — monogram stacked above wordmark (BOTH SERIF).
 *
 * CANONICAL React composition for the stacked / masthead brand lockup.
 * Pairs the Didot DN monogram with the Cormorant Garamond wordmark for an
 * editorial masthead/publication feel.
 *
 * 0.29.0 — the horizontal lockup also adopts Cormorant for the wordmark, so
 * the two lockup variants now differ in geometry only (stacked vs side-by-
 * side), not in face. The `family="cormorant"` prop is no longer needed and
 * has been removed from the Wordmark interface.
 *
 * Sizing:  `size` sets the monogram height in px.
 *          Wordmark fontSize scales at 22% of monogram height (slightly larger
 *          than horizontal's 30% because the stacked configuration sets the
 *          wordmark below the monogram and a larger set-size keeps the optical
 *          weight balanced).
 *          Gap scales at 20% of monogram height.
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

interface LogoVerticalProps {
  theme?: LogoTheme;
  size?: number;
  showGrid?: boolean;
  text?: string;
  className?: string;
}

export function LogoVertical({ theme = 'primary', size = 96, showGrid, text, className }: LogoVerticalProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: Math.round(size * 0.2),
      }}
    >
      <Monogram theme={theme} size={size} showGrid={showGrid} />
      <Wordmark
        theme={theme}
        fontSize={Math.round(size * 0.22)}
        text={text}
      />
    </div>
  );
}
