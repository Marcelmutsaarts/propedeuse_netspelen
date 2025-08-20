import { FileText } from 'lucide-react'

function Assignments() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Opdrachten</h1>
        <p className="text-gray-600">
          Hier kunnen opdrachten worden toegevoegd door docenten
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <FileText size={48} className="text-blue-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Geen opdrachten beschikbaar</h2>
        <p className="text-gray-600">
          Er zijn momenteel geen actieve opdrachten.
        </p>
      </div>
    </div>
  )
}

export default Assignments