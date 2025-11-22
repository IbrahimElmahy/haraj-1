import { GoogleGenAI } from "@google/genai";
import { QuarterData } from '../types';

export const generateAIAnalysis = async (data: QuarterData): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Convert data to a readable string format for the prompt
    const dataString = JSON.stringify(data, null, 2);

    const prompt = `
      بصفتك خبيرًا عالميًا في تحليل بيانات وسائل التواصل الاجتماعي والتسويق الرقمي، قم بتحليل بيانات التقرير الربع سنوي التالية.
      
      البيانات:
      ${dataString}

      المطلوب:
      اكتب "نظرة مستقبلية استراتيجية" قصيرة (حوالي 100 كلمة) باللغة العربية. 
      ركز على الفرص الضائعة وكيف يمكن استغلال النجاح في تيك توك لدعم المنصات الأضعف مثل لينكدإن.
      اجعل النغمة مهنية، مشجعة، وذكية.
      لا تكرر الأرقام، بل قدم استنتاجات.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "عذرًا، لم أتمكن من توليد التحليل في الوقت الحالي.";
  } catch (error) {
    console.error("Error generating AI analysis:", error);
    return "حدث خطأ أثناء الاتصال بخدمة الذكاء الاصطناعي. يرجى التحقق من مفتاح API والمحاولة مرة أخرى.";
  }
};