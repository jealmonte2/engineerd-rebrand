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

export default function ContactForm() {
  const [budget, setBudget] = useState(5000)
  const [status, setStatus] = useState({ type: '', message: '' })

  const formatBudget = (value) => {
    if (value >= 20000) return ">$20,000"
    if (value <= 5000) return "<$5,000"
    return `$${value.toLocaleString()}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Form validation
    const form = e.target
    const requiredFields = form.querySelectorAll('[required]')
    let isValid = true
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false
        setStatus({ type: 'error', message: 'Please fill in all required fields' })
      }
    })

    if (!isValid) return

    const formData = new FormData(form)
    const object = {}
    formData.forEach((value, key) => object[key] = value)
    const json = JSON.stringify(object)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      
      const result = await response.json()
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        form.reset()
        setBudget(5000)
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <section style={{ minHeight: "100vh", padding: "60px 0 30px 0", color: "white" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", marginTop: "30px" }}>
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px", color: "white" }}>
            Ready to bring your vision to life?
          </h2>
          <p style={{ color: "white", fontSize: "1rem", maxWidth: "100%" }}>
            Feel free to contact us via email or fill out our contact form to discuss the details for your upcoming
            project. We're excited to work with you!
          </p>
        </div>

        {status.message && (
          <div style={{
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: status.type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 
                          status.type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 
                          'transparent',
            color: 'white'
          }}>
            {status.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "100%" }}
        >
          <input type="hidden" name="access_key" value="2b07d43f-7835-402f-9569-7397e85be4ff" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />

          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName" style={labelStyle}>First Name</label>
              <input
                id="firstName"
                name="firstName"
                style={inputStyle}
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
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              id="newsUpdates"
              name="newsUpdates"
              style={{
                accentColor: "white",
                width: "16px",
                height: "16px",
              }}
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
            />
          </div>

          <div>
            <label style={labelStyle}>Project Budget: {formatBudget(budget)}</label>
            <input
              type="hidden"
              name="budget"
              value={formatBudget(budget)}
            />
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
  )
}
