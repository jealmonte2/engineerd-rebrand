import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroAnimation from "./components/IntroAnimation"
import LandingPage from "./components/LandingPage"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/100.css"

import "./index.css"

import "./App.css"

function App() {
  const [showMain, setShowMain] = useState(false)

  return (
    <div className="min-h-screen w-full overflow-hidden overflow-y-hidden">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            className="min-h-screen w-full flex flex-col items-center justify-center"
          >
            <IntroAnimation onComplete={() => setShowMain(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <LandingPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
