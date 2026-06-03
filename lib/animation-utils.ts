import { gsap } from "@/lib/gsap"

// ─── TYPES ────────────────────────────────────────────────────────────────────
export interface CardAnimOptions {
  stagger?: number
  scrollTrigger?: gsap.DOMTarget
  delay?: number
  duration?: number
  ease?: string
}

// ─── CARD DEPTH POP ───────────────────────────────────────────────────────────
/**
 * Premium 3D depth reveal: cards pop forward from a recessed position.
 * Uses rotateX + scale + y with back.out overshoot for organic feel.
 */
export function animateCardsFromDepth(
  cards: Element[] | NodeListOf<Element>,
  options: CardAnimOptions = {}
) {
  const {
    stagger = 0.1,
    scrollTrigger,
    delay = 0,
    duration = 0.9,
    ease = "back.out(2)",
  } = options

  gsap.set(cards, {
    opacity: 0,
    y: 120,
    scale: 0.8,
    rotateX: 15,
    transformPerspective: 1200,
    transformOrigin: "center top",
    willChange: "transform, opacity",
  })

  return gsap.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    duration,
    stagger,
    delay,
    ease,
    clearProps: "willChange",
    scrollTrigger: scrollTrigger
      ? {
          trigger: scrollTrigger as Element,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      : undefined,
  })
}

// ─── CARD HOVER MICRO-INTERACTION ─────────────────────────────────────────────
/**
 * Attaches premium hover: card lifts and scales slightly, settles naturally.
 * Returns cleanup function to remove event listeners.
 */
export function addCardHover(card: HTMLElement) {
  const enter = () =>
    gsap.to(card, { scale: 1.03, y: -8, duration: 0.4, ease: "power2.out" })
  const leave = () =>
    gsap.to(card, { scale: 1, y: 0, duration: 0.4, ease: "power2.inOut" })

  card.addEventListener("mouseenter", enter)
  card.addEventListener("mouseleave", leave)

  return () => {
    card.removeEventListener("mouseenter", enter)
    card.removeEventListener("mouseleave", leave)
  }
}

// ─── TEXT SPLIT (word mask reveal) ────────────────────────────────────────────
/**
 * Wraps each word in a double-span mask pattern for cinematic reveal.
 * Outer span: overflow-hidden clip container.
 * Inner span: the element that animates y from +100% → 0.
 */
export function splitTextIntoWordSpans(el: HTMLElement): HTMLSpanElement[] {
  const words = el.innerText.trim().split(/\s+/)
  el.innerHTML = ""
  const inners: HTMLSpanElement[] = []

  words.forEach((word, i) => {
    const outer = document.createElement("span")
    outer.style.cssText =
      "display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:0.28em;"
    const inner = document.createElement("span")
    inner.style.cssText = "display:inline-block;"
    inner.textContent = word
    outer.appendChild(inner)
    el.appendChild(outer)
    inners.push(inner)
  })

  return inners
}

// ─── COUNTER ANIMATION ────────────────────────────────────────────────────────
/** Animates a numeric text node from 0 to target with optional suffix. */
export function animateCounter(
  el: HTMLElement,
  target: number,
  suffix = "",
  duration = 1.8,
  triggerEl?: Element
) {
  const obj = { val: 0 }
  return gsap.to(obj, {
    val: target,
    duration,
    ease: "power2.out",
    onUpdate() {
      el.textContent = Math.round(obj.val) + suffix
    },
    scrollTrigger: triggerEl
      ? {
          trigger: triggerEl,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      : undefined,
  })
}

// ─── PARALLAX LAYER ───────────────────────────────────────────────────────────
/** Adds a scrubbed parallax effect. ySpeed > 0 moves down on scroll, < 0 up. */
export function createParallax(
  el: Element,
  ySpeed = 20,
  trigger?: Element
) {
  return gsap.fromTo(
    el,
    { yPercent: -ySpeed / 2 },
    {
      yPercent: ySpeed / 2,
      ease: "none",
      scrollTrigger: {
        trigger: trigger ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  )
}

// ─── SECTION HEADING REVEAL ───────────────────────────────────────────────────
/** Standard section heading entrance: clip-path wipe + y translate. */
export function revealHeading(
  el: Element,
  delay = 0,
  triggerEl?: Element
) {
  gsap.set(el, { opacity: 0, y: 40 })
  return gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    delay,
    ease: "expo.out",
    scrollTrigger: triggerEl
      ? {
          trigger: triggerEl,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      : undefined,
  })
}
