import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavCard({ chronicle, direction }) {
  const isNext = direction === 'next'

  return (
    <Link
      to={`/chronicle/${chronicle.slug}`}
      className="group flex flex-col flex-1 rounded overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: '#121820',
        border: '1px solid #252E3D',
        maxWidth: '340px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#E5A93C'
        e.currentTarget.style.backgroundColor = '#181F2A'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#252E3D'
        e.currentTarget.style.backgroundColor = '#121820'
      }}
    >
      <div className={`p-5 flex flex-col h-full ${isNext ? 'items-end text-right' : 'items-start text-left'}`}>
        <div
          className="flex items-center gap-2 mb-3"
          style={{ color: '#5C6880' }}
        >
          {!isNext && <ArrowLeft size={14} />}
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {isNext ? 'Next Chapter' : 'Previous Chapter'}
          </span>
          {isNext && <ArrowRight size={14} />}
        </div>

        <h3
          className="text-base font-semibold leading-snug mb-2 transition-colors"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#A8B2C1',
          }}
        >
          {chronicle.title}
        </h3>

        <p
          className="text-xs mb-3 line-clamp-2"
          style={{ color: '#5C6880' }}
        >
          {chronicle.teaser}
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <span
            className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-sm"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#E5A93C',
              backgroundColor: 'rgba(229,169,60,0.1)',
              border: '1px solid rgba(229,169,60,0.2)',
            }}
          >
            {chronicle.phase}
          </span>
          <span
            className="flex items-center gap-1 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
          >
            <Clock size={10} />
            {chronicle.readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function PaginationBar({ prev, next }) {
  if (!prev && !next) return null

  return (
    <nav
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Chapter navigation"
    >
      <div
        className="pt-10"
        style={{ borderTop: '1px solid #252E3D' }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-6 text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
        >
          Continue the Chronicle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prev ? (
            <NavCard chronicle={prev} direction="prev" />
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <NavCard chronicle={next} direction="next" />
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </nav>
  )
}
