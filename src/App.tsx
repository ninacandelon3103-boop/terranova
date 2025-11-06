import { Router, useLocation } from './components/Router';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Reservation } from './pages/Reservation';
import { Depliant } from './pages/Depliant';
import { Boutique } from './pages/Boutique';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#fffd6f]">
      <Navigation />
      {location === '/' && <Home />}
      {location === '/reservation' && <Reservation />}
      {location === '/depliant' && <Depliant />}
      {location === '/boutique' && <Boutique />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
