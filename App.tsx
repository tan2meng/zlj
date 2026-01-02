import React, { useState, useEffect } from 'react';
import { Recipe, CategoryType } from './types';
import { STATIC_RECIPES } from './data/staticRecipes';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import LotteryOverlay from './components/LotteryOverlay';
import { UtensilsCrossed, ArrowUp } from 'lucide-react';

const CATEGORIES: CategoryType[] = ['全部', '传统鄂湘黔系', '传统菜系融合', '海鲜/河鲜融合', '时蔬/菌菇派', '现代/西式跨界', '主食/点心类'];

const App: React.FC = () => {
  // Initialize with STATIC_RECIPES directly
  const [recipes] = useState<Recipe[]>(STATIC_RECIPES);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('全部');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // State for the lottery animation overlay
  const [isLotteryRunning, setIsLotteryRunning] = useState(false);
  
  // State for Back to Top button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Filter logic
  useEffect(() => {
    if (selectedCategory === '全部') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(r => r.category.includes(selectedCategory.split('/')[0]) || r.category === selectedCategory));
    }
  }, [selectedCategory, recipes]);

  // Scroll listener for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicking the Logo to start the lottery
  const handleLogoClick = () => {
    if (!isLotteryRunning) {
        setIsLotteryRunning(true);
    }
  };

  // Handle the completion of the lottery animation
  const handleLotteryComplete = (winningRecipe: Recipe) => {
    setIsLotteryRunning(false);
    setSelectedRecipe(winningRecipe);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-gray-800 font-sans select-none pb-20 sm:pb-0 relative">
      
      {/* Lottery Animation Overlay */}
      {isLotteryRunning && (
        <LotteryOverlay 
            recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes} 
            onComplete={handleLotteryComplete} 
        />
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100 sticky top-0 z-40 transition-all">
        {/* Centered Logo Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 relative flex items-center justify-center">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity group" 
            onClick={handleLogoClick}
            title="点击随机抽取一道菜！"
          >
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-md transform -rotate-3 group-hover:rotate-12 transition-transform duration-300">
              <span className="font-bold text-xl serif">鲊</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 serif tracking-wide">鲊海椒工坊</h1>
            </div>
          </div>
        </div>
        
        {/* Category Filter Bar */}
        <div className="border-t border-orange-50 py-3 px-4">
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
             {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-orange-600/75 backdrop-blur-md text-white border border-white/20 shadow-lg shadow-orange-500/30 transform scale-105'
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-orange-600/90 text-white rounded-full shadow-lg shadow-orange-600/30 hover:bg-orange-700 hover:scale-110 active:scale-95 transition-all duration-300 z-30 backdrop-blur-sm animate-fadeIn"
          aria-label="回到顶部"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}

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