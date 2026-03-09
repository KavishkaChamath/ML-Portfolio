// import React from 'react'

// export default function Hero() {
//   const handleScroll = (e, id) => {
//     e.preventDefault()
//     document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section className="hero" id="hero">
//       <div className="hero-bg">
//         <div className="hero-grid-canvas" />
//         <NeuralLines />
//       </div>

//       <div className="hero-content">
//         {/* <p className="hero-eyebrow">Available for opportunities</p> */}

//         <h1 className="hero-name">
//           Chamath<br />
//           <span className="hero-name-gradient"> Kumarathunge</span>
//         </h1>

//         <p className="hero-roles">
//           Machine Learning Engineer
//           <span className="role-sep">/</span>
//           AI Engineer 
//           <span className="role-sep">/</span>
//           Computer Vision Engineer
//         </p>

//         <p className="hero-subtitle">
//           Building intelligent systems powered by AI, deep learning, 
//           computer vision, and scalable machine learning model development.
//         </p>

//         <div className="hero-buttons">
//           <a
//             className="btn btn-primary"
//             href="#projects"
//             onClick={e => handleScroll(e, '#projects')}
//           >
//             <span>🔭</span> View Projects
//           </a>
//           <a className="btn btn-secondary" href="/cv.pdf" download>
//             <span>⬇</span> Download CV
//           </a>
//         </div>
// {/* 
//         <div className="hero-stats">
//           {[
//             { number: '10+', label: 'ML Projects' },
//             { number: '5+', label: 'Publications' },
//             { number: '3+', label: 'Years Experience' },
//             { number: '99%', label: 'Model Accuracy' },
//           ].map(stat => (
//             <div className="hero-stat-item" key={stat.label}>
//               <span className="hero-stat-number">{stat.number}</span>
//               <span className="hero-stat-label">{stat.label}</span>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   )
// }

// /* Inline SVG neural network animation */
// function NeuralLines() {
//   const nodes = [
//     { cx: 80, cy: 200 }, { cx: 80, cy: 350 }, { cx: 80, cy: 500 },
//     { cx: 220, cy: 140 }, { cx: 220, cy: 280 }, { cx: 220, cy: 420 }, { cx: 220, cy: 560 },
//     { cx: 360, cy: 200 }, { cx: 360, cy: 360 }, { cx: 360, cy: 500 },
//     { cx: 480, cy: 280 }, { cx: 480, cy: 420 },
//   ]

//   const edges = [
//     [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
//     [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
//     [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
//   ]

//   return (
//     <svg
//       style={{
//         position: 'absolute',
//         right: '-60px',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         width: '560px',
//         height: '700px',
//         opacity: 0.13,
//         pointerEvents: 'none',
//       }}
//       viewBox="0 0 560 700"
//     >
//       <defs>
//         <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#00e5ff" />
//           <stop offset="100%" stopColor="#7c3aed" />
//         </linearGradient>
//       </defs>

//       {edges.map(([a, b], i) => (
//         <line
//           key={i}
//           x1={nodes[a].cx} y1={nodes[a].cy}
//           x2={nodes[b].cx} y2={nodes[b].cy}
//           stroke="url(#lineGrad)"
//           strokeWidth="1"
//           strokeOpacity="0.6"
//         />
//       ))}

//       {nodes.map((n, i) => (
//         <circle
//           key={i}
//           cx={n.cx} cy={n.cy} r={i % 3 === 0 ? 6 : 4}
//           fill="none"
//           stroke="#00e5ff"
//           strokeWidth="1.5"
//         />
//       ))}

//       {nodes.filter((_, i) => i % 4 === 0).map((n, i) => (
//         <circle
//           key={`pulse-${i}`}
//           cx={n.cx} cy={n.cy} r="10"
//           fill="none"
//           stroke="#00e5ff"
//           strokeWidth="1"
//           strokeOpacity="0.4"
//         >
//           <animate attributeName="r" values="6;18;6" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
//           <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
//         </circle>
//       ))}
//     </svg>
//   )
// }



import React, { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────────
   OBJECT DETECTION HERO ANIMATION
   Each detection is a real rendered image (emoji pre-drawn onto
   an offscreen canvas) that floats across the scene with:
   • Actual object image clipped inside the bounding box
   • Snap-in animated corner-bracket bounding box
   • Class label + confidence score pill
   • Scan line sweep, dot grid, and HUD overlay
─────────────────────────────────────────────────────────────── */

const DETECTIONS = [
  { label: 'Car',        emoji: '🚗',  color: '#00e5ff', conf: [0.94, 0.99], w: 130, h: 80  },
  { label: 'Person',     emoji: '🧍',  color: '#a78bfa', conf: [0.91, 0.98], w: 70,  h: 140 },
  { label: 'Dog',        emoji: '🐕',  color: '#34d399', conf: [0.88, 0.97], w: 110, h: 90  },
  { label: 'Bicycle',    emoji: '🚲',  color: '#f59e0b', conf: [0.85, 0.96], w: 120, h: 95  },
  { label: 'Bird',       emoji: '🐦',  color: '#f87171', conf: [0.80, 0.95], w: 90,  h: 75  },
  { label: 'Truck',      emoji: '🚚',  color: '#38bdf8', conf: [0.92, 0.99], w: 150, h: 90  },
  { label: 'Cat',        emoji: '🐈',  color: '#c084fc', conf: [0.87, 0.97], w: 95,  h: 85  },
  { label: 'Motorcycle', emoji: '🏍️', color: '#fb923c', conf: [0.83, 0.96], w: 125, h: 85  },
  { label: 'Airplane',   emoji: '✈️', color: '#22d3ee', conf: [0.90, 0.99], w: 140, h: 75  },
  { label: 'Bus',        emoji: '🚌',  color: '#4ade80', conf: [0.91, 0.98], w: 145, h: 95  },
]

/* Pre-render each emoji onto an offscreen canvas once.
   We scale at 3× so it looks crisp when drawn at any size. */
function buildEmojiImages() {
  return DETECTIONS.map(det => {
    const scale = 3
    const pw    = det.w * scale
    const ph    = det.h * scale
    const oc    = document.createElement('canvas')
    oc.width    = pw
    oc.height   = ph
    const c     = oc.getContext('2d')

    // subtle coloured tint background
    c.fillStyle = det.color + '14'
    c.fillRect(0, 0, pw, ph)

    // emoji drawn large, centred, fitting within the box
    const fs = Math.min(pw, ph) * 0.78
    c.font         = `${fs}px serif`
    c.textAlign    = 'center'
    c.textBaseline = 'middle'
    c.fillText(det.emoji, pw / 2, ph / 2)

    return { ...det, img: oc }
  })
}

/* ── Helpers ── */
const rand  = (a, b) => a + Math.random() * (b - a)
const randI = (a, b) => Math.floor(rand(a, b))

function roundRect(ctx, x, y, w, h, r) {
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.closePath()
}

/* ── Factory: spawn one detection object entering from an edge ── */
function spawnObject(templates, W, H) {
  const tpl   = templates[randI(0, templates.length)]
  const scale = rand(0.78, 1.32)
  const w     = tpl.w * scale
  const h     = tpl.h * scale

  // pick a random edge to enter from
  const edge  = randI(0, 4)
  let x, y
  if      (edge === 0) { x = rand(0, W - w);  y = -h - 10       }  // top
  else if (edge === 1) { x = W + 10;           y = rand(0, H - h) }  // right
  else if (edge === 2) { x = rand(0, W - w);  y = H + 10        }  // bottom
  else                 { x = -w - 10;          y = rand(0, H - h) }  // left

  // aim toward a random interior point
  const tx  = rand(W * 0.1, W * 0.9)
  const ty  = rand(H * 0.1, H * 0.9)
  const dx  = tx - (x + w / 2)
  const dy  = ty - (y + h / 2)
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  const spd = rand(0.30, 0.60)

  return {
    x, y, w, h,
    vx: (dx / len) * spd,
    vy: (dy / len) * spd,
    tpl,
    conf: rand(tpl.conf[0], tpl.conf[1]),
    life: 0,
    lifeMax: rand(900, 1400),
  }
}

/* ── Draw: object image clipped inside box ── */
function drawImage(ctx, o, alpha) {
  ctx.save()
  ctx.globalAlpha = alpha * 0.9
  ctx.beginPath()
  roundRect(ctx, o.x + 1, o.y + 1, o.w - 2, o.h - 2, 5)
  ctx.clip()
  ctx.drawImage(o.tpl.img, o.x, o.y, o.w, o.h)
  ctx.restore()
}

/* ── Draw: corner-bracket bounding box ── */
function drawBox(ctx, o, alpha) {
  const { x, y, w, h } = o
  const col = o.tpl.color
  const L   = Math.min(w, h) * 0.27

  ctx.save()

  // dashed rect
  ctx.globalAlpha = alpha * 0.22
  ctx.strokeStyle = col
  ctx.lineWidth   = 1
  ctx.setLineDash([5, 7])
  ctx.beginPath(); roundRect(ctx, x, y, w, h, 5); ctx.stroke()
  ctx.setLineDash([])

  // corner brackets
  ctx.globalAlpha = alpha
  ctx.strokeStyle = col
  ctx.lineWidth   = 2
  ctx.lineCap     = 'round'
  ;[
    [[x, y + L],         [x, y],         [x + L, y]         ],
    [[x + w - L, y],     [x + w, y],     [x + w, y + L]     ],
    [[x + w, y + h - L], [x + w, y + h], [x + w - L, y + h] ],
    [[x + L, y + h],     [x, y + h],     [x, y + h - L]     ],
  ].forEach(pts => {
    ctx.beginPath()
    pts.forEach(([px, py], i) => i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py))
    ctx.stroke()
  })

  ctx.restore()
}

