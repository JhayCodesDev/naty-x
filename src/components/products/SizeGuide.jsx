import Modal from '../ui/Modal.jsx'

const ROWS = [
  { size: 'S', chest: '92–97', length: '68', shoulder: '44' },
  { size: 'M', chest: '98–103', length: '70', shoulder: '46' },
  { size: 'L', chest: '104–109', length: '72', shoulder: '48' },
  { size: 'XL', chest: '110–115', length: '74', shoulder: '50' },
  { size: 'XXL', chest: '116–121', length: '76', shoulder: '52' },
]

export default function SizeGuide({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Size Guide">
      <p className="text-sm text-stone mb-5">
        Measurements are in centimetres. For an oversized fit, we recommend sizing down if you prefer a
        closer fit through the body.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-widest2 text-stone">
              <th className="py-2 pr-4">Size</th>
              <th className="py-2 pr-4">Chest (cm)</th>
              <th className="py-2 pr-4">Length (cm)</th>
              <th className="py-2">Shoulder (cm)</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.size} className="border-b border-line">
                <td className="py-2.5 pr-4 font-semibold">{row.size}</td>
                <td className="py-2.5 pr-4 text-stone">{row.chest}</td>
                <td className="py-2.5 pr-4 text-stone">{row.length}</td>
                <td className="py-2.5 text-stone">{row.shoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  )
}
