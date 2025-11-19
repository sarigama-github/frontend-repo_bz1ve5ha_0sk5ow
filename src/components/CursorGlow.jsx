import { useEffect, useState } from 'react'

function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e) => {
      const target = e.target
      if (target.closest && target.closest('a, button, [role="button"], input, textarea')) {
        setHover(true)
      } else {
        setHover(false)
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
      aria-hidden
    >
      <div
        style={{
          transform: `translate(${pos.x - 75}px, ${pos.y - 75}px)`,
          transition: 'transform 80ms linear',
          filter: hover ? 'blur(18px)' : 'blur(24px)'
        }}
        className={`h-[150px] w-[150px] rounded-full opacity-30 ${hover ? 'bg-gold-300' : 'bg-gold-200'}`}
      />
    </div>
  )
}

export default CursorGlow
