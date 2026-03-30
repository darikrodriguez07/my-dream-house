import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
          <Home size={22} />
          Hogar Plus
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">Inicio</Link>
          <a href="#propiedades" className="transition-colors hover:text-foreground">Propiedades</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
