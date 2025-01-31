import { Link } from "react-router-dom"
import LogoLight from "../assets/LogoLightMode.png"


export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-container">
            <img 
              src={LogoLight} 
              alt="EngineeRD Logo" 
              className="footer-logo"
            />
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">About Us</h3>
              <Link to="/about" className="footer-link">Our story</Link>
              <Link to="/" className="footer-link">Services</Link>
              <Link to="/contact" className="footer-link">Contact us</Link>
            </div>
  
            <div className="footer-column">
              <h3 className="footer-title">Follow Us</h3>
              <a href="https://www.linkedin.com/company/engineerd/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/getengineerd/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://x.com/getengineerd" className="footer-link" target="_blank" rel="noopener noreferrer">X</a>
                <a href="https://www.youtube.com/@getengineerd" className="footer-link" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://www.facebook.com/engineerd/" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>            </div>
  
                <div className="footer-column">
                <h3 className="footer-title">Reach Us</h3>
                <p className="footer-subtitle">Location</p>
                <p className="footer-text">3060 Williams Drive, STE 350, Fairfax, VA 22031</p>
                <p className="footer-subtitle">Hours</p>
                <p className="footer-text">Monday - Friday 8am to 5pm</p>
                <p className="footer-subtitle">Contact</p>
                <p className="footer-text">+1 540-555-5858</p>
                <p className="footer-text">solutions@engineerd.com</p>
                </div>
          </div>
        </div>
      </footer>
    )
  }