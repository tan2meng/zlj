import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RecipeSummary } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
你是一位深耕中国地方特色菜系（特别是鄂西、湘西、黔东地区）的创意主厨，精通“鲊辣椒”（面面辣椒）的传统特性，并能将其与现代烹饪、西式技法及各地食材进行无界融合。
你的任务是基于“鲊辣椒”这一核心食材，创作高质量、不重复的创意菜谱。
`;

export const generateRecipeBatch = async (count: number = 20): Promise<RecipeSummary[]> => {
  const modelId = "gemini-3-flash-preview";
  
  const prompt = `
    请以“鲊辣椒”为核心食材，生成 ${count} 道不重复的创意菜谱名称。
    
    要求：
    1. 维度多样化：需涵盖以下分类：
       - 传统鄂湘黔系 (保留经典但微创新)
       - 传统菜系融合 (融合川菜、鲁菜、粤菜等其他中国传统八大菜系技法)
       - 海鲜/河鲜融合
       - 时蔬/菌菇派
       - 现代/西式跨界
       - 主食/点心类
    2. 结构化输出：每道菜包含[菜名]、[所属类别]和[核心创意点]。
    3. 创新广度：烹饪工艺需涵盖炒、蒸、煎、烤、烩、酿、炸等。
    
    输出必须是严格的JSON数组格式。
  `;

  const responseSchema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING, description: "One of: 传统鄂湘黔系, 传统菜系融合, 海鲜/河鲜融合, 时蔬/菌菇派, 现代/西式跨界, 主食/点心类" },
        name: { type: Type.STRING },
        description: { type: Type.STRING, description: "核心创意点/烹饪特色 (15-30 words)" }
      },
      required: ["category", "name", "description"]
    }
  };

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.85, 
      }
    });

    const text = response.text;
    if (!text) return [];

    const rawData = JSON.parse(text);
    // Since we simplified the interface, we just return the basic data here.
    // The App.tsx will handle adding placeholder details for new items.
    return rawData.map((item: any, index: number) => ({
      ...item,
      id: `recipe-${Date.now()}-${index}`
    }));

  } catch (error) {
    console.error("Error generating recipes:", error);
    throw error;
  }
};