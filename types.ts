export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  category: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  tips: string;
  flavorProfile: string;
}

export type RecipeSummary = Recipe; // Alias for backward compatibility if needed

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING_LIST = 'LOADING_LIST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type CategoryType = '全部' | '传统鄂湘黔系' | '传统菜系融合' | '海鲜/河鲜融合' | '时蔬/菌菇派' | '现代/西式跨界' | '主食/点心类';