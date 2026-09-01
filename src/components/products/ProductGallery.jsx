import { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1} of ${name}`}
            aria-pressed={active === i}
            className={`shrink-0 w-16 h-20 sm:w-20 sm:h-24 bg-haze overflow-hidden border transition-colors ${
              active === i ? 'border-ink' : 'border-transparent'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div className="flex-1 aspect-[4/5] bg-haze overflow-hidden">
        <img
          src={images[active]}
          alt={name}
          className="w-full h-full object-cover animate-fadeUp"
          key={active}
        />
      </div>
    </div>
  )
}
