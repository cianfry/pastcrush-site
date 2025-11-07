import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gem } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const microcopies = [
  "Still sparkling after 2000 years",
  "Archaeology you can wear",
  "History class, but make it wearable",
  "Older than your great-great-grandparents",
  "Time-tested, literally",
  "Ancient vibes, modern hearts",
  "Survived centuries, still looks good",
  "More stories than your ex",
];

export default function ProductCard({ product, index }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const microcopy = microcopies[index % microcopies.length];

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Card className="group border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl bg-white">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-100 border-t-[#C9A959] rounded-full animate-spin" />
            </div>
          )}
          <img
            src={product.image_url}
            alt={product.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
            <Gem className="w-4 h-4 text-[#C9A959]" />
          </div>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#C9A959] hover:text-white shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <CardContent className="p-6 space-y-3">
          <div>
            <h3 className="text-lg font-serif text-[#111] mb-2 line-clamp-2 leading-snug group-hover:text-[#C9A959] transition-colors duration-300">
              {product.title}
            </h3>
            {product.price && (
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#C9A959]">{product.price}</span>
                <span className="text-[10px] text-gray-400 italic tracking-wide">{microcopy}</span>
              </div>
            )}
          </div>

          {product.ai_description && (
            <div 
              className="h-20 overflow-hidden hover:overflow-y-auto text-sm text-gray-600 leading-relaxed pr-2 scrollbar-thin scrollbar-thumb-[#C9A959] scrollbar-track-gray-100 line-clamp-3 hover:line-clamp-none transition-all duration-300"
            >
              {product.ai_description}
            </div>
          )}

          <div className="pt-3 border-t border-gray-50">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9A959] transition-colors duration-300 font-medium"
            >
              <span>View on Catawiki</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}