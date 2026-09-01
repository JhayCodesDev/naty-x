import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `accordion-panel-${index}`
        const buttonId = `accordion-button-${index}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left font-body normal-case font-semibold text-sm sm:text-base"
              >
                {item.question}
                <Plus
                  size={18}
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-stone leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
