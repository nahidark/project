import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SearchBar from '../common/SearchBar';
import UserMenu from '../common/UserMenu';
import ThemeToggle from '../common/ThemeToggle';
import Logo from '../common/Logo';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg shadow-lg transition-colors duration-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link to="/" className="group">
              <Logo />
            </Link>
            <SearchBar onSearch={(query) => console.log('Search:', query)} />
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <ThemeToggle />
            {user ? (
              <UserMenu user={user} />
            ) : (
              <Link to="/login" className="btn-primary">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}