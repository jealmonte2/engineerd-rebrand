import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "../styles/LavaLamp.css"
import CollapsibleSections from "./CollapsibleSections.jsx"
import Testimonials from "./Testimonials"
import ContactForm from "./ContactForm"

export default function NewLandingPage() {
  const sections = useRef([])
  const blobsRef = useRef([])
  const whyChooseRef = useRef(null)

  useEffect(() => {
    const container = document.querySelector(".scroll-container")

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

    // Lava lamp effect
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

    // Intersection Observer for Why Choose Us section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".why-choose-item").forEach((item, index) => {
              item.style.animationDelay = `${0.1 * (index + 1)}s`
              item.style.animationPlayState = "running"
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current)
    }

    return () => {
      container.removeEventListener("wheel", handleScroll)
      clearInterval(interval)
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current)
      }
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

  return (
    <div className="scroll-container">
      <div className="lava-background">{renderBlobs()}</div>
      <div className="lava-overlay" />

      <nav className="nav">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
          alt="EngineeRD Logo"
          className="nav-logo"
        />
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

      <section ref={(el) => (sections.current[0] = el)} className="section logo-section">
        <div className="container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
            alt="EngineeRD Logo Large"
            className="logo-large"
          />
          <p>Think big. Transform data to wisdom.</p>
        </div>
      </section>

      <section ref={(el) => (sections.current[1] = el)} className="section">
        <div className="container">
          <div className="content-section">
            <p>
              We're a certified small business (8a, FCL, HUBZone, DBE) and Microsoft ISV partner specializing in process
              improvement through design thinking and agile methods. We help organizations streamline operations and
              implement Microsoft solutions for better efficiency and adaptability.
            </p>
            <div className="button-container">
              <Link to="/contact" className="action-button">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r1Hia5zeuN6XtDh5fgLFvTsgn3NBhp.png"
                  alt="Let's Connect"
                  className="default-image"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0RZ4ez1KBwO8KcxtdiefuY84K5Ge4s.png"
                  alt="Let's Connect"
                  className="hover-image"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sections.current[2] = el)} className="section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-list">
            {[
              "Government and Public Sector",
              "Real Estate (commercial & residential)",
              "Healthcare",
              "Education / Training",
              "Event Management",
              "Human Resources and Recruitment",
              "Professional Services",
            ].map((industry, index) => (
              <div key={industry} className="industry-item">
                {industry}
              </div>
            ))}
          </div>
          <div className="button-container-left">
            <button className="action-button">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vSP9lBcxVBaIOQVVL2bcXJg0cSDulj.png"
                alt="Explore More"
                className="default-image"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2ceWmIKDLOiCFOOvLTgz6QR8lnsYhd.png"
                alt="Explore More"
                className="hover-image"
              />
            </button>
          </div>
        </div>
      </section>

      <section ref={(el) => (sections.current[3] = el)} className="section">
        <div className="container">
          <div className="partners-section">
            <h2 className="section-title partners-title">Our Partners</h2>
            <div className="partners-scroll">
              <div className="partners-container">
                {[
                  {
                    name: "Microsoft",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TNvZd2TI1n05elfEkAbt16AwfpKtPr.png",
                  },
                  {
                    name: "George Mason University",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-etGakTWHhVl62R8bL9key76vl0H81D.png",
                  },
                  {
                    name: "Adobe",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe_Corporate_logo.svg-Photoroom-Hq07CWHQdon5sGyUb4Nhsgi1bde8fv.png",
                  },
                  {
                    name: "Atlassian",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlassian-Logo-Photoroom-XttJpWKD7H3hb1zjgge74nAjyXbXmY.png",
                  },
                ]
                  .concat([
                    {
                      name: "Microsoft",
                      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TNvZd2TI1n05elfEkAbt16AwfpKtPr.png",
                    },
                    {
                      name: "George Mason University",
                      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-etGakTWHhVl62R8bL9key76vl0H81D.png",
                    },
                    {
                      name: "Adobe",
                      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe_Corporate_logo.svg-Photoroom-Hq07CWHQdon5sGyUb4Nhsgi1bde8fv.png",
                    },
                    {
                      name: "Atlassian",
                      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atlassian-Logo-Photoroom-XttJpWKD7H3hb1zjgge74nAjyXbXmY.png",
                    },
                  ])
                  .map((partner, index) => (
                    <div key={`${partner.name}-${index}`} className="partner-item">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className={`partner-logo ${partner.name === "Atlassian" ? "partner-logo-atlassian" : ""}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <CollapsibleSections />
        </div>
      </section>

      <section ref={(el) => (sections.current[4] = el)} className="section">
        <div className="container">
          <div className="why-choose-and-testimonials">
            <div className="why-choose-section" ref={whyChooseRef}>
              <h2 className="section-title">Why Choose Us?</h2>
              <div className="why-choose-grid">
                <div
                  className="why-choose-item"
                  style={{
                    "--bg-image": `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1hOm1Jjyf0RDnzkniu9qAqutfEMtez.png)`,
                  }}
                >
                  <div className="item-content">
                    <span className="item-number">01</span>
                    <h3 className="item-title">Public Sector Experience</h3>
                    <p className="item-description">
                      Two decades of government experience, with comprehensive knowledge of the DoD ecosystem and
                      operations.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item"
                  style={{
                    "--bg-image": `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yZlJcR66z7HwHnOWfpFlyLjROdCK2L.png)`,
                  }}
                >
                  <div className="item-content">
                    <span className="item-number">02</span>
                    <h3 className="item-title">Modernizing Work</h3>
                    <p className="item-description">
                      Optimizing legacy systems and implementing AI-driven solutions to enhance efficiency and reduce
                      costs.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item"
                  style={{
                    "--bg-image": `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zH0CBkV6zptc0z9Ya68vWXUAof60uO.png)`,
                  }}
                >
                  <div className="item-content">
                    <span className="item-number">03</span>
                    <h3 className="item-title">Re-Imagining Healthcare</h3>
                    <p className="item-description">
                      Using data analytics, AI, and secure systems to improve care delivery and support public health.
                    </p>
                  </div>
                </div>
                <div
                  className="why-choose-item"
                  style={{
                    "--bg-image": `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GpaRpEvg1asEFO7Wb5V6uvWK802cab.png)`,
                  }}
                >
                  <div className="item-content">
                    <span className="item-number">04</span>
                    <h3 className="item-title">Forensic Methodology</h3>
                    <p className="item-description">
                      Applying systematic, evidence-based analysis to reveal hidden patterns and transform operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Testimonials />
          </div>
        </div>
      </section>
      <section ref={(el) => (sections.current[5] = el)} className="section">
        <ContactForm />
      </section>
    </div>
  )
}

