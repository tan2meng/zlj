import React, { useEffect } from 'react';
import { Recipe } from '../types';
import { X, Flame, Info, List, ChefHat, ArrowLeft } from 'lucide-react';

interface RecipeDetailModalProps {
  summary: Recipe;
  onClose: () => void;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ summary: recipe, onClose }) => {
  
  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => { 
        document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-6">
      {/* Backdrop (Only visible on desktop/tablet) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity hidden sm:block"
        onClick={onClose}
      ></div>

      {/* Modal Content - Full screen on mobile, Rounded on desktop */}
      <div className="relative bg-white sm:rounded-2xl shadow-2xl w-full h-full sm:h-auto sm:max-w-3xl sm:max-h-[90vh] overflow-y-auto flex flex-col animate-fadeInUp">
        
        {/* Header - Sticky */}
        <div className="sticky top-0 z-10 bg-white border-b border-orange-100 px-4 py-4 sm:px-6 flex items-center justify-between shadow-sm sm:shadow-none">
          <div className="flex items-center gap-3">
             <button 
                onClick={onClose}
                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700 sm:hidden"
             >
                <ArrowLeft size={24} />
             </button>
             <div>
                <span className="text-orange-600 text-[10px] font-bold uppercase tracking-wider block mb-0.5">{recipe.category}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 serif leading-tight">{recipe.name}</h2>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-8 space-y-8 pb-20 sm:pb-8">
            <>
              {/* Intro / Flavor */}
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 flex items-start gap-4">
                <Flame className="text-orange-600 flex-shrink-0 mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-1">味型与创意</h3>
                  <p className="text-orange-800/80 text-sm leading-relaxed">{recipe.flavorProfile}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ingredients */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">
                    <List className="w-5 h-5 text-gray-400" />
                    食材清单
                  </h3>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm group">
                        <span className="text-gray-700 font-medium group-hover:text-orange-700 transition-colors">{ing.name}</span>
                        <span className="text-gray-400 border-b border-dotted border-gray-300 flex-grow mx-3"></span>
                        <span className="text-gray-600 font-mono">{ing.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chef Tips */}
                <div className="bg-blue-50/50 rounded-xl p-5 h-fit border border-blue-100">
                   <h3 className="flex items-center gap-2 text-md font-bold text-gray-800 mb-3">
                    <Info className="w-4 h-4 text-blue-500" />
                    主厨 TIPS
                  </h3>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{recipe.tips}"
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-6 border-b pb-2 border-gray-100">
                  <ChefHat className="w-5 h-5 text-gray-400" />
                  烹饪步骤
                </h3>
                <div className="space-y-6">
                  {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailModal;