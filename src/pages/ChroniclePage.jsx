import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PaginationBar from '../components/PaginationBar'
import StoryArticle from '../components/StoryArticle'
import { getAdjacentChronicles, getChronicleBySlug } from '../data/chronology'

function useReadingProgress() {
  useEffect(() => {
    const el = document.getElementById('reading-progress')
    if (!el) return
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      el.style.width = `${progress}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
}

export default function ChronicleePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const chronicle = getChronicleBySlug(slug)
  const { prev, next } = chronicle ? getAdjacentChronicles(slug) : { prev: null, next: null }

  useReadingProgress()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (chronicle) {
      document.title = `${chronicle.title} · The Multiverse Chronicles`
    }
    return () => { document.title = 'The Multiverse Chronicles' }
  }, [chronicle])

  if (!chronicle) {
    navigate('*', { replace: true })
    return null
  }

  return (
    <main
      className="min-h-screen transition-opacity duration-300"
      style={{ opacity: 1 }}
    >
      <StoryArticle chronicle={chronicle} />
      <PaginationBar prev={prev} next={next} />
    </main>
  )
}
