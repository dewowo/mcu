import { X, Clock, Filter } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { chronicles } from '../data/chronology'
import { useDrawer } from '../context/DrawerContext'

const PHASE_COLORS = {
  'Phase 1': '#E23636',
  'Phase 2': '#E5A93C',
  'Phase 3': '#00F0FF',
  'Phase 4': '#9b59b6',
  'Phase 5': '#2ecc71',
  'Phase 6': '#ECE7DE',
}

export default function TimelineDrawer() {
  const { isOpen, setIsOpen } = useDrawer()
  const { slug } = useParams()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: 'rgba(11,14,20,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          width: '360px',
          maxWidth: '90vw',
          backgroundColor: '#121820',
          borderLeft: '1px solid #252E3D',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid #252E3D' }}
        >
          <div>
            <h2
              className="text-base font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE', letterSpacing: '0.12em' }}
            >
              Timeline
            </h2>
            <p
              className="text-xs mt-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
            >
              {chronicles.length} Entries · Chronological Order
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded transition-colors"
            style={{ color: '#5C6880' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ECE7DE' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#5C6880' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto py-3">
          {chronicles.map((entry, idx) => {
            const isActive = entry.slug === slug
            const phaseColor = PHASE_COLORS[entry.phase] || '#A8B2C1'
            return (
              <Link
                key={entry.slug}
                to={`/chronicle/${entry.slug}`}
                onClick={() => setIsOpen(false)}
                className="flex items-start gap-4 px-6 py-4 transition-colors group"
                style={{
                  backgroundColor: isActive ? 'rgba(229,169,60,0.08)' : 'transparent',
                  borderLeft: isActive ? '2px solid #E5A93C' : '2px solid transparent',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)' }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {/* Number */}
                <span
                  className="text-xs mt-0.5 shrink-0 w-5 text-right"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isActive ? '#E5A93C' : '#5C6880',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-medium leading-snug truncate"
                    style={{ color: isActive ? '#ECE7DE' : '#A8B2C1' }}
                  >
                    {entry.title}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: phaseColor,
                        opacity: 0.8,
                      }}
                    >
                      {entry.phase}
                    </span>
                    <span style={{ color: '#252E3D' }}>·</span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
                    >
                      {entry.inUniverseDate}
                    </span>
                  </div>
                </div>

                {/* Read time */}
                <div
                  className="flex items-center gap-1 shrink-0 mt-0.5"
                  style={{ color: '#5C6880' }}
                >
                  <Clock size={10} />
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {entry.readTime}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4"
          style={{ borderTop: '1px solid #252E3D' }}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded text-xs uppercase tracking-widest transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#A8B2C1',
              border: '1px solid #252E3D',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E5A93C'; e.currentTarget.style.color = '#E5A93C' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#252E3D'; e.currentTarget.style.color = '#A8B2C1' }}
          >
            <Filter size={12} />
            Return to Prologue
          </Link>
        </div>
      </div>
    </>
  )
}
