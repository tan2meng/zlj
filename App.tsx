import React, { useState, useEffect } from 'react';
import { Recipe, CategoryType } from './types';
import { STATIC_RECIPES } from './data/staticRecipes';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import { UtensilsCrossed } from 'lucide-react';

const CATEGORIES: CategoryType[] = ['全部', '传统鄂湘黔系', '传统菜系融合', '海鲜/河鲜融合', '时蔬/菌菇派', '现代/西式跨界', '主食/点心类'];

const App: React.FC = () => {
  // Initialize with STATIC_RECIPES directly
  const [recipes] = useState<Recipe[]>(STATIC_RECIPES);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('全部');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Filter logic
  useEffect(() => {
    if (selectedCategory === '全部') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(r => r.category.includes(selectedCategory.split('/')[0]) || r.category === selectedCategory));
    }
  }, [selectedCategory, recipes]);

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-gray-800 font-sans select-none pb-20 sm:pb-0">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100 sticky top-0 z-40 transition-all">
        {/* Centered Logo Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 relative flex items-center justify-center">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo(0,0)}>
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-md transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="font-bold text-xl serif">鲊</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 serif tracking-wide">鲊辣椒工坊</h1>
            </div>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full hidden sm:block">
            {recipes.length} 道食谱
          </div>
        </div>
        
        {/* Category Filter Bar */}
        <div className="border-t border-orange-50 py-3 px-4">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
             {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-200 transform scale-105'
                    : 'bg-white/80 text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Recipe Grid - Mobile First */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={setSelectedRecipe} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
              <UtensilsCrossed size={32} className="text-gray-300" />
            </div>
            <p className="text-gray-500 text-sm">暂无该分类菜谱</p>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal 
          summary={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default App;