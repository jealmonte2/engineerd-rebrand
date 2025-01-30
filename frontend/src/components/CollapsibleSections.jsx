import { useState, useEffect } from "react"
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const sections = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    topics: [
      {
        title: "Technology Stack Assessment",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Process Analysis & Mapping",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "GAPs/Needs/Goals Assessment",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Capability Gap Analysis",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    id: "strategy",
    title: "Strategy & Implementation",
    topics: [
      {
        title: "Solution Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      },
      {
        title: "Implementation Planning",
        description: "Donec in efficitur leo. In hac habitasse platea dictumst. Sed do eiusmod tempor incididunt.",
      },
      {
        title: "Change Management",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "Quality Assurance",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
    ],
  },
  {
    id: "support",
    title: "Continuous Support",
    topics: [
      {
        title: "Implementation Support",
        description:
          "Be reliable, be empowering, and celebrate milestones. We make transformation second nature, seamlessly embedding change into your organization's DNA.",
      },
      {
        title: "Team Enablement",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "Technical Support",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "User Adoption Programs",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      },
    ],
  },
]

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

  const handleSectionChange = (sectionId) => {
    setExpandedSection((prevSection) => (prevSection === sectionId ? null : sectionId))
    if (sectionId) {
      setSelectedTopics((prev) => ({
        ...prev,
        [sectionId]: sections.find((s) => s.id === sectionId)?.topics[0] || prev[sectionId],
      }))
    }
  }

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-xl italic text-muted-foreground text-left">
          "Whether it's ambitious small businesses striving to innovate or industry giants reimagining what's possible,
          we transform visions into reality at any scale..."
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        value={expandedSection || undefined}
        onValueChange={handleSectionChange}
        className="space-y-4"
      >
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border-b border-white/20 py-4 last:border-b-0">
            <button
              onClick={() => handleSectionChange(section.id)}
              className={`w-full text-left pl-[51.5%] text-2xl font-semibold transition-colors ${
                expandedSection === section.id ? "text-white" : "text-white/60"
              }`}
            >
              {section.title}
            </button>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  {section.topics.map((topic) => (
                    <button
                      key={topic.title}
                      onClick={() => setSelectedTopics((prev) => ({ ...prev, [section.id]: topic }))}
                      className={`w-full text-left px-4 py-2 rounded transition-colors
                        ${
                          selectedTopics[section.id]?.title === topic.title
                            ? "text-white"
                            : "text-white/60 hover:text-white"
                        }`}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
                <div className="rounded-lg">
                  <p className="text-white">{selectedTopics[section.id]?.description}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default CollapsibleSections

