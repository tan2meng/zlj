import React, { useEffect, useState } from 'react';
import { Recipe } from '../types';
import { Sparkles } from 'lucide-react';

interface LotteryOverlayProps {
  recipes: Recipe[];
  onComplete: (recipe: Recipe) => void;
}

const LotteryOverlay: React.FC<LotteryOverlayProps> = ({ recipes, onComplete }) => {
  const [displayRecipe, setDisplayRecipe] = useState<Recipe>(recipes[0]);
  const [animationState, setAnimationState] = useState<'spinning' | 'found'>('spinning');

  useEffect(() => {
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';
    
    // Animation configuration
    const duration = 2000; // Total spin time in ms
    const intervalTime = 50; // Switch text every 50ms
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      // Randomly pick a recipe to show
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setDisplayRecipe(recipes[randomIndex]);

      // Check if time is up
      if (Date.now() - startTime > duration) {
        clearInterval(intervalId);
        
        // Pick the actual winner
        const finalWinnerIndex = Math.floor(Math.random() * recipes.length);
        const winner = recipes[finalWinnerIndex];
        setDisplayRecipe(winner);
        setAnimationState('found');
      }
    }, intervalTime);

    return () => {
      clearInterval(intervalId);
      document.body.style.overflow = 'unset';
    };
  }, [recipes]);

  const handleOverlayClick = () => {
    if (animationState === 'found') {
        onComplete(displayRecipe);
    }
  };

  return (
    <div 
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center animate-fadeIn transition-all duration-500
        bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl
        ${animationState === 'found' ? 'cursor-pointer' : 'cursor-wait'}
        `}
        onClick={handleOverlayClick}
    >
      <div className="relative flex flex-col items-center p-8 max-w-lg w-full text-center pointer-events-none">
        
        {/* Icon Animation */}
        <div className={`mb-8 transition-transform duration-500 ${animationState === 'spinning' ? 'animate-bounce' : 'scale-110'}`}>
          {/* Inverted colors: Gradient Orange Box with White Text */}
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 ring-4 ring-white/30">
             <span className="text-white text-5xl font-bold serif">鲊</span>
          </div>
        </div>

        {/* Text Area */}
        <h2 className="text-xl font-medium text-orange-800 mb-2 tracking-widest uppercase drop-shadow-sm">
          {animationState === 'spinning' ? '正在为您挑选...' : '✨ 今日推荐 ✨'}
        </h2>
        
        <div className="h-24 flex items-center justify-center w-full">
            {/* Dark text for light glass background */}
            <h1 className={`text-3xl sm:text-4xl font-bold serif leading-tight text-gray-900 transition-all duration-100 drop-shadow-sm ${
                animationState === 'spinning' ? 'opacity-80 scale-95 blur-[1px]' : 'opacity-100 scale-105 transform'
            }`}>
            {displayRecipe.name}
            </h1>
        </div>

        {/* Decorative Elements */}
        {animationState === 'found' && (
            // Inverted button: Orange Gradient Background, White Text
            <div className="mt-8 animate-pulse flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg transform transition-transform group-hover:scale-105 ring-4 ring-orange-200/50">
                <Sparkles size={16} />
                <span>点击查看详情</span>
                <Sparkles size={16} />
            </div>
        )}
        
        {animationState === 'spinning' && (
             <div className="mt-8 flex gap-1">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
             </div>
        )}

      </div>
    </div>
  );
};

export default LotteryOverlay;