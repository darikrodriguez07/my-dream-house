import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section id="propiedades" className="container mx-auto px-6 py-20">
        <h2 className="text-center text-3xl text-foreground sm:text-4xl">
          Nuestras Propiedades
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Explora nuestra selección exclusiva de hogares. Cada propiedad tiene un ID único para tu referencia.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </section>
      <footer className="border-t border-border bg-secondary py-10 text-center text-sm text-muted-foreground">
        © 2026 Hogar Plus. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