/* ── Draw: label pill ── */
function drawLabel(ctx, o, alpha) {
  const text = `${o.tpl.label}  ${(o.conf * 100).toFixed(1)}%`
  const col  = o.tpl.color
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.font        = 'bold 11px "DM Mono", monospace'
  const tw  = ctx.measureText(text).width
  const ph  = 18, pv = 5
  const bx  = o.x
  const by  = o.y - ph - pv * 2 - 4

  ctx.fillStyle   = col + '28'
  ctx.strokeStyle = col
  ctx.lineWidth   = 1
  ctx.beginPath(); roundRect(ctx, bx, by, tw + ph, ph + pv * 2, 4)
  ctx.fill(); ctx.stroke()

  ctx.fillStyle = col
  ctx.fillText(text, bx + ph / 2, by + ph)
  ctx.restore()
}

/* ── Draw: scan line ── */
function drawScanLine(ctx, sy, W) {
  const g = ctx.createLinearGradient(0, sy - 55, 0, sy + 55)
  g.addColorStop(0,    'rgba(0,229,255,0)')
  g.addColorStop(0.45, 'rgba(0,229,255,0.055)')
  g.addColorStop(0.5,  'rgba(0,229,255,0.20)')
  g.addColorStop(0.55, 'rgba(0,229,255,0.055)')
  g.addColorStop(1,    'rgba(0,229,255,0)')
  ctx.save()
  ctx.fillStyle = g
  ctx.fillRect(0, sy - 55, W, 110)
  ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(W, sy)
  ctx.strokeStyle = 'rgba(0,229,255,0.40)'
  ctx.lineWidth = 1; ctx.stroke()
  ctx.restore()
}

/* ── Draw: dot grid ── */
function drawGrid(ctx, W, H) {
  ctx.save()
  ctx.fillStyle = 'rgba(0,229,255,0.10)'
  const step = 36
  for (let x = step; x < W; x += step)
    for (let y = step; y < H; y += step) {
      ctx.beginPath(); ctx.arc(x, y, 0.8, 0, Math.PI * 2); ctx.fill()
    }
  ctx.restore()
}

