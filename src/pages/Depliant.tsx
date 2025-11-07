export function Depliant() {
  return (
    <div className="min-h-screen bg-[#fffd6f] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#000080] mb-2 text-center">Dépliant & Carte</h1>
          <p className="text-center text-[#f04A00] font-bold mb-12">Programmation complète et plan du festival</p>

          {/* Placeholder */}
          <div className="bg-white border-4 border-[#000080] rounded-lg p-12 mb-8 text-center">
            <div className="bg-gray-100 border-2 border-dashed border-[#000080] rounded-lg p-16">
              <p className="text-2xl text-[#000080] font-bold mb-4">Le dépliant et la carte</p>
              <p className="text-lg text-[#000080]">seront disponibles très bientôt</p>
            </div>
          </div>

          {/* Info */}
          <div className="bg-white border-4 border-[#f04A00] rounded-lg p-8 text-center">
            <p className="text-lg text-[#000080] mb-4">
              Le dépliant contient la <strong>programmation complète</strong> et la <strong>carte du festival</strong>.
            </p>
            <p className="text-[#000080]">
              Reviens consulter cette page pour découvrir les horaires exacts de chaque artiste !
            </p>
          </div>

          {/* Download Section */}
          <div className="mt-12 text-center">
            <button
              disabled
              className="bg-gray-300 text-gray-600 px-8 py-4 text-lg font-bold rounded-lg cursor-not-allowed"
            >
              Télécharger le dépliant (bientôt disponible)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
