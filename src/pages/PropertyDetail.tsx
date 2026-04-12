import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Navbar />
        <p className="text-lg text-muted-foreground">Propiedad no encontrada</p>
        <Link to="/"><Button>Volver al inicio</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={property.image} alt={property.title} className="h-full w-full object-cover" width={800} height={600} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-primary text-lg text-primary-foreground">{property.id}</Badge>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} /> Volver a propiedades
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>{property.location}</span>
            </div>
            <h1 className="mt-2 text-3xl text-foreground sm:text-4xl">{property.title}</h1>
            <p className="mt-4 text-3xl font-bold text-primary">{property.price.toLocaleString("es-ES")} €</p>

            <div className="mt-8 flex flex-wrap gap-6 rounded-xl bg-secondary p-6 text-foreground">
              <span className="flex items-center gap-2"><Bed size={20} /> {property.bedrooms} Habitaciones</span>
              <span className="flex items-center gap-2"><Bath size={20} /> {property.bathrooms} Baños</span>
              <span className="flex items-center gap-2"><Maximize size={20} /> {property.area} m²</span>
            </div>

            <div className="mt-8 max-w-2xl">
              <h2 className="text-2xl text-foreground">Descripción</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{property.description}</p>
            </div>

            <div className="mt-8 max-w-2xl">
              <h2 className="text-2xl text-foreground">Características</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  const url = `https://tu-form.lovable.app?client_id=My-Dream-House&plan=core`;
                 window.open(url, "_blank");
                }}
              >
                Solicitar reunión de compra
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
