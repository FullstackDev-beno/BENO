import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register once globally — safe to call multiple times
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
