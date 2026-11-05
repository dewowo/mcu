import { GitBranch, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,240,255,0.06) 0%, #0B0E14 70%)',
      }}
    >
      <div
        className="mb-6 flex items-center justify-center w-16 h-16 rounded-full"
        style={{ backgroundColor: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)' }}
      >
        <GitBranch size={28} style={{ color: '#00F0FF' }} />
      </div>

      <span
        className="text-xs uppercase tracking-widest mb-4"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5C6880' }}
      >
        Temporal Displacement · Error 404
      </span>

      <h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        style={{ fontFamily: "'Cinzel', serif", color: '#ECE7DE', lineHeight: 1.15 }}
      >
        Lost in the<br />
        <span style={{ color: '#00F0FF' }}>Multiverse</span>
      </h1>

      <p
        className="max-w-md text-base mb-10"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: '#A8B2C1',
          fontStyle: 'italic',
          lineHeight: 1.75,
        }}
      >
        The timeline you sought does not exist in this branch of the Sacred Timeline.
        The TVA has been notified — or would have been, had it survived.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded font-medium text-sm transition-all duration-200"
        style={{
          fontFamily: "'Cinzel', serif",
          color: '#0B0E14',
          backgroundColor: '#00F0FF',
          letterSpacing: '0.08em',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#33f4ff' }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#00F0FF' }}
      >
        <Home size={16} />
        Return to the Archive
      </Link>
    </main>
  )
}
