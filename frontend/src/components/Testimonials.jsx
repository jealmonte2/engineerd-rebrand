"use client"

import { useState } from "react"

const testimonials = [
  {
    quote:
      "Since completing our Digital Transformation, our communication has drastically improved and efficiency has improved 10-fold.",
    author: "Sharon Jones",
    title: "Director DISA",
  },
  {
    quote:
      "The team's expertise in Microsoft solutions helped us streamline our operations and reduce costs significantly.",
    author: "Michael Chen",
    title: "CTO, Healthcare Solutions",
  },
  {
    quote: "Their forensic methodology uncovered insights that transformed our decision-making process.",
    author: "Amanda Rodriguez",
    title: "Operations Director",
  },
  {
    quote: "EngineeRD's innovative approach to process improvement has revolutionized our workflow.",
    author: "David Smith",
    title: "CEO, Tech Innovations",
  },
  {
    quote: "The level of detail in their analysis is unparalleled. It's been a game-changer for our organization.",
    author: "Emily Watson",
    title: "Head of Operations, Government Agency",
  },
  {
    quote: "Their ability to adapt Microsoft solutions to our unique needs has greatly enhanced our productivity.",
    author: "Robert Lee",
    title: "IT Director, Education Sector",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getTestimonial = (index) => {
    const wrappedIndex = index % testimonials.length
    return (
      <div key={wrappedIndex} className="testimonial-content">
        <p className="testimonial-quote">"{testimonials[wrappedIndex].quote}"</p>
        <div className="testimonial-author">
          <span className="author-name">{testimonials[wrappedIndex].author}</span>
          <span className="author-title">, {testimonials[wrappedIndex].title}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="testimonials-section">
      <h2 className="section-title">What Clients Are Saying</h2>
      <div className="testimonial-container" style={{ height: "100%" }}>
        <div className="testimonial-grid">
          {getTestimonial(currentIndex)}
          {getTestimonial(currentIndex + 1)}
        </div>
        <div className="testimonial-navigation">
          <button onClick={prevTestimonial} className="nav-button">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qUzaSTeSJyU8282LvNo2nveD9gqbwR.png"
              alt="Previous"
            />
          </button>
          <button onClick={nextTestimonial} className="nav-button">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rVxPFpggdZypCekQBh3dKrYjokjrIi.png"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

