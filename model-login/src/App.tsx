import { useEffect, useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

function App() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(false)
  const [width, height] = useWindowSize()

  // 🎉 Trigger confetti when page loads
  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className='m-5 text-white flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a]'>
      <h1 className='text-3xl font-bold mb-6'>You're currently logged in 🎉</h1>

      <button
        onClick={handleLogout}
        className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md shadow'
      >
        Logout
      </button>

      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  )
}

export default App
