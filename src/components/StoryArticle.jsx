import { Clock, Tag, Users, Calendar } from 'lucide-react'

const ACCENT_STYLES = {
  crimson: { color: '#E23636', bg: 'rgba(226,54,54,0.1)', border: 'rgba(226,54,54,0.3)' },
  cyan: { color: '#00F0FF', bg: 'rgba(0,240,255,0.08)', border: 'rgba(0,240,255,0.25)' },
  amber: { color: '#E5A93C', bg: 'rgba(229,169,60,0.1)', border: 'rgba(229,169,60,0.3)' },
}

const PHASE_COLORS = {
  'Phase 1': '#E23636',
  'Phase 2': '#E5A93C',
  'Phase 3': '#00F0FF',
  'Phase 4': '#9b59b6',
  'Phase 5': '#2ecc71',
  'Phase 6': '#ECE7DE',
}

function MetaTag({ children, color }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs uppercase tracking-widest"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: color || '#A8B2C1',
        backgroundColor: color ? `${color}18` : 'rgba(168,178,193,0.1)',
        border: `1px solid ${color ? `${color}35` : 'rgba(168,178,193,0.2)'}`,
      }}
    >
      {children}
    </span>
  )
}

function CharacterPill({ name }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs"
      style={{
        color: '#ECE7DE',
        backgroundColor: '#181F2A',
        border: '1px solid #252E3D',
      }}
    >
      {name}
    </span>
  )
}

export default function StoryArticle({ chronicle }) {
  const accent = ACCENT_STYLES[chronicle.accentColor] || ACCENT_STYLES.amber
  const phaseColor = PHASE_COLORS[chronicle.phase] || '#A8B2C1'

  // Split narrative into paragraphs/sections
  const sections = chronicle.narrative.split('\n\n').filter(Boolean)

  return (
    <article>
      {/* Hero / Masthead */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${accent.color}12 0%, #0B0E14 100%)`,
          borderBottom: `1px solid #252E3D`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {/* Phase + entry number */}
          <div className="flex items-center gap-3 mb-6">
            <MetaTag color={phaseColor}>{chronicle.phase}</MetaTag>
            <span
              className="text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
            >
              Entry #{String(chronicle.id).padStart(2, '0')} of 18
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3"
            style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE', lineHeight: 1.15 }}
          >
            {chronicle.title}
          </h1>
          <p
            className="text-xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: '#A8B2C1', fontStyle: 'italic' }}
          >
            {chronicle.subtitle}
          </p>

          {/* Meta bar */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6"
            style={{ borderTop: '1px solid #252E3D' }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={13} style={{ color: '#E5A93C' }} />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#E5A93C' }}
              >
                {chronicle.inUniverseDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} style={{ color: '#5C6880' }} />
              <span
                className="text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
              >
                {chronicle.readTime} read
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={13} style={{ color: '#5C6880' }} />
              <MetaTag color={phaseColor}>{chronicle.phase}</MetaTag>
            </div>
          </div>

          {/* Characters */}
          <div className="flex items-start gap-3 mt-4">
            <Users size={13} className="mt-1 shrink-0" style={{ color: '#5C6880' }} />
            <div className="flex flex-wrap gap-2">
              {chronicle.characters.map((char) => (
                <CharacterPill key={char} name={char} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-chronicle mx-auto">
          {/* Pull quote */}
          <div className="pull-quote mb-10">
            <p>&ldquo;{chronicle.pullQuote}&rdquo;</p>
          </div>

          {/* Narrative sections */}
          {sections.map((section, i) => {
            if (section.startsWith('## ')) {
              const heading = section.replace('## ', '')
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#ECE7DE',
                    marginTop: '3rem',
                    marginBottom: '1.25rem',
                    paddingBottom: '0.5rem',
                    borderBottom: `1px solid #252E3D`,
                  }}
                >
                  {heading}
                </h2>
              )
            }

            // First paragraph gets drop cap
            const isFirst = i === 0 || (i === 1 && sections[0].startsWith('## '))
            const isEm = section.startsWith('*') && section.endsWith('*')

            if (isEm) {
              return (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    color: '#ECE7DE',
                    fontSize: '1.05rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {section.replace(/^\*|\*$/g, '')}
                </p>
              )
            }

            return (
              <p
                key={i}
                className={isFirst ? 'drop-cap' : ''}
                style={{ marginBottom: '1.5rem', color: '#A8B2C1', lineHeight: 1.85 }}
              >
                {section}
              </p>
            )
          })}
        </div>
      </div>
    </article>
  )
}
