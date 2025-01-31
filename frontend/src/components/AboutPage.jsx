import { Link } from "react-router-dom"
import "../styles/AboutPage.css"
import TeamPic from "../assets/EngineeRDTeam.png"
import { useEffect, useRef } from "react"
import "../styles/LavaLamp.css"
import ContactForm from "./ContactForm"

export default function AboutPage() {
  const sections = useRef([])
  const blobsRef = useRef([])

  const headshots = import.meta.glob('../assets/EngineeRDHeadshots/*.{jpg,jpeg,png,JPEG}', { eager: true })
  
  useEffect(() => {
    const container = document.querySelector(".about-scroll-container")

    const handleScroll = (e) => {
      const delta = e.deltaY
      const currentScroll = container.scrollTop
      const sectionHeight = window.innerHeight

      const targetSection =
        delta > 0
          ? Math.ceil(currentScroll / sectionHeight) * sectionHeight
          : Math.floor(currentScroll / sectionHeight) * sectionHeight

      container.scrollTo({
        top: targetSection,
        behavior: "smooth",
      })
    }

    container.addEventListener("wheel", handleScroll, { passive: false })

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

    return () => {
      container.removeEventListener("wheel", handleScroll)
      clearInterval(interval)
    }
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

  const getHeadshotPath = (filename) => {
    const path = Object.keys(headshots).find(path => path.includes(filename))
    return path ? headshots[path].default : null
  }

  return (
    <div className="about-scroll-container">
      <div className="lava-background">{renderBlobs()}</div>
      <div className="lava-overlay" />

      <nav className="nav">
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
            alt="EngineeRD Logo"
            style={{ height: "1.75rem" }}
          />
        </Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <a href="#services" className="nav-link">
            Services
          </a>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>

      <section ref={(el) => (sections.current[0] = el)} className="about-section">
        <div className="about-container">
          <h1 className="about-title">Crafting Tailored Solutions to Empower Your Business</h1>
          <div className="about-image-container">
            <img src={TeamPic} alt="EngineeRD Team" className="about-hero-image" />
          </div>
        </div>
      </section>

      <section ref={(el) => (sections.current[1] = el)} className="about-section">
        <div className="about-container">
          <div className="about-content">
            <p className="about-description">
              EngineeRD is a Fairfax-based consulting firm founded in 2019. We combine engineering, science, and technology
              expertise to solve complex challenges through digital transformation, AI/ML, and process improvement. Our
              services include custom workshops, facilitation, and CoPilot agents to help organizations become data-driven
              and future-ready.
            </p>
            <div className="button-container-left">
              <Link to="/contact" className="action-button">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r1Hia5zeuN6XtDh5fgLFvTsgn3NBhp.png"
                  alt="Connect with us"
                  className="default-image"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0RZ4ez1KBwO8KcxtdiefuY84K5Ge4s.png"
                  alt="Connect with us"
                  className="hover-image"
                />
              </Link>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <h3>+4 years</h3>
                <p>of experience</p>
              </div>
              <div className="stat-item">
                <h3>+50</h3>
                <p>Successful projects</p>
              </div>
              <div className="stat-item">
                <h3>+30</h3>
                <p>Satisfied clients</p>
              </div>
              <div className="stat-item">
                <h3>+10</h3>
                <p>Industry partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sections.current[2] = el)} className="about-section">
        <div className="about-container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
          {[
            { name: "Rehan Mahmood", title: "Founder & CEO", image: "RehanHeadshot" },
            { name: "Allen Salazar", title: "SVP Operations | Product", image: "AllenHeadshot" },
            { name: "Alex Wasiewlewski", title: "Solutions Engineer", image: "AlexHeadshot" },
            { name: "Theodor Axelson", title: "Data Solutions Engineer", image: "TheoHeadshot" },
            { name: "Sergio Saenz", title: "AI/ML Lead Software Engineer", image: "SergioHeadshot" },
            { name: "Dr. Brian Ngac", title: "Principal Investigator Advisor", image: "BrianHeadshot" },
            { name: "Tiffany Ho", title: "Data Analyst XRM Dev.", image: "TiffannyHeadshot" },
            { name: "Sayeed Akhtar", title: "Business Dev.\nCompliance", image: "SayeedHeadshot" },
            { name: "Sara Mirza", title: "Automation Engineer", image: "SaraHeadshot" },
            { name: "Rohan Pinto", title: "User Experience User Interface", image: "RohanHeadshot" },
            ].map((member, index) => (
            <div key={index} className="team-card">
                <div className="team-image-container">
                <img
                    src={getHeadshotPath(member.image)}
                    alt={member.name}
                    className="team-image"
                />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={(el) => (sections.current[3] = el)} className="about-section">
        <div className="about-container">
            <h2 className="section-title">Our Interns</h2>
            <div className="team-grid">
            {[
                { name: "Joshua Almonte", title: "Software Engineer", image: "JoshHeadshot" },
                { name: "Hala Nakhlawi", title: "User Interface Graphic Designer", image: "HalaHeadshot" },
                { name: "Venice Chan", title: "User Experience Researcher", image: "VeniceHeadshot" },
            ].map((intern, index) => (
                <div key={index} className="team-card">
                <div className="team-image-container">
                    <img
                    src={getHeadshotPath(intern.image)}
                    alt={intern.name}
                    className="team-image"
                    />
                </div>
                <h3 className="team-name">{intern.name}</h3>
                <p className="team-title">{intern.title}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

      <section ref={(el) => (sections.current[4] = el)} className="about-section contact-section">
        <ContactForm />
      </section>
    </div>
  )
}
