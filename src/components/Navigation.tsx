import { Link, useLocation } from './Router';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-[#000080] text-[#fffd6f] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">Terra Nova</div>
            </div>
          </Link>

          <div className="flex gap-8">
            <Link to="/">
              <button className={`pb-2 border-b-2 transition ${isActive('/') ? 'border-[#f04A00]' : 'border-transparent hover:border-[#f04A00]'}`}>
                Accueil
              </button>
            </Link>
            <Link to="/reservation">
              <button className={`pb-2 border-b-2 transition ${isActive('/reservation') ? 'border-[#f04A00]' : 'border-transparent hover:border-[#f04A00]'}`}>
                Reservation
              </button>
            </Link>
            <Link to="/depliant">
              <button className={`pb-2 border-b-2 transition ${isActive('/depliant') ? 'border-[#f04A00]' : 'border-transparent hover:border-[#f04A00]'}`}>
                Depliant
              </button>
            </Link>
            <Link to="/boutique">
              <button className={`pb-2 border-b-2 transition ${isActive('/boutique') ? 'border-[#f04A00]' : 'border-transparent hover:border-[#f04A00]'}`}>
                Boutique
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
