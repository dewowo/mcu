import { BookOpen, ChevronRight, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { chronicles } from '../data/chronology'
import { useDrawer } from '../context/DrawerContext'

const PHASES = ['All', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activePhase, setActivePhase] = useState('All')
  const [phaseDropdownOpen, setPhaseDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const { setIsOpen } = useDrawer()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJumpLatest = () => {
    navigate('/chronicle/avengers-doomsday')
  }

  const filteredPhase = (phase) => {
    setActivePhase(phase)
    setPhaseDropdownOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(11,14,20,0.97)' : 'rgba(11,14,20,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #252E3D' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 flex items-center justify-center rounded"
              style={{ backgroundColor: '#E23636', opacity: 0.9 }}
            >
              <BookOpen size={16} className="text-white" />
            </div>
            <div>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE', letterSpacing: '0.15em' }}
              >
                The Multiverse Chronicles
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Phase filter dropdown */}
            <div className="relative">
              <button
                onClick={() => setPhaseDropdownOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-xs uppercase tracking-widest transition-colors"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#A8B2C1',
                  backgroundColor: phaseDropdownOpen ? '#181F2A' : 'transparent',
                }}
              >
                {activePhase}
                <ChevronRight
                  size={12}
                  style={{ transform: phaseDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}
                />
              </button>
              {phaseDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 rounded overflow-hidden shadow-xl z-50 min-w-max"
                  style={{ backgroundColor: '#121820', border: '1px solid #252E3D' }}
                >
                  {PHASES.map((phase) => {
                    const count = phase === 'All'
                      ? chronicles.length
                      : chronicles.filter((c) => c.phase === phase).length
                    return (
                      <button
                        key={phase}
                        onClick={() => filteredPhase(phase)}
                        className="flex items-center justify-between w-full px-4 py-2 text-xs gap-4 transition-colors"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: activePhase === phase ? '#E5A93C' : '#A8B2C1',
                          backgroundColor: activePhase === phase ? 'rgba(229,169,60,0.08)' : 'transparent',
                        }}
                        onMouseEnter={(e) => { if (activePhase !== phase) e.currentTarget.style.backgroundColor = '#181F2A' }}
                        onMouseLeave={(e) => { if (activePhase !== phase) e.currentTarget.style.backgroundColor = 'transparent' }}
                      >
                        <span>{phase}</span>
                        <span style={{ color: '#5C6880' }}>{count}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleJumpLatest}
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-all duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#0B0E14',
                backgroundColor: '#E5A93C',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f0b94d' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E5A93C' }}
            >
              Jump to Latest
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-9 h-9 rounded transition-colors"
              style={{ color: '#A8B2C1' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ECE7DE' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A8B2C1' }}
              aria-label="Open Timeline Drawer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
