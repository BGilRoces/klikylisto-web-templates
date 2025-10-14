import React, { useState } from 'react';
import { Star, MapPin, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';

const CoffeeCard = ({ coffee, index, addToCart, cartItem, updateQuantity }) => {
  const [liked, setLiked] = useState(false);
  
  // Generar precio basado en el café
  const price = coffee.price || (15 + (index * 3));
  const coffeeWithPrice = { ...coffee, price };
  
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl md:rounded-xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300 h-[550px] md:h-[480px] flex flex-col hover:shadow-xl hover:shadow-amber-600/20 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-48 md:h-40 overflow-hidden">
        <img 
          src={coffee.image} 
          alt={coffee.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 md:top-3 md:left-3">
          <span className="px-3 py-1 md:px-2 md:py-0.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs md:text-[10px] font-semibold rounded-full">
            {coffee.category === 'single' ? 'Origen Único' : 
             coffee.category === 'blend' ? 'Mezcla Exclusiva' : 
             coffee.category === 'limited' ? 'Edición Limitada' : coffee.category}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-4 right-4 md:top-3 md:right-3 p-2 md:p-1.5 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-all duration-200 hover:scale-110"
        >
          <Heart 
            size={18} 
            className={`md:w-4 md:h-4 transition-all duration-200 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </button>

        {/* Origin */}
        <div className="absolute bottom-4 left-4 md:bottom-3 md:left-3 flex items-center space-x-2 md:space-x-1.5 text-white">
          <MapPin size={14} className="md:w-3 md:h-3" />
          <span className="text-sm md:text-xs font-medium">{coffee.origin}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3 md:mb-2">
          <h3 className="font-bold text-lg md:text-base text-white group-hover:text-amber-300 transition-colors leading-tight line-clamp-2 flex-1 mr-2">
            {coffee.name}
          </h3>
          <div className="flex items-center space-x-1 md:space-x-0.5 text-amber-400 flex-shrink-0">
            <Star size={14} fill="currentColor" className="md:w-3 md:h-3" />
            <span className="text-sm md:text-xs font-medium text-white">{coffee.rating}</span>
          </div>
        </div>
        
        <p className="text-white/70 text-sm md:text-xs mb-4 md:mb-3 leading-relaxed line-clamp-2">
          {coffee.description || `Café procesado por ${coffee.process} con notas de ${coffee.notes.join(', ')}.`}
        </p>

        {/* Tasting Notes */}
        <div className="mb-4 md:mb-3">
          <div className="text-xs md:text-[10px] text-white/50 mb-2 md:mb-1.5 uppercase tracking-wide font-medium">
            Notas de Cata
          </div>
          <div className="flex flex-wrap gap-1">
            {coffee.notes.slice(0, 3).map((note, i) => (
              <span 
                key={i}
                className="px-2 py-1 md:px-1.5 md:py-0.5 bg-white/10 text-white/80 text-xs md:text-[10px] rounded-full border border-white/20"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Roast Level */}
        <div className="mb-4 md:mb-3">
          <div className="flex items-center justify-between mb-2 md:mb-1.5">
            <span className="text-xs md:text-[10px] text-white/50 uppercase tracking-wide font-medium">
              Nivel de Tueste
            </span>
            <span className="text-xs md:text-[10px] text-white/70">{coffee.roast}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 md:h-1.5">
            <div 
              className="bg-gradient-to-r from-amber-300 to-amber-600 h-2 md:h-1.5 rounded-full"
              style={{ 
                width: coffee.roast === 'Tueste Claro' || coffee.roast === 'Light' ? '33%' : 
                      coffee.roast === 'Tueste Medio' || coffee.roast === 'Medium' ? '66%' : '100%' 
              }}
            ></div>
          </div>
        </div>

        {/* Price & Cart Actions */}
        <div className="mt-auto pt-4 md:pt-3 border-t border-white/10">
          <div className="flex items-center justify-between mb-3 md:mb-2">
            <div>
              <p className="text-xs md:text-[10px] text-white/50 mb-1">Precio por 250g</p>
              <p className="text-2xl md:text-xl font-bold text-white">
                ${price}
                <span className="text-sm md:text-xs text-white/60">.00</span>
              </p>
            </div>
          </div>

          {/* Add to Cart / Quantity Controls */}
          {!cartItem ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(coffeeWithPrice);
              }}
              className="w-full flex items-center justify-center gap-2 md:gap-1.5 px-4 py-3 md:px-3 md:py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-base md:text-sm rounded-xl md:rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105"
            >
              <ShoppingCart size={18} className="md:w-4 md:h-4" />
              <span>Agregar al Carrito</span>
            </button>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(coffee.id, cartItem.quantity - 1);
                }}
                className="p-3 md:p-2 bg-red-600/80 hover:bg-red-700 text-white rounded-xl md:rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Minus size={18} className="md:w-4 md:h-4" />
              </button>
              <div className="flex-1 text-center">
                <p className="text-white font-bold text-lg md:text-base">{cartItem.quantity}</p>
                <p className="text-white/60 text-xs md:text-[10px]">En el carrito</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(coffee.id, cartItem.quantity + 1);
                }}
                className="p-3 md:p-2 bg-green-600/80 hover:bg-green-700 text-white rounded-xl md:rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Plus size={18} className="md:w-4 md:h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-600/0 via-amber-400/0 to-amber-300/0 group-hover:from-amber-600/10 group-hover:via-amber-400/5 group-hover:to-amber-300/10 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default CoffeeCard;
