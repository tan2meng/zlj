import React from 'react';
import { RecipeSummary } from '../types';
import { ChefHat, Flame, Utensils, Globe } from 'lucide-react';

interface RecipeCardProps {
  recipe: RecipeSummary;
  onClick: (recipe: RecipeSummary) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  // Determine icon based on category for visual flair
  const getIcon = () => {
    if (recipe.category.includes('西式')) return <Utensils className="w-4 h-4 text-orange-600" />;
    if (recipe.category.includes('传统菜系融合')) return <Globe className="w-4 h-4 text-purple-600" />;
    if (recipe.category.includes('传统')) return <Flame className="w-4 h-4 text-red-600" />;
    return <ChefHat className="w-4 h-4 text-amber-600" />;
  };

  return (
    <div 
      onClick={() => onClick(recipe)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-100 overflow-hidden cursor-pointer flex flex-col h-full active:scale-[0.98]"
    >
      <div className="h-28 sm:h-32 bg-gradient-to-br from-orange-400 to-red-600 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '8px 8px'
        }}></div>
        
        <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-white font-bold text-lg sm:text-xl serif shadow-sm leading-tight">
                {recipe.name}
            </h3>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-orange-50 text-orange-800 text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium border border-orange-200 flex items-center gap-1 truncate">
            {getIcon()}
            {recipe.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {recipe.description}
        </p>
        <div className="mt-auto pt-3 flex justify-between items-center">
            <span className="text-xs text-gray-400 font-light">AI 创意食谱</span>
            <span className="text-orange-600 text-xs font-semibold flex items-center bg-orange-50 px-2 py-1 rounded-lg">
                详情 &rarr;
            </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
