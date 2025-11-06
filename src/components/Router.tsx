import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

type LocationContextType = string;

const LocationContext = createContext<LocationContextType>('/');

export function useLocation() {
  return useContext(LocationContext);
}

export function Link({ to, children }: { to: string; children: ReactNode }) {
  const setLocation = useContext(SetLocationContext);

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        setLocation(to);
        window.scrollTo(0, 0);
      }}
      className="cursor-pointer"
    >
      {children}
    </a>
  );
}

const SetLocationContext = createContext<(path: string) => void>(() => {});

export function Router({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(() => {
    const hash = window.location.hash.slice(1) || '/';
    return hash === '' ? '/' : hash;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setLocation(hash === '' ? '/' : hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetLocation = (path: string) => {
    window.location.hash = path;
    setLocation(path);
  };

  return (
    <LocationContext.Provider value={location}>
      <SetLocationContext.Provider value={handleSetLocation}>
        {children}
      </SetLocationContext.Provider>
    </LocationContext.Provider>
  );
}