/* ── Draw: HUD frame ── */
function drawHUD(ctx, W, H, count) {
  ctx.save()
  ctx.strokeStyle = 'rgba(0,229,255,0.18)'
  ctx.lineWidth   = 1.6
  ctx.lineCap     = 'round'
  const arm = 22
  ;[[12,12,1,1],[W-12,12,-1,1],[W-12,H-12,-1,-1],[12,H-12,1,-1]].forEach(([cx,cy,sx,sy]) => {
    ctx.beginPath()
    ctx.moveTo(cx, cy + sy * arm); ctx.lineTo(cx, cy); ctx.lineTo(cx + sx * arm, cy)
    ctx.stroke()
  })
  ctx.font      = '9.5px "DM Mono", monospace'
  ctx.fillStyle = 'rgba(0,229,255,0.32)'
  ctx.fillText('● LIVE  INFERENCE  60fps', 22, H - 16)
  ctx.fillText(`DETECTIONS: ${count}`, W - 118, H - 16)
  ctx.fillText('CV · OBJECT DETECTION · ACTIVE', 22, 26)
  ctx.restore()
}

/* ─────────────────────────────────────────
   Canvas React component
─────────────────────────────────────────── */
function ObjectDetectionCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx     = canvas.getContext('2d')
    const dpr     = window.devicePixelRatio || 1
    let W, H, animId
    const objects = []
    let scanY     = 0
    let templates = null

    function resize() {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      for (let i = 0; i < 5; i++) objects.push(spawnObject(templates, W, H))
    }

    function tick() {
      ctx.clearRect(0, 0, W, H)

      drawGrid(ctx, W, H)
      drawScanLine(ctx, scanY, W)
      scanY = (scanY + 1.1) % H

      while (objects.length < 5) objects.push(spawnObject(templates, W, H))

      for (let i = objects.length - 1; i >= 0; i--) {
        const o = objects[i]
        o.life++
        o.x += o.vx
        o.y += o.vy

        const fadeIn  = Math.min(1, o.life / 40)
        const fadeOut = Math.max(0, 1 - Math.max(0, o.life - o.lifeMax + 120) / 120)
        const alpha   = fadeIn * fadeOut
        const snapP   = Math.min(1, o.life / 28)   // box draws in over first 28 frames

        // cull when off-screen and past initial entry
        const gone = o.x > W + 30 || o.x < -o.w - 30 || o.y > H + 30 || o.y < -o.h - 30
        if (alpha <= 0 || (gone && o.life > 200)) { objects.splice(i, 1); continue }

        drawImage(ctx, o, alpha)
        drawBox(ctx, o, alpha * snapP)
        if (snapP > 0.5) drawLabel(ctx, o, alpha * snapP)
      }

      drawHUD(ctx, W, H, objects.length)
      animId = requestAnimationFrame(tick)
    }

    // build images then start
    templates = buildEmojiImages()
    resize()
    seed()
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

/* ─────────────────────────────────────────
   Hero Component
─────────────────────────────────────────── */
export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid-canvas" />
        <ObjectDetectionCanvas />
      </div>

      {/* Left-side vignette — keeps text legible over animation */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse 58% 92% at 22% 52%, rgba(5,10,20,0.94) 15%, rgba(5,10,20,0.60) 55%, transparent 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* <p className="hero-eyebrow">Available for opportunities</p> */}

        <h1 className="hero-name">
          Chamath<br />
          <span className="hero-name-gradient">Kumarathunge</span>
        </h1>

        <p className="hero-roles">
          Machine Learning Engineer
          <span className="role-sep">/</span>
           AI Engineer 
          <span className="role-sep">/</span>
          Computer Vision Engineer
        </p>

        <p className="hero-subtitle">
          Building intelligent systems powered by AI, deep learning, 
          computer vision, and scalable machine learning model development.
        </p>

        <div className="hero-buttons">
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={e => handleScroll(e, '#projects')}
          >
            <span>🔭</span> View Projects
          </a>
          <a className="btn btn-secondary" href="/Chamth Kumarathunge.pdf" download="Chamath Kumarathunge.pdf" >
            <span>⬇</span> Download CV
          </a>
        </div>

        {/* <div className="hero-stats">
          {[
            { number: '10+', label: 'ML Projects'     },
            { number: '5+',  label: 'Publications'    },
            { number: '3+',  label: 'Years Experience'},
            { number: '99%', label: 'Model Accuracy'  },
          ].map(stat => (
            <div className="hero-stat-item" key={stat.label}>
              <span className="hero-stat-number">{stat.number}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}