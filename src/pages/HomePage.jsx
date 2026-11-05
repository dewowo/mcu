import { ArrowRight, BookOpen, Clock, Layers, ChevronDown, GitBranch } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { chronicles } from '../data/chronology'

const PHASE_COLORS = {
  'Phase 1': '#E23636',
  'Phase 2': '#E5A93C',
  'Phase 3': '#00F0FF',
  'Phase 4': '#9b59b6',
  'Phase 5': '#2ecc71',
  'Phase 6': '#ECE7DE',
}

const PHASE_GROUPS = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6']

function HeroSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-screen px-4"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226,54,54,0.12) 0%, #0B0E14 60%)',
      }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(37,46,61,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,46,61,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div
        className="relative max-w-4xl mx-auto transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        {/* Pre-title badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{
            border: '1px solid rgba(226,54,54,0.3)',
            backgroundColor: 'rgba(226,54,54,0.08)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: '#E23636' }}
          />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E23636' }}
          >
            Cinematic Archive · 18 Entries · Updated 2026
          </span>
        </div>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6"
          style={{
            fontFamily: "'Cinzel', serif",
            color: '#ECE7DE',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          The Multiverse<br />
          <span style={{ color: '#E23636' }}>Chronicles</span>
        </h1>

        <p
          className="text-xl sm:text-2xl max-w-2xl mx-auto mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#A8B2C1',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}
        >
          A curated narrative archive of the Marvel Cinematic Universe, told chronologically
          from the trenches of the Second World War to the collapse of the Multiverse itself.
        </p>

        <p
          className="text-sm max-w-xl mx-auto mb-12"
          style={{ color: '#5C6880', lineHeight: 1.75 }}
        >
          {chronicles.length} entries · Phases 1–6 · In-Universe Chronological Order ·
          From <em style={{ color: '#A8B2C1' }}>The First Avenger</em> to <em style={{ color: '#A8B2C1' }}>Doomsday</em>
        </p>

        <Link
          to={`/chronicle/${chronicles[0].slug}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded font-semibold text-base transition-all duration-200 group"
          style={{
            fontFamily: "'Cinzel', serif",
            backgroundColor: '#E23636',
            color: '#fff',
            letterSpacing: '0.06em',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f04040' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E23636' }}
        >
          Begin the Journey
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <ChevronDown size={20} style={{ color: '#5C6880', animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
    </section>
  )
}

function AboutSection() {
  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: '#121820', borderTop: '1px solid #252E3D', borderBottom: '1px solid #252E3D' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE' }}
            >
              How the Chronology Works
            </h2>
            <p className="mb-6" style={{ color: '#A8B2C1', lineHeight: 1.85 }}>
              This archive presents the Marvel Cinematic Universe in <strong style={{ color: '#ECE7DE' }}>in-universe
              chronological order</strong> — not by theatrical release date. Each entry is a narrative
              retelling written in the voice of a serialized novella, placing you inside the story
              rather than above it.
            </p>
            <p style={{ color: '#A8B2C1', lineHeight: 1.85 }}>
              Beginning with the dust of World War II and ending at the threshold of the Multiverse's
              collapse, this is the complete chronicle of Earth's mightiest heroes — and the forces
              that have shaped, tested, and nearly destroyed them.
            </p>
          </div>
          <div className="space-y-4">
            <div
              className="flex gap-4 p-5 rounded"
              style={{ backgroundColor: '#181F2A', border: '1px solid #252E3D' }}
            >
              <BookOpen size={18} style={{ color: '#E5A93C', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: '#ECE7DE', fontFamily: "'Playfair Display', serif" }}
                >
                  In-Universe Timeline
                </h3>
                <p className="text-sm" style={{ color: '#5C6880', lineHeight: 1.7 }}>
                  Events are ordered by when they happen in the MCU's world — 1942, 1995, 2008, and
                  onwards — rather than when films were released in theaters.
                </p>
              </div>
            </div>
            <div
              className="flex gap-4 p-5 rounded"
              style={{ backgroundColor: '#181F2A', border: '1px solid #252E3D' }}
            >
              <GitBranch size={18} style={{ color: '#00F0FF', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: '#ECE7DE', fontFamily: "'Playfair Display', serif" }}
                >
                  Multiverse Threads
                </h3>
                <p className="text-sm" style={{ color: '#5C6880', lineHeight: 1.7 }}>
                  Phase 4–6 entries acknowledge the Multiversal expansion. Loki's TVA, the
                  Variants, and the colliding universes of Doomsday are treated as integral chapters
                  of the main narrative, not footnotes.
                </p>
              </div>
            </div>
            <div
              className="flex gap-4 p-5 rounded"
              style={{ backgroundColor: '#181F2A', border: '1px solid #252E3D' }}
            >
              <Layers size={18} style={{ color: '#E23636', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: '#ECE7DE', fontFamily: "'Playfair Display', serif" }}
                >
                  Phase Structure
                </h3>
                <p className="text-sm" style={{ color: '#5C6880', lineHeight: 1.7 }}>
                  The archive spans Phases 1 through 6 — each Phase representing a distinct dramatic
                  arc in the larger saga, color-coded and labeled throughout the chronology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEntry({ entry, index }) {
  const [hovered, setHovered] = useState(false)
  const phaseColor = PHASE_COLORS[entry.phase] || '#A8B2C1'

  return (
    <Link
      to={`/chronicle/${entry.slug}`}
      className="flex items-start gap-5 py-4 px-2 rounded transition-all duration-200 group"
      style={{ backgroundColor: hovered ? 'rgba(255,255,255,0.025)' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number + vertical line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            backgroundColor: hovered ? phaseColor : '#181F2A',
            color: hovered ? '#0B0E14' : phaseColor,
            border: `1px solid ${phaseColor}50`,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        {index < chronicles.length - 1 && (
          <div className="w-px flex-1 mt-1" style={{ backgroundColor: '#252E3D', minHeight: '24px' }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: phaseColor,
              backgroundColor: `${phaseColor}18`,
              border: `1px solid ${phaseColor}30`,
            }}
          >
            {entry.phase}
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
          >
            {entry.inUniverseDate}
          </span>
        </div>

        <h3
          className="text-base font-semibold mb-1 transition-colors"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: hovered ? '#ECE7DE' : '#A8B2C1',
          }}
        >
          {entry.title}
        </h3>

        <p className="text-sm line-clamp-2" style={{ color: '#5C6880', lineHeight: 1.6 }}>
          {entry.teaser}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <span
            className="flex items-center gap-1 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
          >
            <Clock size={10} />
            {entry.readTime}
          </span>
          <span
            className="flex items-center gap-1 text-xs transition-colors"
            style={{ color: hovered ? '#E5A93C' : '#5C6880' }}
          >
            Read chapter <ArrowRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  )
}

function TimelineSection() {
  const grouped = PHASE_GROUPS.reduce((acc, phase) => {
    const entries = chronicles.filter((c) => c.phase === phase)
    if (entries.length) acc.push({ phase, entries })
    return acc
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE' }}
          >
            The Chronicle Table of Contents
          </h2>
          <p style={{ color: '#5C6880' }}>Jump directly to any entry in the in-universe chronology.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {grouped.map(({ phase, entries }) => {
            const color = PHASE_COLORS[phase]
            return (
              <div key={phase} className="mb-10">
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ borderBottom: `1px solid ${color}30`, paddingBottom: '0.75rem' }}
                >
                  <span
                    className="text-xs uppercase tracking-widest font-bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color }}
                  >
                    {phase}
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
                  >
                    {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                  </span>
                </div>
                {entries.map((entry) => (
                  <TimelineEntry
                    key={entry.slug}
                    entry={entry}
                    index={chronicles.indexOf(entry)}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
    </main>
  )
}
