import React from 'react';
import { Star, MapPin, ShoppingCart, Heart } from 'lucide-react';

const CoffeeCard = ({ coffee, index }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-coffee-400/50 transition-all duration-300 cursor-pointer h-[420px] flex flex-col hover:shadow-xl hover:shadow-coffee-500/20 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={coffee.image} 
          alt={coffee.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-coffee-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {coffee.category === 'single' ? 'Origen Único' : 
             coffee.category === 'blend' ? 'Mezcla Exclusiva' : 
             coffee.category === 'limited' ? 'Edición Limitada' : coffee.category}
          </span>
        </div>

        {/* Origin */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
          <MapPin size={14} />
          <span className="text-sm font-medium">{coffee.origin}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-lg text-white group-hover:text-coffee-300 transition-colors leading-tight line-clamp-2 flex-1 mr-2">
            {coffee.name}
          </h3>
          <div className="flex items-center space-x-1 text-amber-400 flex-shrink-0">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-medium text-white">{coffee.rating}</span>
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">
          {coffee.description || `Café procesado por ${coffee.process} con notas de ${coffee.notes.join(', ')}.`}
        </p>

        {/* Tasting Notes */}
        <div className="mb-4">
          <div className="text-xs text-white/50 mb-2 uppercase tracking-wide font-medium">
            Notas de Cata
          </div>
          <div className="flex flex-wrap gap-1">
            {coffee.notes.slice(0, 3).map((note, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Roast Level */}
        <div className="mb-4 flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/50 uppercase tracking-wide font-medium">
              Nivel de Tueste
            </span>
            <span className="text-xs text-white/70">{coffee.roast}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-coffee-300 to-coffee-500 h-2 rounded-full"
              style={{ 
                width: coffee.roast === 'Tueste Claro' || coffee.roast === 'Light' ? '33%' : 
                       coffee.roast === 'Tueste Medio' || coffee.roast === 'Medium' ? '66%' : '100%' 
              }}
            ></div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-coffee-300">${coffee.price}</span>
            <span className="text-white/50 text-sm ml-1">/lb</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-coffee-500/0 via-coffee-400/0 to-coffee-300/0 group-hover:from-coffee-500/10 group-hover:via-coffee-400/5 group-hover:to-coffee-300/10 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default CoffeeCard;
