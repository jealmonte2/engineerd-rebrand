import { Link } from "react-router-dom"
import { useState } from "react"

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    backgroundColor: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "4px",
    color: "white",
  }
  
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#a0aec0",
  }
  
  const buttonStyle = {
    backgroundColor: "transparent",
    color: "white",
    padding: "8px 16px",
    border: "2px solid white",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s",
  }
  
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    padding: "0.75rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(6, 12, 24, 0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 50,
  }
  
  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontSize: "16px",
    marginLeft: "2rem",
  }
  
  export default function ContactPage() {
    const [budget, setBudget] = useState(5000)
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      newsUpdates: false,
      interests: "",
      message: "",
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData, budget)
    }
  
    const formatBudget = (value) => {
      if (value >= 20000) return ">$20,000"
      if (value <= 5000) return "<$5,000"
      return `$${value.toLocaleString()}`
    }
  
    return (
      <>
        <nav style={navStyle}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoLightMode-B141XZ2n0nRFEI1R7z8RsHci69WlVd.png"
                alt="EngineeRD Logo"
                style={{ height: "1.75rem" }}
                />
            </Link>
            <div>
                <a href="#about" style={navLinkStyle}>
                About
                </a>
                <a href="#services" style={navLinkStyle}>
                Services
                </a>
                <a href="#contact" style={navLinkStyle}>
                Contact
                </a>
            </div>
            </nav>
        <section style={{ minHeight: "100vh", padding: "80px 0 30px 0", color: "white", backgroundColor: "#060c18" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", marginTop: "30px" }}>
            <div style={{ marginBottom: "24px" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px", color: "white" }}>
                Let's bring your business to life.
              </h2>
              <p style={{ color: "white", fontSize: "1rem", maxWidth: "100%" }}>
                Contact us by email or through our form—we're excited to turn your business into an innovation hub!
              </p>
            </div>
  
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "100%" }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="firstName" style={labelStyle}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    style={inputStyle}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="lastName" style={labelStyle}>
                    Last Name <span style={{ color: "#718096" }}>(required)</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    style={inputStyle}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email <span style={{ color: "#718096" }}>(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={inputStyle}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
  
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="checkbox"
                  id="newsUpdates"
                  style={{
                    accentColor: "white",
                    width: "16px",
                    height: "16px",
                  }}
                  onChange={(e) => setFormData({ ...formData, newsUpdates: e.target.checked })}
                />
                <label htmlFor="newsUpdates" style={{ color: "#a0aec0" }}>
                  Sign up for news and updates
                </label>
              </div>
  
              <div>
                <label htmlFor="interests" style={labelStyle}>
                  I'm interested in <span style={{ color: "#718096" }}>(required)</span>
                </label>
                <input
                  id="interests"
                  name="interests"
                  required
                  style={inputStyle}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                />
              </div>
  
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message <span style={{ color: "#718096" }}>(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
  
              <div>
                <label style={labelStyle}>Your Project Budget</label>
                <div style={{ position: "relative", paddingTop: "24px" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: `${((budget - 5000) / 15000) * 100}%`,
                      transform: "translateX(-50%)",
                      backgroundColor: "white",
                      color: "black",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.875rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {formatBudget(budget)}
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="20000"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    style={{
                      width: "100%",
                      accentColor: "white",
                      background: "rgba(255, 255, 255, 0.2)",
                      height: "2px",
                      outline: "none",
                      opacity: "0.7",
                      transition: "opacity 0.2s",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "8px",
                      fontSize: "0.875rem",
                      color: "#a0aec0",
                    }}
                  >
                    <span>{"<$5,000"}</span>
                    <span>{">$20,000"}</span>
                  </div>
                </div>
              </div>
  
              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "white"
                  e.target.style.color = "black"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "white"
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </>
    )
  }
  