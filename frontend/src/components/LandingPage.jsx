import { useEffect, useRef } from "react"
import styles from "/src/styles/LavaLamp.module.css"

export default function NewLandingPage() {
  const sections = useRef([])

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault()
      const delta = e.deltaY
      const currentSection = Math.round(window.scrollY / window.innerHeight)
      const nextSection = delta > 0 ? currentSection + 1 : currentSection - 1

      if (nextSection >= 0 && nextSection < sections.current.length) {
        sections.current[nextSection].scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("wheel", handleScroll, { passive: false })
    return () => window.removeEventListener("wheel", handleScroll)
  }, [])

  const renderBlobs = (startPercentage, endPercentage) => {
    const blobs = []
    for (let i = 1; i <= 10; i++) {
      const top = startPercentage + Math.random() * (endPercentage - startPercentage)
      const left = Math.random() * 100
      blobs.push(
        <div
          key={`red-${startPercentage}-${i}`}
          className={`${styles.blob} ${styles[`blob${i}`]} ${styles.blobRed}`}
          style={{ top: `${top}%`, left: `${left}%` }}
        />,
        <div
          key={`blue-${startPercentage}-${i}`}
          className={`${styles.blob} ${styles[`blob${i}`]} ${styles.blobBlue}`}
          style={{ top: `${top + 5}%`, left: `${(left + 50) % 100}%` }}
        />,
      )
    }
    return blobs
  }

  return (
    <div className="relative">
      <div className={styles.background}>
        {renderBlobs(0, 25)}
        {renderBlobs(25, 50)}
        {renderBlobs(50, 75)}
        {renderBlobs(75, 100)}
      </div>
      <div className={styles.overlay} />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
          alt="EngineRD Logo"
          className="h-8"
        />
        <div className="flex gap-8 text-white">
          <a href="#home" className="hover:text-red-500">
            HOME
          </a>
          <a href="#services" className="hover:text-red-500">
            SERVICES
          </a>
          <a href="#contact" className="hover:text-red-500">
            CONTACT
          </a>
        </div>
      </nav>

      <section
        ref={(el) => (sections.current[0] = el)}
        className="h-screen flex flex-col items-center justify-center text-white"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
          alt="EngineRD Logo Large"
          className="w-96 mb-8"
        />
        <p className="text-lg text-center max-w-3xl mx-auto opacity-80">Think big. Transform data to wisdom.</p>
      </section>

      <section
        ref={(el) => (sections.current[1] = el)}
        className="h-screen flex flex-col items-center justify-center text-white px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-12">
            As a certified 8a, FCL, HUBZone, Small Business, and DBE, we combine the power of our Microsoft ISV
            partnership with a deep commitment to design thinking, systems thinking, and agile methodologies. Our team
            focuses on delivering innovative solutions that help you and your team continually streamline operations and
            adopt cutting-edge Microsoft technologies that deliver real results.
          </p>
          <p className="text-lg">
            We bring a holistic approach to solving challenges, blending creative problem-solving with system-wide
            insights to ensure your organization is agile, efficient, and ready to adapt. Whether it's accelerating
            processes, enhancing customer experiences, or driving operational excellence, we're here to help you lead
            the way. Together, we'll make technology work smarter for you.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sections.current[2] = el)}
        className="h-screen flex flex-col justify-center text-white px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Industries We Serve</h2>
          <div className="flex flex-col space-y-4 mb-16">
            {[
              "Government and Public Sector",
              "Real Estate (Commercial & residential)",
              "Healthcare",
              "Education / Training",
              "Event Management",
              "Human Resources and Recruitment",
              "Professional Services",
            ].map((industry, index, array) => (
              <div key={industry} className="group">
                <div className="flex items-center justify-between py-4">
                  <span className="text-lg">{industry}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">→</button>
                </div>
                {index !== array.length - 1 && <div className="h-px bg-gray-700" />}
              </div>
            ))}
          </div>

          <h2 className="text-3xl mb-8">Our Partners</h2>
          <div className={styles.partnerScroll}>
            <div className={styles.partnerContainer}>
              {[
                { name: "Microsoft", logo: "/placeholder.svg" },
                { name: "George Mason University", logo: "/placeholder.svg" },
                { name: "Adobe", logo: "/placeholder.svg" },
                { name: "ATL", logo: "/placeholder.svg" },
                // Duplicate for infinite scroll
                { name: "Microsoft", logo: "/placeholder.svg" },
                { name: "George Mason University", logo: "/placeholder.svg" },
                { name: "Adobe", logo: "/placeholder.svg" },
                { name: "ATL", logo: "/placeholder.svg" },
              ].map((partner, index) => (
                <div key={index} className="inline-block bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sections.current[3] = el)}
        className="h-screen flex flex-col items-center justify-center text-white px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Discovery & Assessment</h2>
          <p className="text-lg mb-8">
            "Whether it's ambitious small businesses striving to innovate or industry giants reimagining what's
            possible, we transform visions into reality every time."
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Digital Maturity Evaluation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Technology Stack Assessment</li>
                <li>Process Analysis & Mapping</li>
                <li>GAPs/Needs/Goals Assessment</li>
                <li>Capability Gap Analysis</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300">
                Be online, be automated, and process the essentials. Discovery starts with right sizing and growth
                opportunities, fighting through the noise to find the signal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

