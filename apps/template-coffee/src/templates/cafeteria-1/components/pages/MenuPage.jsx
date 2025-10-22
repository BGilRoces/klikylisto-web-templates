/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Snowflake, Star, Heart, ArrowLeft } from 'lucide-react'

const MenuPage = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Ver Todos', icon: Coffee },
    { id: 'hot', name: 'Calientes', icon: Coffee },
    { id: 'cold', name: 'Fríos', icon: Snowflake },
    { id: 'specialty', name: 'Especiales', icon: Star },
    { id: 'desserts', name: 'Postres', icon: Heart }
  ]

  const menuItems = {
    hot: [
      { 
        id: 'espresso',
        name: 'Espresso', 
        price: 3.50, 
        description: 'Intenso y aromático, la base de todo buen café. Extraído con precisión para obtener el equilibrio perfecto.',
        ingredients: ['Café arábica premium', 'Agua filtrada'],
        size: ['Simple', 'Doble']
      },
      { 
        id: 'cappuccino',
        name: 'Cappuccino', 
        price: 4.20, 
        description: 'Equilibrio perfecto entre espresso intenso y leche vaporizada cremosa, coronado con espuma sedosa.',
        ingredients: ['Espresso', 'Leche entera', 'Espuma de leche'],
        size: ['8oz', '12oz', '16oz']
      },
      { 
        id: 'latte',
        name: 'Café Latte', 
        price: 4.80, 
        description: 'Suave y cremoso con arte en leche. Nuestros baristas crean diseños únicos en cada taza.',
        ingredients: ['Espresso', 'Leche vaporizada', 'Arte latte'],
        size: ['12oz', '16oz', '20oz']
      },
      { 
        id: 'americano',
        name: 'Americano', 
        price: 3.80, 
        description: 'Espresso alargado con agua caliente. Intensidad del espresso con la suavidad del café filtrado.',
        ingredients: ['Espresso doble', 'Agua caliente'],
        size: ['12oz', '16oz', '20oz']
      },
      { 
        id: 'flat-white',
        name: 'Flat White', 
        price: 4.50, 
        description: 'Intensidad del espresso con microespuma sedosa. Menos espuma que el cappuccino, más cremoso que el latte.',
        ingredients: ['Espresso doble', 'Leche microvaporizada'],
        size: ['6oz', '8oz']
      },
      { 
        id: 'mocha',
        name: 'Café Mocha', 
        price: 5.20, 
        description: 'La combinación perfecta de café intenso y chocolate premium. Coronado con crema batida.',
        ingredients: ['Espresso', 'Chocolate belga', 'Leche vaporizada', 'Crema batida'],
        size: ['12oz', '16oz', '20oz']
      }
    ],
    cold: [
      { 
        id: 'cold-brew',
        name: 'Cold Brew Original', 
        price: 4.50, 
        description: 'Extracción fría durante 24 horas. Suave, refrescante y menos ácido que el café tradicional.',
        ingredients: ['Café molido grueso', 'Agua fría filtrada', 'Hielo'],
        size: ['12oz', '16oz', '20oz']
      },
      { 
        id: 'iced-latte',
        name: 'Iced Latte', 
        price: 4.80, 
        description: 'Nuestro latte clásico servido sobre hielo. Refrescante sin perder la cremosidad característica.',
        ingredients: ['Espresso', 'Leche fría', 'Hielo', 'Jarabe opcional'],
        size: ['12oz', '16oz', '20oz']
      },
      { 
        id: 'frappe',
        name: 'Frappé Caramelo', 
        price: 5.50, 
        description: 'Bebida helada y cremosa perfecta para el verano. Con toque de caramelo artesanal.',
        ingredients: ['Café frío', 'Leche', 'Hielo', 'Caramelo', 'Crema batida'],
        size: ['16oz', '20oz', '24oz']
      },
      { 
        id: 'affogato',
        name: 'Affogato', 
        price: 6.20, 
        description: 'Helado de vainilla artesanal "ahogado" en espresso caliente. Un postre que es también bebida.',
        ingredients: ['Espresso caliente', 'Helado de vainilla', 'Cacao en polvo'],
        size: ['Único']
      },
      { 
        id: 'iced-americano',
        name: 'Iced Americano', 
        price: 3.80, 
        description: 'Americano servido sobre hielo con un toque cítrico opcional. Refrescante y energizante.',
        ingredients: ['Espresso', 'Agua fría', 'Hielo', 'Limón opcional'],
        size: ['12oz', '16oz', '20oz']
      }
    ],
    specialty: [
      { 
        id: 'ethiopian',
        name: 'Ethiopian Yirgacheffe', 
        price: 7.50, 
        description: 'Notas florales y cítricas, cultivado en las montañas de Etiopía. Procesado por lavado.',
        ingredients: ['Granos 100% Arábica de Etiopía', 'Tostado medio'],
        size: ['8oz', '12oz']
      },
      { 
        id: 'colombian',
        name: 'Colombian Huila', 
        price: 6.80, 
        description: 'Sabor balanceado con notas de caramelo y nuez. Cultivado en las montañas del Huila.',
        ingredients: ['Granos de Colombia', 'Tostado medio-oscuro'],
        size: ['8oz', '12oz']
      },
      { 
        id: 'jamaican',
        name: 'Jamaican Blue Mountain', 
        price: 12.00, 
        description: 'Uno de los cafés más exclusivos del mundo. Suave, sin acidez, con notas a chocolate.',
        ingredients: ['Granos Blue Mountain certificados', 'Tostado ligero'],
        size: ['6oz', '8oz']
      },
      { 
        id: 'hawaiian',
        name: 'Hawaiian Kona', 
        price: 10.50, 
        description: 'Suave y refinado, cultivado en suelo volcánico. Sabor único con notas a nuez y especias.',
        ingredients: ['Granos 100% Kona', 'Tostado medio'],
        size: ['6oz', '8oz']
      }
    ],
    desserts: [
      { 
        id: 'tiramisu',
        name: 'Tiramisú Artesanal', 
        price: 6.50, 
        description: 'Clásico italiano con café espresso y mascarpone. Preparado diariamente en nuestra cocina.',
        ingredients: ['Mascarpone', 'Café espresso', 'Ladyfingers', 'Cacao'],
        size: ['Porción individual']
      },
      { 
        id: 'cheesecake',
        name: 'Cheesecake de Café', 
        price: 5.80, 
        description: 'Cremoso cheesecake con infusión de café y base de galleta. Acompañado de coulis de frutos rojos.',
        ingredients: ['Queso crema', 'Café', 'Galletas', 'Frutos rojos'],
        size: ['Porción individual']
      },
      { 
        id: 'brownie',
        name: 'Brownie de Chocolate', 
        price: 4.50, 
        description: 'Húmedo brownie de chocolate belga acompañado de helado de vainilla y salsa de caramelo.',
        ingredients: ['Chocolate belga', 'Nueces', 'Helado', 'Caramelo'],
        size: ['Porción individual']
      },
      { 
        id: 'cookies',
        name: 'Galletas Artesanales', 
        price: 3.20, 
        description: 'Variedad de galletas horneadas diariamente. Chispas de chocolate, avena y nuez.',
        ingredients: ['Harina orgánica', 'Mantequilla', 'Chocolate', 'Nueces'],
        size: ['3 unidades']
      },
      { 
        id: 'croissant',
        name: 'Croissant de Almendra', 
        price: 4.80, 
        description: 'Croissant francés relleno de crema de almendra y cubierto con almendras laminadas.',
        ingredients: ['Masa hojaldre', 'Crema de almendra', 'Almendras'],
        size: ['Unidad']
      },
      { 
        id: 'muffin',
        name: 'Muffin de Arándanos', 
        price: 3.80, 
        description: 'Muffin esponjoso con arándanos frescos y un toque de limón. Horneado cada mañana.',
        ingredients: ['Arándanos frescos', 'Harina', 'Limón', 'Mantequilla'],
        size: ['Unidad']
      }
    ]
  }

  const getDisplayItems = () => {
    if (activeCategory === 'all') {
      return Object.entries(menuItems).flatMap(([categoryKey, items]) => 
        items.map(item => ({ ...item, category: categoryKey }))
      )
    }
    return menuItems[activeCategory] || []
  }

  const getCategoryInfo = (categoryKey) => {
    const categoryMap = {
      all: {
        name: 'Ver Todos',
        icon: Coffee,
        optionActive: 'bg-amber-800 text-white shadow-md',
        optionInactive: 'text-stone-700',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-stone-200 text-stone-800 px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      hot: {
        name: 'Calientes',
        icon: Coffee,
        optionActive: 'bg-amber-800 text-white shadow-md',
        optionInactive: 'text-amber-900 hover:text-amber-700',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-amber-800 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      cold: {
        name: 'Fríos',
        icon: Snowflake,
        optionActive: 'bg-sky-600 text-white shadow-md',
        optionInactive: 'text-sky-800 hover:text-sky-600',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-sky-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      specialty: {
        name: 'Especiales',
        icon: Star,
        optionActive: 'bg-yellow-600 text-white shadow-md',
        optionInactive: 'text-yellow-600 hover:text-yellow-600',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-yellow-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      },
      desserts: {
        name: 'Postres',
        icon: Heart,
        optionActive: 'bg-stone-700 text-white shadow-md',
        optionInactive: 'text-stone-800 hover:text-stone-700',
        badgeClass:
          'inline-flex items-center gap-1.5 bg-stone-700 text-white px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'
      }
    }

    return categoryMap[categoryKey] || categoryMap.all
  }

  // categories are displayed centered (no scroll) to match ElegantMenu styles

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-amber-100 relative">
        {/* Botón Volver fijo arriba a la izquierda */}
        <motion.button
          onClick={onBack}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors duration-200 font-medium bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-amber-100"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Volver</span>
        </motion.button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
              <h1 className="text-lg sm:text-2xl font-bold text-stone-900">Menú Completo</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs (centered, matching ElegantMenu styles) */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-center">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 shadow-lg flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const info = getCategoryInfo(category.id)
                const isActive = activeCategory === category.id

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                      isActive ? info.optionActive : info.optionInactive
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getDisplayItems().map((item, index) => {
            const categoryInfo = getCategoryInfo(item.category)
            const CategoryIcon = categoryInfo.icon
            
            return (
              <motion.div
                key={`${item.category || activeCategory}-${item.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-200 relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800" />
                
                {/* Content */}
                <div className="p-4 sm:p-5">
                  {/* Header with category badge and price */}
                  <div className="flex items-start justify-between mb-3">
                    {activeCategory === 'all' && (
                      <div className={getCategoryInfo(item.category).badgeClass}>
                        <CategoryIcon className="w-3.5 h-3.5" />
                        <span>{categoryInfo.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2 leading-tight">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="flex items-center gap-2 pt-3 mt-3">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-amber-500/5 group-hover:from-amber-500/10 group-hover:via-amber-500/15 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none rounded-xl" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default MenuPage