import { useState } from 'react'
import { Sparkles, Heart, Star, Zap } from 'lucide-react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  const closeWelcome = () => {
    setShowWelcome(false)
  }

  return (
    <>
      <div className="fireworks-container">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>
      
      {showWelcome && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-500">
          <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-violet-700 p-8 rounded-3xl text-white shadow-2xl max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 mr-2 animate-pulse" />
              <h1 className="text-3xl font-bold text-center">Welcome!</h1>
              <Sparkles className="w-8 h-8 ml-2 animate-pulse" />
            </div>
            <p className="text-lg mb-6 text-center opacity-90 leading-relaxed">
              Welcome to our amazing React application! Get ready for an incredible experience with beautiful animations and modern design.
            </p>
            <button 
              onClick={closeWelcome}
              className="w-full bg-white/20 border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg"
            >
              <Zap className="w-5 h-5" />
              Let's Get Started!
            </button>
          </div>
        </div>
      )}
      
      <div className="flex justify-center items-center gap-8 mb-8">
        <a 
          href="https://vite.dev" 
          target="_blank"
          className="group transition-transform duration-300 hover:scale-110"
        >
          <img src={viteLogo} className="w-24 h-24 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300" alt="Vite logo" />
        </a>
        <Heart className="w-8 h-8 text-red-500 animate-pulse" />
        <a 
          href="https://react.dev" 
          target="_blank"
          className="group transition-transform duration-300 hover:scale-110"
        >
          <img src={reactLogo} className="w-24 h-24 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 group-hover:animate-spin" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 flex items-center justify-center gap-4">
        <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
        Vite + React
        <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
      </h1>
      
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Click on the Vite and React logos to learn more about these amazing technologies
      </p>
    </>
  )
}

export default App
