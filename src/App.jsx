import Hero from './components/Hero'
import AboutTimeline from './components/AboutTimeline'
import Pillars from './components/Pillars'
import Portfolio from './components/Portfolio'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-olive-950 text-cream-100 font-sans">
      <CursorGlow />
      <div className="relative">
        <Hero />
        <AboutTimeline />
        <Pillars />
        <Portfolio />
        <Philosophy />
        <Contact />
        <footer className="bg-olive-950/95 border-t border-olive-800 text-center py-10 text-cream-400">
          <p>© {new Date().getFullYear()} Julian Armendano — All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
