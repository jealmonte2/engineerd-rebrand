"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { ChevronDown } from "lucide-react"
import styles from "./IntroAnimation.module.css"
import LetterE from '../assets/EngineeRDLetters/LetterE.png'
import LetterN from '../assets/EngineeRDLetters/LetterN.png'
import LetterG from '../assets/EngineeRDLetters/LetterG.png'
import LetterI from '../assets/EngineeRDLetters/LetterI.png'
import LetterELower from '../assets/EngineeRDLetters/LetterELower.png'
import LetterR from '../assets/EngineeRDLetters/LetterR.png'
import LetterD from '../assets/EngineeRDLetters/LetterD.png'
import LogoGear from '../assets/EngineeRDLogoGear.png'

const LETTERS = [
    {
      src: LetterE,
      alt: "E",
      className: styles.letterLarge,
    },
    {
      src: LetterN,
      alt: "N",
      className: styles.letterN,
    },
    {
      src: LetterN,
      alt: "N",
      className: styles.letterN,
    },
    {
      src: LetterG,
      alt: "G",
      className: styles.letterG,
    },
    {
      src: LetterI,
      alt: "I",
      className: styles.letterI,
    },
    {
      src: LetterN,
      alt: "N",
      className: styles.letterN,
    },
    {
      src: LetterELower,
      alt: "e",
      className: styles.letterSmall,
    },
    {
      src: LetterELower,
      alt: "e",
      className: styles.letterSmall,
    },
    {
      src: LetterR,
      alt: "R",
      className: styles.letterLarge,
    },
    {
      src: LetterD,
      alt: "D",
      className: styles.letterLarge,
    },
]

const IntroAnimation = ({ onComplete }) => {
    const [visibleLetters, setVisibleLetters] = useState([])
    const [showGear, setShowGear] = useState(false)
    const [showChevron, setShowChevron] = useState(false)
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)
    const [showSlogan, setShowSlogan] = useState(false)
    const [cursorPosition, setCursorPosition] = useState(0)
  
    useEffect(() => {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < LETTERS.length) {
          setVisibleLetters((prev) => [...prev, LETTERS[currentIndex]])
          setCursorPosition((prev) => prev + (currentIndex === 0 ? 0 : 30))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setShowGear(true)
          setTimeout(() => setShowSlogan(true), 2000)
        }
      }, 150)
  
      return () => clearInterval(typingInterval)
    }, [])
  
    return (
      <div className={`${styles.container} ${isAnimationComplete ? styles.containerCompleted : ""}`}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <div className={styles.letters}>
              {showGear && (
                <motion.img
                  src={LogoGear}
                  alt="Gear"
                  className={styles.gear}
                  initial={{ 
                    opacity: 0, 
                    x: "-100%", 
                    rotate: -180 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    rotate: 180 
                  }}
                  transition={{
                    duration: 1.2,
                    opacity: { duration: 0.3 },
                    rotate: { 
                      duration: 1.2,
                      ease: "linear" 
                    }
                  }}
                  onAnimationComplete={() => {
                    setIsAnimationComplete(true)
                    setTimeout(() => setShowChevron(true), 500)
                  }}
                />
              )}
              {visibleLetters.map((letter, index) => (
                letter && letter.src ? (
                  <motion.img
                    key={index}
                    src={letter.src}
                    alt={letter.alt}
                    className={`${styles.letter} ${letter.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : null
              ))}
              <motion.div 
                className={styles.cursor}
                animate={{
                  left: `${cursorPosition}px`,
                  opacity: isAnimationComplete ? [1, 0] : 1
                }}
                transition={{
                  left: { duration: 0.1 },
                  opacity: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                }}
              />
            </div>
            {showSlogan && (
              <motion.div
                className={styles.sloganContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className={styles.slogan}>
                  THINK BIG. DREAM BIGGER. SAVE THE WORLD
                </span>
              </motion.div>
            )}
          </div>
        </div>
        {showChevron && (
          <motion.div
            className={styles.chevronContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onComplete}
          >
            <ChevronDown className={styles.chevron} size={32} />
          </motion.div>
        )}
      </div>
    )
}

export default IntroAnimation
