import React, { useState } from 'react';
import { Eye, Award, Layers, Lightbulb } from 'lucide-react';
import { QUARTERS } from './constants';
import { KPICard } from './components/KPICard';
import { ChartsSection } from './components/ChartsSection';
import { DetailedTable } from './components/DetailedTable';
import { PlatformAnalysisCards } from './components/PlatformAnalysisCards';
import { AIAnalysis } from './components/AIAnalysis';

const App: React.FC = () => {
  const [selectedQuarterId, setSelectedQuarterId] = useState<string>(QUARTERS[0].id);

  const currentQuarterIndex = QUARTERS.findIndex(q => q.id === selectedQuarterId);
  const currentData = QUARTERS[currentQuarterIndex];
  const previousData = currentQuarterIndex > 0 ? QUARTERS[currentQuarterIndex - 1] : null;

  // Calculate Trend for Total Views
  let viewsTrend: { direction: 'up' | 'down' | 'neutral', value: string } | undefined;
  
  if (previousData) {
    const currentTotal = currentData.platforms.reduce((sum, p) => sum + p.views, 0);
    const previousTotal = previousData.platforms.reduce((sum, p) => sum + p.views, 0);
    
    if (previousTotal > 0) {
      const diff = currentTotal - previousTotal;
      const percentage = (diff / previousTotal) * 100;
      
      viewsTrend = {
        direction: percentage > 0 ? 'up' : percentage < 0 ? 'down' : 'neutral',
        value: `${Math.abs(percentage).toFixed(1)}%`
      };
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              تقرير ربع سنوي لأداء السوشيال ميديا
            </h1>
            <p className="text-slate-500 font-medium">
              يعرض أداء 4 منصات: تيك توك – فيسبوك – إنستغرام – لينكدإن
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            {QUARTERS.map((quarter) => (
              <button
                key={quarter.id}
                onClick={() => setSelectedQuarterId(quarter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedQuarterId === quarter.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {quarter.id}
              </button>
            ))}
          </div>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard 
            title="إجمالي المشاهدات" 
            value={currentData.totalViews} 
            subtext="عبر كل المنصات"
            icon={Eye}
            trend={viewsTrend?.direction}
            trendValue={viewsTrend?.value}
          />
          <KPICard 
            title="أقوى منصة أداءً" 
            value={currentData.topPlatform} 
            subtext="الأعلى نمواً وانتشاراً"
            icon={Award}
          />
          <KPICard 
            title="عدد المنصات المدارة" 
            value={currentData.platformsManaged} 
            subtext="حسابات نشطة"
            icon={Layers}
          />
          <KPICard 
            title="ملاحظة رئيسية" 
            value="الفيديوهات القصيرة"
            subtext="الأعلى تفاعلاً"
            icon={Lightbulb}
            colorClass="bg-amber-50 border-amber-100"
          />
        </div>

        {/* AI Analysis Section */}
        <AIAnalysis data={currentData} />

        {/* Charts Section */}
        <ChartsSection data={currentData} />

        {/* Platform Detailed Analysis Cards (Renamed Header) */}
        <div className="mb-6 mt-8">
          <h2 className="text-2xl font-bold text-slate-900">تفاصيل أداء كل منصة</h2>
          <p className="text-slate-500 mt-1">إحصائيات دقيقة وتحليل شامل لكل قناة على حدة</p>
        </div>
        <PlatformAnalysisCards data={currentData} />

        {/* Summary Table (Moved to bottom) */}
        <div className="mt-12">
           <DetailedTable data={currentData} />
        </div>

      </div>
    </div>
  );
};

export default App;
