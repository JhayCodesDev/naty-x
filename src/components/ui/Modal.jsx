import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 animate-fadeUp"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto bg-paper p-6 sm:p-8 animate-fadeUp"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          {title && <h3 className="text-lg tracking-wide">{title}</h3>}
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 p-1 hover:opacity-60 transition-opacity"
          >
            <X size={22} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
