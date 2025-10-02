/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, Share2, Play, TrendingUp, Users } from 'lucide-react'

const About = () => {
  const instagramStats = [
    { icon: Users, value: "50K+", label: "Seguidores" },
    { icon: Heart, value: "2.5M", label: "Me gusta" },
    { icon: MessageCircle, value: "10K+", label: "Comentarios" },
    { icon: TrendingUp, value: "98%", label: "Engagement" }
  ]

  const reels = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      views: "125K",
      likes: "8.5K",
      title: "Arte Latte Tutorial"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      views: "98K",
      likes: "6.2K",
      title: "Nuevo Menú"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      views: "210K",
      likes: "12.8K",
      title: "Behind the Scenes"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      views: "156K",
      likes: "9.1K",
      title: "Recetas Secretas"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4"
          >
            <Instagram className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">@aroma.premium</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-black text-neutral-900 mb-4">
            Seguinos en
            <span className="block mt-2 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Descubrí nuestros reels, recetas exclusivas y momentos detrás de cámaras. 
            ¡Sumate a nuestra comunidad cafetera!
          </p>

          {/* Instagram Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {instagramStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/50 hover:border-amber-300 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" strokeWidth={1.5} />
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram Reels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reels.map((reel, index) => (
            <motion.a
              key={reel.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Reel Thumbnail */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </motion.div>

              {/* Reel Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm mb-2">{reel.title}</p>
                <div className="flex items-center gap-4 text-white text-xs">
                  <div className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>{reel.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{reel.likes}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-6 h-6" />
            Seguinos en Instagram
            <Share2 className="w-5 h-5" />
          </motion.a>
          <p className="text-sm text-neutral-500 mt-4">
            Etiquetanos en tus fotos con <span className="font-bold text-amber-600">#AromaPremium</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About