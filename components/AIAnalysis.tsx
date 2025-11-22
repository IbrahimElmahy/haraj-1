import React, { useState } from 'react';
import { Sparkles, Loader2, Bot } from 'lucide-react';
import { QuarterData } from '../types';
import { generateAIAnalysis } from '../services/geminiService';

interface Props {
  data: QuarterData;
}

export const AIAnalysis: React.FC<Props> = ({ data }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateAIAnalysis(data);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg p-6 text-white mb-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-6 h-6 text-indigo-200" />
            <h3 className="text-xl font-bold">التحليل الذكي (Gemini AI)</h3>
          </div>
          <p className="text-indigo-100 text-sm leading-relaxed max-w-2xl">
            استخدم الذكاء الاصطناعي للحصول على قراءة استراتيجية للأرقام، واكتشاف الفرص الخفية لتحسين الأداء في الربع القادم.
          </p>
          
          {analysis && (
            <div className="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <p className="text-white text-sm leading-7 whitespace-pre-wrap">{analysis}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="group flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              جاري التحليل...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 group-hover:text-amber-500 transition-colors" />
              {analysis ? 'تحديث التحليل' : 'طلب تحليل استراتيجي'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};