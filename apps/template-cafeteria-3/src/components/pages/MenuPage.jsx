/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Snowflake, Star, Heart, ArrowLeft } from 'lucide-react'

const MenuPage = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Ver Todos', icon: Coffee },
    { id: 'hot', name: 'Bebidas Calientes', icon: Coffee },
    { id: 'cold', name: 'Bebidas Frías', icon: Snowflake },
    { id: 'specialty', name: 'Cafés Especiales', icon: Star },
    { id: 'desserts', name: 'Postres & Snacks', icon: Heart }
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

  // Función para obtener todos los items o los de una categoría específica
  const getDisplayItems = () => {
    if (activeCategory === 'all') {
      // Combinar todos los items de todas las categorías
      return Object.entries(menuItems).flatMap(([categoryKey, items]) => 
        items.map(item => ({ ...item, category: categoryKey }))
      )
    }
    return menuItems[activeCategory] || []
  }

  const getCategoryName = (categoryKey) => {
    const categoryMap = {
      hot: 'Bebidas Calientes',
      cold: 'Bebidas Frías',
      specialty: 'Cafés Especiales',
      desserts: 'Postres & Snacks'
    }
    return categoryMap[categoryKey] || ''
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-3 text-stone-600 hover:text-amber-700 transition-colors duration-200"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </motion.button>

            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8 text-amber-700" />
              <h1 className="text-2xl font-bold text-stone-900">Menú Completo</h1>
            </div>

            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center">
            <div className="flex bg-stone-100 rounded-xl p-2 gap-2 overflow-x-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-amber-700 text-white shadow-md'
                      : 'text-stone-600 hover:text-amber-700 hover:bg-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getDisplayItems().map((item, index) => (
            <motion.div
              key={`${item.category || activeCategory}-${item.id}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Category badge (only shown in "Ver Todos") */}
              {activeCategory === 'all' && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    {getCategoryName(item.category)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-amber-700">${item.price.toFixed(2)}</span>
              </div>
              
              <p className="text-stone-600 leading-relaxed mb-6">{item.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-stone-700 mb-2">Ingredientes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-stone-700 mb-2">Tamaños disponibles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.size.map((size, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default MenuPage
