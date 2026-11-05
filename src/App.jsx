import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TimelineDrawer from './components/TimelineDrawer'
import { DrawerProvider } from './context/DrawerContext'
import ChronicleePage from './pages/ChroniclePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <div className="min-h-screen" style={{ backgroundColor: '#0B0E14' }}>
          <div id="reading-progress" />
          <Header />
          <TimelineDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chronicle/:slug" element={<ChronicleePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </DrawerProvider>
    </BrowserRouter>
  )
}
