import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import ContactForm from "./ContactForm"
import "../styles/ContactPage.css"

export default function ContactPage() {
  const blobsRef = useRef([])

  useEffect(() => {
    const animateBlobs = () => {
      blobsRef.current.forEach((blob) => {
        if (blob) {
          const newY = Math.random() * window.innerHeight
          const newX = Math.random() * window.innerWidth
          const scale = 0.8 + Math.random() * 0.4
          blob.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`
        }
      })
    }

    const interval = setInterval(animateBlobs, 3000)
    animateBlobs()

    return () => clearInterval(interval)
  }, [])

  const renderBlobs = () => {
    const blobs = []
    for (let i = 0; i < 5; i++) {
      blobs.push(
        <div
          key={`red-${i}`}
          ref={(el) => (blobsRef.current[i * 2] = el)}
          className="lava-blob lava-blob-red"
          style={{
            width: "300px",
            height: "300px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + i}s infinite ease-in-out`,
          }}
        />,
        <div
          key={`blue-${i}`}
          ref={(el) => (blobsRef.current[i * 2 + 1] = el)}
          className="lava-blob lava-blob-blue"
          style={{
            width: "300px",
            height: "300px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + i}s infinite ease-in-out`,
          }}
        />,
      )
    }
    return blobs
  }

  return (
    <div className="contact-page">
      <div className="lava-background">{renderBlobs()}</div>
      <div className="lava-overlay" />

      <nav className="nav">
        <Link to="/">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
            alt="EngineeRD Logo"
            className="nav-logo"
          />
        </Link>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>

      <div className="contact-content">
        <h1 className="contact-title">Let's bring your business to life.</h1>
        <p className="contact-subtitle">
          Contact us by email or through our form—we're excited to turn your business into an innovation hub!
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

