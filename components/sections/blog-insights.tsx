"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { gsap } from "@/lib/gsap"

// ─── Constants ────────────────────────────────────────────────────────────────
const RING_SIZE   = 10
const ANGLE_STEP  = 360 / RING_SIZE   // 36°
const RADIUS      = 580
const CARD_W      = 268
const CARD_H      = 350
const PERSPECTIVE = 1400

// ─── Types ────────────────────────────────────────────────────────────────────
type Article = { category: string; read: string; title: string; excerpt: string; thumb: string }

// ─── Data ─────────────────────────────────────────────────────────────────────
const TABS = [
  "AI & Automation", "Engineering", "Cloud & Platform",
  "Cybersecurity", "Digital Products", "Startups", "Industry",
]

const SOURCE_ARTICLES: Record<string, Article[]> = {
  "AI & Automation": [
    { category:"AI", read:"5 MIN", title:"The Shift to Agentic AI: Beyond Simple Automation", excerpt:"How businesses leverage autonomous agents for complex multi-step workflows.", thumb:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" },
    { category:"AI", read:"7 MIN", title:"LLMs in Production: Lessons from the Trenches", excerpt:"Real-world pitfalls and wins from deploying language models at enterprise scale.", thumb:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" },
    { category:"AI", read:"6 MIN", title:"RAG vs Fine-Tuning: Choosing Your Strategy", excerpt:"A practical guide to when retrieval augmentation beats model fine-tuning.", thumb:"https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&q=80" },
    { category:"AI", read:"4 MIN", title:"Prompt Engineering at Scale", excerpt:"Design systems for prompts that survive model updates and team growth.", thumb:"https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&q=80" },
    { category:"AI", read:"8 MIN", title:"Vector Databases Explained for Engineers", excerpt:"Pinecone, Weaviate, pgvector — understanding embeddings storage at scale.", thumb:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
    { category:"AI", read:"5 MIN", title:"AI Agents: Building Reliable Tool-Calling Loops", excerpt:"Retries, timeout budgets, and fallback patterns for robust agentic pipelines.", thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  ],
  "Engineering": [
    { category:"ENGINEERING", read:"8 MIN", title:"Micro-Frontends: Splitting the Monolith UI", excerpt:"Architecture patterns for teams shipping independent frontend modules.", thumb:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80" },
    { category:"ENGINEERING", read:"6 MIN", title:"Type-Safe APIs with tRPC and Zod", excerpt:"End-to-end type safety without code generation headaches.", thumb:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" },
    { category:"ENGINEERING", read:"5 MIN", title:"Observability-First Development", excerpt:"Logging, tracing, and metrics as a first-class design concern.", thumb:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { category:"ENGINEERING", read:"9 MIN", title:"Scaling Postgres to Millions of Rows", excerpt:"Partitioning, indexing, and pooling strategies that actually work.", thumb:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
    { category:"ENGINEERING", read:"6 MIN", title:"The Art of Clean React Architecture", excerpt:"Feature folders, co-location, and boundaries that scale with your team.", thumb:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80" },
    { category:"ENGINEERING", read:"7 MIN", title:"WebSockets vs Server-Sent Events in 2024", excerpt:"When to reach for each, with real latency benchmarks.", thumb:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  ],
  "Cloud & Platform": [
    { category:"CLOUD", read:"8 MIN", title:"FinOps in 2024: Mastering Cloud Unit Economics", excerpt:"Proven strategies to regain control over cloud spending while scaling.", thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { category:"CLOUD", read:"5 MIN", title:"Kubernetes Cost Optimization Playbook", excerpt:"Right-sizing, spot instances, and VPA for leaner clusters.", thumb:"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80" },
    { category:"CLOUD", read:"6 MIN", title:"Serverless at the Edge: A Practical Guide", excerpt:"Running compute at CDN nodes for sub-10ms response times globally.", thumb:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
    { category:"CLOUD", read:"7 MIN", title:"Multi-Cloud Without the Chaos", excerpt:"Abstraction layers and tooling that make multi-cloud sustainable.", thumb:"https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&q=80" },
    { category:"CLOUD", read:"6 MIN", title:"GitOps with ArgoCD and Flux", excerpt:"Declarative deployments, drift detection, and rollback strategies.", thumb:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { category:"CLOUD", read:"5 MIN", title:"Service Mesh Deep Dive: Istio vs Linkerd", excerpt:"Observability, mTLS, and traffic management compared.", thumb:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  ],
  "Cybersecurity": [
    { category:"SECURITY", read:"6 MIN", title:"Building Cyber Resilience in an AI-Threat Landscape", excerpt:"Protecting enterprise data against next-gen automated cybersecurity threats.", thumb:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
    { category:"SECURITY", read:"8 MIN", title:"Zero Trust Architecture in Practice", excerpt:"Moving beyond VPNs to identity-centric perimeter-less security.", thumb:"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80" },
    { category:"SECURITY", read:"5 MIN", title:"Secrets Management at Scale", excerpt:"Vault, SOPS, and sealed secrets — a comparison for platform teams.", thumb:"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" },
    { category:"SECURITY", read:"7 MIN", title:"Supply Chain Security for Node Projects", excerpt:"Auditing, pinning, and SBOM strategies for npm-heavy stacks.", thumb:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
    { category:"SECURITY", read:"6 MIN", title:"OWASP Top 10 for Modern Web Apps", excerpt:"Updated threat matrix and mitigation patterns for 2024.", thumb:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80" },
    { category:"SECURITY", read:"5 MIN", title:"Penetration Testing as a Developer Skill", excerpt:"Basic recon, XSS, and SQL injection labs every dev should run.", thumb:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
  ],
  "Digital Products": [
    { category:"PRODUCT", read:"5 MIN", title:"Designing for Developer Experience First", excerpt:"DX as a product strategy — how internal tools become competitive moats.", thumb:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" },
    { category:"PRODUCT", read:"6 MIN", title:"Feature Flags Done Right", excerpt:"Gradual rollouts, kill switches, and A/B testing without tech debt.", thumb:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { category:"PRODUCT", read:"7 MIN", title:"Analytics-Driven Product Iterations", excerpt:"Funnel analysis, retention curves, and cohort studies for builders.", thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { category:"PRODUCT", read:"4 MIN", title:"Accessibility as a Growth Lever", excerpt:"WCAG compliance that opens markets and improves UX for everyone.", thumb:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" },
    { category:"PRODUCT", read:"6 MIN", title:"Figma to Code: Closing the Gap", excerpt:"Design tokens, component mapping, and the tools making handoff obsolete.", thumb:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" },
    { category:"PRODUCT", read:"5 MIN", title:"Measuring What Matters: Product Metrics", excerpt:"North star, guardrail, and diagnostic metrics for digital products.", thumb:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  ],
  "Startups": [
    { category:"STARTUP", read:"5 MIN", title:"Tech Stack Decisions at Seed Stage", excerpt:"Boring tech or bleeding edge? A framework for early-stage tradeoffs.", thumb:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80" },
    { category:"STARTUP", read:"6 MIN", title:"Building a Two-Person Engineering Team", excerpt:"Roles, rituals, and the critical things to not overthink early.", thumb:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
    { category:"STARTUP", read:"7 MIN", title:"Incident Response for Small Teams", excerpt:"On-call without burnout — runbooks, rotations, and post-mortems.", thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { category:"STARTUP", read:"4 MIN", title:"Choosing Your First Auth Provider", excerpt:"Clerk, Auth0, Supabase Auth — what actually matters at MVP stage.", thumb:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80" },
    { category:"STARTUP", read:"6 MIN", title:"Monorepo vs Polyrepo at Day One", excerpt:"The honest tradeoffs when you only have three engineers.", thumb:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" },
    { category:"STARTUP", read:"5 MIN", title:"When to Hire Your First Platform Engineer", excerpt:"Signs your infra complexity has outgrown your product team.", thumb:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
  ],
  "Industry": [
    { category:"INDUSTRY", read:"6 MIN", title:"AI Regulation: What Engineers Must Know", excerpt:"EU AI Act, NIST frameworks, and what compliance means for your team.", thumb:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
    { category:"INDUSTRY", read:"8 MIN", title:"The Platform Engineer's New Role", excerpt:"How platform engineering is reshaping developer orgs in 2024.", thumb:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
    { category:"INDUSTRY", read:"5 MIN", title:"Open Source Sustainability in the AI Era", excerpt:"Funding, governance, and the economics of open-source AI tooling.", thumb:"https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80" },
    { category:"INDUSTRY", read:"7 MIN", title:"Remote-First Engineering Culture", excerpt:"Async norms, documentation culture, and collaboration tools that stick.", thumb:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
    { category:"INDUSTRY", read:"6 MIN", title:"Developer Productivity: Metrics That Lie", excerpt:"DORA, SPACE, and why velocity is a vanity metric.", thumb:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
    { category:"INDUSTRY", read:"5 MIN", title:"The Rise of Vertical AI SaaS", excerpt:"Why niche AI products beat horizontal platforms for specific workflows.", thumb:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
  ],
}

// Pad articles to RING_SIZE by cycling duplicates
function buildRingArticles(src: Article[]): Article[] {
  return Array.from({ length: RING_SIZE }, (_, i) => src[i % src.length])
}

// Map angular distance → opacity (5 front cards clearly visible)
function cardOpacity(absDeg: number): number {
  if (absDeg <= 36)  return 1 - (absDeg / 36) * 0.42        // 1.0 → 0.58
  if (absDeg <= 72)  return 0.58 - ((absDeg - 36) / 36) * 0.25 // 0.58 → 0.33
  if (absDeg <= 108) return 0.33 - ((absDeg - 72) / 36) * 0.24 // 0.33 → 0.09
  return 0.09
}

// ─── Carousel3D ───────────────────────────────────────────────────────────────
// NOTE: No `key` prop remount on tab change. Tab changes are handled internally
// by updating card content via refs — avoids any rotation state desync.

function Carousel3D({ tab }: { tab: string }) {

  const stageRef        = useRef<HTMLDivElement>(null)
  const rotRef          = useRef(0)
  const rotationObj     = useRef({ value: 0 })
  const autoRotateRef   = useRef<gsap.core.Tween | null>(null)
  const targetIdxRef    = useRef(0)
  const isDraggingRef   = useRef(false)
  const dragStartXRef   = useRef(0)
  const dragBaseRotRef  = useRef(0)
  const pointerIdRef    = useRef<number | null>(null)
  const rafRef          = useRef<number | null>(null)
  const tweenObjRef     = useRef({ r: 0 })
  const [activeIdx, setActiveIdx] = useState(0)
  const [grabbing,  setGrabbing]  = useState(false)

  const articlesRef = useRef<Article[]>(buildRingArticles(SOURCE_ARTICLES[tab] ?? SOURCE_ARTICLES[TABS[0]]))
  const srcLenRef   = useRef((SOURCE_ARTICLES[tab] ?? SOURCE_ARTICLES[TABS[0]]).length)

  // ── Update card DOM content ───────────────────────────────────────────────
  const updateCardContent = useCallback((articles: Article[]) => {
    const stage = stageRef.current
    if (!stage) return
    ;(Array.from(stage.children) as HTMLElement[]).forEach((card, i) => {
      const a = articles[i]
      if (!a) return
      const img     = card.querySelector<HTMLImageElement>(".bc-img")
      const meta    = card.querySelector<HTMLElement>(".bc-meta")
      const title   = card.querySelector<HTMLElement>(".bc-title")
      const excerpt = card.querySelector<HTMLElement>(".bc-excerpt")
      if (img)     { img.src = a.thumb; img.alt = a.title }
      if (meta)    meta.textContent    = `${a.category} • ${a.read} Read`
      if (title)   title.textContent   = a.title
      if (excerpt) excerpt.textContent = a.excerpt
    })
  }, [])

  // ── Sync card opacity / zIndex from current rotation ─────────────────────
  const syncCards = useCallback((rot: number) => {
    const stage = stageRef.current
    if (!stage) return
    ;(Array.from(stage.children) as HTMLElement[]).forEach((child, i) => {
      const worldAngle = ANGLE_STEP * i + rot
      const norm   = ((worldAngle % 360) + 540) % 360 - 180
      const absDeg = Math.abs(norm)
      const el = child as HTMLElement
      el.style.opacity = cardOpacity(absDeg).toFixed(3)
      el.style.zIndex  = String(Math.round(200 - absDeg))
    })
  }, [])

  // ── Animate stage rotation to a target ───────────────────────────────────
  const animateTo = useCallback((targetRot: number, onDone?: () => void) => {
    gsap.killTweensOf(tweenObjRef.current)
    autoRotateRef.current?.pause()

    tweenObjRef.current.r = rotRef.current

    gsap.to(tweenObjRef.current, {
      r: targetRot,
      duration: 1.2,
      ease: "power3.out",
      onUpdate() {
        const r = tweenObjRef.current.r
        rotRef.current = r
        if (stageRef.current) stageRef.current.style.transform = `rotateY(${r}deg)`
        syncCards(r)
      },
      onComplete() {
        rotRef.current = targetRot
        rotationObj.current.value = targetRot   // ← sync so auto-rotate resumes from here
        onDone?.()
      },
    })
  }, [syncCards])

  // ── Go to index (shortest arc) ────────────────────────────────────────────
  const goTo = useCallback((idx: number) => {
    const norm = ((idx % RING_SIZE) + RING_SIZE) % RING_SIZE
    targetIdxRef.current = norm
    setActiveIdx(norm)

    const idealTarget  = -norm * ANGLE_STEP
    const cur          = rotRef.current
    const base         = Math.round(cur / 360) * 360
    const candidates   = [base + idealTarget, base + idealTarget - 360, base + idealTarget + 360]
    const best         = candidates.reduce((a, b) => Math.abs(a - cur) < Math.abs(b - cur) ? a : b)

    animateTo(best, () => {
      rotationObj.current.value = rotRef.current
      autoRotateRef.current?.resume()
    })
  }, [animateTo])

  // ── Tab change: swap content, keep ring position ──────────────────────────
  const prevTabRef = useRef(tab)

  useEffect(() => {
    if (prevTabRef.current === tab) return
    prevTabRef.current = tab

    const src  = SOURCE_ARTICLES[tab] ?? SOURCE_ARTICLES[TABS[0]]
    const ring = buildRingArticles(src)

    articlesRef.current = ring
    srcLenRef.current   = src.length

    const currentIdx = targetIdxRef.current % ring.length
    updateCardContent(ring)
    targetIdxRef.current = currentIdx
    setActiveIdx(currentIdx)
    syncCards(rotRef.current)
  }, [tab, syncCards, updateCardContent])

  // ── Initial mount: position cards in ring ─────────────────────────────────
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    ;(Array.from(stage.children) as HTMLElement[]).forEach((card, i) => {
      card.style.transform = `rotateY(${ANGLE_STEP * i}deg) translateZ(${RADIUS}px)`
    })
    stage.style.transform = "rotateY(0deg)"
    syncCards(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Auto-rotate ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!stageRef.current) return

    rotationObj.current.value = rotRef.current   // start from current position
    autoRotateRef.current?.kill()

    autoRotateRef.current = gsap.to(rotationObj.current, {
      value: "-=360",          // relative, so resume works correctly
      duration: 80,
      ease: "none",
      repeat: -1,
      onUpdate() {
        const r = rotationObj.current.value
        rotRef.current = r
        if (stageRef.current) stageRef.current.style.transform = `rotateY(${r}deg)`
        syncCards(r)
      },
    })

    return () => { autoRotateRef.current?.kill() }
  }, [syncCards])

  // ── Pointer drag ──────────────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    if (pointerIdRef.current !== null) return

    autoRotateRef.current?.pause()
    gsap.killTweensOf(tweenObjRef.current)

    pointerIdRef.current  = e.pointerId
    isDraggingRef.current = true
    dragStartXRef.current = e.clientX
    dragBaseRotRef.current = rotRef.current
    setGrabbing(true)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || e.pointerId !== pointerIdRef.current) return
    const delta   = e.clientX - dragStartXRef.current
    const liveRot = dragBaseRotRef.current + delta * 0.12   // 0.12 = smoother drag feel
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!stageRef.current) return
      rotRef.current = liveRot
      stageRef.current.style.transform = `rotateY(${liveRot}deg)`
      syncCards(liveRot)
    })
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || e.pointerId !== pointerIdRef.current) return
    isDraggingRef.current = false
    pointerIdRef.current  = null
    setGrabbing(false)
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }

    // Small tap — no snap needed
    if (Math.abs(e.clientX - dragStartXRef.current) < 6) {
      rotationObj.current.value = rotRef.current
      autoRotateRef.current?.resume()
      return
    }

    // Snap to nearest card
    const cur = rotRef.current
    let bestIdx = 0, bestDist = Infinity
    for (let i = 0; i < RING_SIZE; i++) {
      const worldAngle = ANGLE_STEP * i + cur
      const norm       = ((worldAngle % 360) + 540) % 360 - 180
      if (Math.abs(norm) < bestDist) { bestDist = Math.abs(norm); bestIdx = i }
    }
    targetIdxRef.current = bestIdx
    setActiveIdx(bestIdx)

    const idealTarget = -bestIdx * ANGLE_STEP
    const base        = Math.round(cur / 360) * 360
    const candidates  = [base + idealTarget, base + idealTarget - 360, base + idealTarget + 360]
    const best        = candidates.reduce((a, b) => Math.abs(a - cur) < Math.abs(b - cur) ? a : b)

    animateTo(best, () => {
      rotationObj.current.value = rotRef.current
      autoRotateRef.current?.resume()
    })
  }

  const srcLen    = srcLenRef.current
  const activeDot = activeIdx % srcLen

  return (
    <div className="mt-40">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 400,
          perspective: `${PERSPECTIVE}px`,
          perspectiveOrigin: "50% 50%",
          overflow: "visible",
          cursor: grabbing ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={stageRef}
          style={{ position: "absolute", width: "100%", height: "100%", transformStyle: "preserve-3d" }}
        >
          {buildRingArticles(SOURCE_ARTICLES[TABS[0]]).map((a, i) => (
            <BlogCard key={i} article={a} slotIndex={i} />
          ))}
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 28 }}>
        <NavBtn label="←" onClick={() => goTo(targetIdxRef.current - 1)} />
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {Array.from({ length: srcLen }).map((_, i) => {
            const isA = i === activeDot
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Article ${i + 1}`}
                style={{
                  width: isA ? 24 : 8, height: 8,
                  borderRadius: 4,
                  background: isA ? "#3b67ff" : "#dde3f0",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "all 0.42s cubic-bezier(0.34,1.56,0.64,1)",
                  boxShadow: isA ? "0 2px 10px rgba(59,103,255,0.35)" : "none",
                }}
              />
            )
          })}
        </div>
        <NavBtn label="→" onClick={() => goTo(targetIdxRef.current + 1)} />
      </div>
    </div>
  )
}

// ─── BlogCard ─────────────────────────────────────────────────────────────────
function BlogCard({ article: a, slotIndex }: { article: Article; slotIndex: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const initialTransform = `rotateY(${ANGLE_STEP * slotIndex}deg) translateZ(${RADIUS}px)`

  const onEnter = () => {
    if (!ref.current) return
    gsap.to(ref.current, { y: -10, scale: 1.03, duration: 0.4, ease: "power2.out" })
    const img = ref.current.querySelector<HTMLElement>(".bc-img-wrap")
    if (img) gsap.to(img.querySelector("img"), { scale: 1.07, duration: 0.55, ease: "power2.out" })
  }
  const onLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { y: 0, scale: 1, duration: 0.4, ease: "power2.inOut" })
    const img = ref.current.querySelector<HTMLElement>(".bc-img-wrap")
    if (img) gsap.to(img.querySelector("img"), { scale: 1, duration: 0.55, ease: "power2.inOut" })
  }

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "absolute",
        width: CARD_W, height: CARD_H,
        left: "50%", top: "50%",
        marginLeft: -(CARD_W / 2), marginTop: -(CARD_H / 2),
        transform: initialTransform,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #e2eaf8",
        background: "#fff",
        backfaceVisibility: "visible",
        willChange: "transform, opacity",
        boxShadow: "0 8px 32px rgba(13,30,60,0.09)",
        cursor: "pointer",
      }}
    >
      <div className="bc-img-wrap" style={{ height: 160, overflow: "hidden" }}>
        <img
          className="bc-img"
          src={a.thumb}
          alt={a.title}
          draggable={false}
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
        />
      </div>
      <div style={{ padding:"14px 16px 12px", display:"flex", flexDirection:"column", height:`calc(100% - 160px)` }}>
        <p className="bc-meta" style={{ fontSize:10, fontWeight:700, color:"#6b7a99", letterSpacing:"0.1em", marginBottom:7, textTransform:"uppercase" as const }}>
          {a.category} &bull; {a.read} Read
        </p>
        <h3 className="bc-title" style={{
          fontSize:13.5, fontWeight:700, color:"#0d1e3c", lineHeight:1.32, marginBottom:7,
          display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical" as const, overflow:"hidden",
        }}>
          {a.title}
        </h3>
        <p className="bc-excerpt" style={{
          fontSize:12, color:"#4b5a72", lineHeight:1.6, flex:1, marginBottom:10,
          display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical" as const, overflow:"hidden",
        }}>
          {a.excerpt}
        </p>
        <a href="#" style={{ fontSize:11, fontWeight:700, color:"#0d1e3c", textDecoration:"none", display:"flex", alignItems:"center", gap:4 }}
          onClick={e => e.preventDefault()}>
          Read Article <ExternalLink size={11} />
        </a>
      </div>
    </div>
  )
}

// ─── NavBtn ───────────────────────────────────────────────────────────────────
function NavBtn({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:42, height:42, borderRadius:"50%",
        border:`1.5px solid ${hov ? "#3b67ff" : "#dde3f0"}`,
        background: hov ? "#3b67ff" : "#fff",
        color: hov ? "#fff" : "#0d1e3c",
        fontSize:17, cursor:"pointer",
        display:"flex", alignItems:"center", justifyContent:"center",
        transition:"all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "scale(1.14)" : "scale(1)",
        boxShadow: hov ? "0 4px 16px rgba(59,103,255,0.28)" : "none",
      }}
    >{label}</button>
  )
}

// ─── BlogInsights ─────────────────────────────────────────────────────────────
export function BlogInsights() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const tabsRef    = useRef<HTMLDivElement>(null)

  // Scroll entrance — only animate y, NOT opacity, so tabs are always visible
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector<HTMLElement>(".bi-heading")
      if (!heading) return
      gsap.fromTo(heading,
        { y: 40 },
        { y: 0, duration: 1.0, ease: "expo.out",
          scrollTrigger: { trigger: heading, start: "top 88%", toggleActions: "play none none none" } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleTabClick = (tab: string) => {
    if (tab === activeTab) return
    setActiveTab(tab)
    // Elastic pill bounce
    tabsRef.current?.querySelectorAll<HTMLElement>(".bi-pill").forEach(p => {
      if (p.dataset.tab === tab) gsap.fromTo(p, { scale: 0.82 }, { scale: 1, duration: 0.6, ease: "elastic.out(1,0.45)" })
    })
  }

  return (
    <section ref={sectionRef} style={{ padding:"72px 0 80px", background:"#fff", overflow:"hidden" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 48px" }}>

        <div className="bi-heading">
          {/* Row: label + view all */}
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h3M12 9h3M9 3v3M9 12v3" stroke="#3b67ff" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="9" cy="9" r="2.2" fill="#3b67ff"/>
              </svg>
              <span style={{ color:"#3b67ff", fontSize:11, fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase" as const }}>
                Blogs &amp; Resources
              </span>
            </div>
            <a href="#" style={{ display:"flex", alignItems:"center", gap:7, color:"#3b67ff", fontWeight:600, fontSize:13, textDecoration:"none" }}>
              View All <ArrowRight size={15}/>
            </a>
          </div>

          <h2 style={{ fontSize:"clamp(26px,3.5vw,50px)", fontWeight:800, color:"#0d1e3c", lineHeight:1.06, letterSpacing:"-1.5px", marginBottom:12 }}>
            AI, ENGINEERING &amp; TECHNOLOGY INSIGHTS
          </h2>
          <p style={{ color:"#4b5a72", fontSize:15, lineHeight:1.8, marginBottom:28 }}>
            Explore expert perspectives on the future of AI transformation and digital architecture.
          </p>

          {/* ── Tab pills — always visible, opacity never animated ── */}
          <div ref={tabsRef} style={{ display:"flex", flexWrap:"wrap" as const, gap:8, marginBottom:44 }}>
            {TABS.map(tab => {
              const active = activeTab === tab
              return (
                <button
                  key={tab}
                  data-tab={tab}
                  className="bi-pill"
                  onClick={() => handleTabClick(tab)}
                  style={{
                    padding:"8px 18px",
                    borderRadius:999,
                    fontSize:12.5,
                    fontWeight:500,
                    border:`1.5px solid ${active ? "#3b67ff" : "#dde3f0"}`,
                    background: active ? "#3b67ff" : "#fff",
                    color: active ? "#fff" : "#4b5a72",
                    cursor:"pointer",
                    whiteSpace:"nowrap" as const,
                    transition:"all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                    boxShadow: active ? "0 3px 14px rgba(59,103,255,0.28)" : "none",
                    // Explicit display so browser never hides them
                    display:"inline-block",
                    opacity:1,
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* Single carousel instance — NO key remount, tab changes handled internally */}
        <Carousel3D tab={activeTab} />

      </div>
    </section>
  )
}