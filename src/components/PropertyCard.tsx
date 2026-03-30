import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/propiedad/${property.id}`} className="group block">
        <div className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
          <div className="relative h-64 overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <Badge className="absolute left-4 top-4 bg-primary font-semibold tracking-wide text-primary-foreground">
              {property.id}
            </Badge>
          </div>
          <div className="p-5">
            <p className="text-sm font-medium text-muted-foreground">{property.location}</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {property.title}
            </h3>
            <p className="mt-3 text-2xl font-bold text-primary">
              {property.price.toLocaleString("es-ES")} €
            </p>
            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Bed size={16} /> {property.bedrooms} hab.</span>
              <span className="flex items-center gap-1.5"><Bath size={16} /> {property.bathrooms} baños</span>
              <span className="flex items-center gap-1.5"><Maximize size={16} /> {property.area} m²</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
