import React, { useState, useEffect } from "react"

const sections = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    topics: [
      {
        title: "Technology Stack Assessment",
        description: "Evaluate current tech stack and identify improvement areas.",
      },
      {
        title: "Process Analysis & Mapping",
        description: "Map out processes to optimize workflows and efficiency.",
      },
      {
        title: "GAPs/Needs/Goals Assessment",
        description: "Identify gaps between current state and desired outcomes.",
      },
      {
        title: "Capability Gap Analysis",
        description: "Analyze capabilities to align with strategic objectives.",
      },
    ],
  },
  {
    id: "strategy",
    title: "Strategy & Implementation",
    topics: [
      {
        title: "Solution Design",
        description: "Create tailored solutions to address identified needs.",
      },
      {
        title: "Implementation Planning",
        description: "Develop comprehensive plans for smooth execution.",
      },
      {
        title: "Change Management",
        description: "Guide organizations through transitions effectively.",
      },
      {
        title: "Quality Assurance",
        description: "Ensure high standards throughout implementation.",
      },
    ],
  },
  {
    id: "support",
    title: "Continuous Support",
    topics: [
      {
        title: "Implementation Support",
        description: "Provide ongoing assistance during deployment phases.",
      },
      {
        title: "Team Enablement",
        description: "Empower teams with necessary skills and knowledge.",
      },
      {
        title: "Performance Monitoring",
        description: "Track and optimize solution performance continuously.",
      },
      {
        title: "Technical Support",
        description: "Offer responsive support for technical issues.",
      },
      {
        title: "User Adoption Programs",
        description: "Facilitate user adoption through targeted programs.",
      },
    ],
  },
]

const dividerStyle = {
  width: "100%",
  height: "1px",
  background: "rgba(255, 255, 255, 0.2)",
  margin: "0.1rem 0",
  position: "relative",
}

function CollapsibleSections() {
  const [selectedTopics, setSelectedTopics] = useState({})
  const [expandedSection, setExpandedSection] = useState(null)

  useEffect(() => {
    const initialSelectedTopics = {}
    sections.forEach((section) => {
      initialSelectedTopics[section.id] = section.topics[0]
    })
    setSelectedTopics(initialSelectedTopics)
  }, [])

  const handleSectionToggle = (sectionId) => {
    setExpandedSection((prevSection) => (prevSection === sectionId ? null : sectionId))
  }

  const handleTopicSelect = (sectionId, topic) => {
    setSelectedTopics((prev) => ({
      ...prev,
      [sectionId]: topic,
    }))
  }

  return (
    <div
      className="accordion-section"
      style={{ overflow: "hidden", width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <p className="quote-text">
        "Whether it's ambitious small businesses striving to innovate or industry giants reimagining what's possible, we
        transform visions into reality at any scale..."
      </p>

      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          <div
            className="accordion-item"
            style={{
              marginBottom: "0.3rem",
              ...(section.id === "strategy" ? { marginTop: "0.7rem" } : {}),
            }}
          >
            <button
              className="accordion-button"
              onClick={() => handleSectionToggle(section.id)}
              aria-expanded={expandedSection === section.id}
              style={{ padding: "0.5rem 0" }}
            >
              {section.title}
            </button>
            <div className={`accordion-content ${expandedSection === section.id ? "expanded" : ""}`}>
              <div className="topic-list">
                {section.topics.map((topic) => (
                  <button
                    key={topic.title}
                    className={`topic-button ${selectedTopics[section.id]?.title === topic.title ? "active" : ""}`}
                    onClick={() => handleTopicSelect(section.id, topic)}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
              <div className="topic-description">
                <p>{selectedTopics[section.id]?.description}</p>
              </div>
            </div>
          </div>
          {(index === 0 || index === 1) && <div style={dividerStyle}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CollapsibleSections

