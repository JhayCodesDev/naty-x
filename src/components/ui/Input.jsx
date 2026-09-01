export default function Input({ label, id, error, textarea, className = '', ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs uppercase tracking-widest2 text-stone mb-2">
          {label}
        </label>
      )}
      <Tag
        id={id}
        className={`input-field ${textarea ? 'min-h-[120px] resize-y' : ''} ${
          error ? 'border-red-500' : ''
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
