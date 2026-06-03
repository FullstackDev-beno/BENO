// Module-level Lenis singleton – set by SmoothScrollProvider, read by hook.
// This avoids React context overhead while giving any component programmatic
// access to lenis.scrollTo() without re-render side-effects.

import type Lenis from "lenis"

let _lenis: Lenis | null = null

export function _setLenisInstance(instance: Lenis | null) {
  _lenis = instance
}

export function getLenisInstance(): Lenis | null {
  return _lenis
}
