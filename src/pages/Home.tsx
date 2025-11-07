import { Link } from '../components/Router';

export function Home() {
  const artists = ['Wamen', 'Lymm', 'PNDEGO', 'Dakeez', 'Asinine', 'Taino', 'Le Dé'];

  return (
    <div className="min-h-screen bg-[#fffd6f]">
      {/* Hero Section */}
      <div className="bg-[#000080] text-[#fffd6f] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">TERRA NOVA</h1>
          <p className="text-2xl text-[#f04A00] mb-8">10 - 13 juillet 2026</p>
          <p className="text-lg mb-6">La Guillotière, Lyon | 16h - 3h</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#000080] mb-6">À propos de Terra Nova</h2>

          <div className="bg-white border-4 border-[#000080] p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#f04A00] mb-4">Radio Terrasse</h3>
            <p className="text-lg text-[#000080] mb-4">
              Terra Nova est un événement de type <strong>radio terrasse</strong>, un concept unique organisé par <strong>Radio Nova</strong>, la radio basée à la Guillotière depuis ses origines.
            </p>
            <p className="text-lg text-[#000080] mb-4">
              Radio Nova a été lancée à la Guillotière, et ce festival incarne les valeurs de la station : liberté, accessibilité et passion pour la musique.
            </p>
            <p className="text-lg text-[#000080]">
              Terra Nova transforme les quais de la Guillotière en un espace de partage où la musique devient accessible à tous, entre le carrousel et le bowl du skate park.
            </p>
          </div>
        </div>

        {/* Artists Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#000080] mb-12 text-center">Artistes</h2>
          <div className="flex flex-col items-center gap-6">
            {artists.map((artist) => (
              <p key={artist} className="text-3xl font-bold text-[#000080]">
                {artist}
              </p>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#000080] mb-8">Infos Pratiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-[#f04A00] p-6">
              <h3 className="text-xl font-bold text-[#f04A00] mb-3">Lieu</h3>
              <p className="text-[#000080]">Les quais de la Guillotière</p>
              <p className="text-[#000080]">Entre le carrousel et le bowl du skate park</p>
              <p className="text-[#000080]">Lyon</p>
            </div>

            <div className="bg-white border-4 border-[#f04A00] p-6">
              <h3 className="text-xl font-bold text-[#f04A00] mb-3">Dates & Horaires</h3>
              <p className="text-[#000080]">Vendredi 10 juillet</p>
              <p className="text-[#000080]">Samedi 11 juillet</p>
              <p className="text-[#000080]">Dimanche 12 juillet</p>
              <p className="text-[#000080]">Lundi 13 juillet</p>
              <p className="text-[#000080] font-bold mt-2">16h - 3h du matin</p>
            </div>

            <div className="bg-white border-4 border-[#f04A00] p-6">
              <h3 className="text-xl font-bold text-[#f04A00] mb-3">Tarif</h3>
              <p className="text-[#000080] text-lg font-bold">Gratuit</p>
              <p className="text-[#000080]">Réservation obligatoire (places limitées)</p>
            </div>

            <div className="bg-white border-4 border-[#f04A00] p-6">
              <h3 className="text-xl font-bold text-[#f04A00] mb-3">Concours</h3>
              <p className="text-[#000080]">Freestyle skate</p>
              <p className="text-[#000080]">Musique</p>
              <p className="text-[#000080] text-sm mt-2">Inscrivez-vous lors de votre réservation !</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          <Link to="/reservation">
            <button className="bg-[#000080] text-[#fffd6f] px-8 py-4 text-xl font-bold rounded-lg hover:bg-[#f04A00] hover:text-[#000080] transition">
              Réserver ta place
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
