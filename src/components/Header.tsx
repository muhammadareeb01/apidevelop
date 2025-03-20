import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Header() {
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={cn(
        'text-white/80 hover:text-brand-light transition-colors',
        location.pathname === to && 'text-brand-light font-medium'
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="fixed top-0 w-full bg-brand shadow-sm z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Prox" className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">Prox</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </nav>
        </div>
        <button className="md:hidden">
          <img src="/logo.svg" alt="Menu" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}