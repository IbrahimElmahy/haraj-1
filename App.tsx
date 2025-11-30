
import React, { useState } from 'react';
import { Eye, Award, Layers, Lightbulb, FolderOpen } from 'lucide-react';
import { QUARTERS } from './constants';
import { KPICard } from './components/KPICard';
import { ChartsSection } from './components/ChartsSection';
import { DetailedTable } from './components/DetailedTable';
import { PlatformAnalysisCards } from './components/PlatformAnalysisCards';
import { AIAnalysis } from './components/AIAnalysis';

const App: React.FC = () => {
  // Default to the single available period
  const [selectedQuarterId, setSelectedQuarterId] = useState<string>('AUG_NOV');

  const currentQuarterIndex = QUARTERS.findIndex(q => q.id === selectedQuarterId);
  const currentData = QUARTERS[currentQuarterIndex] || QUARTERS[0];
  const previousData = currentQuarterIndex > 0 ? QUARTERS[currentQuarterIndex - 1] : null;

  // Check if the current quarter has any data (views > 0)
  const hasData = currentData.platforms.some(p => p.views > 0);

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
              تقرير أداء السوشيال ميديا 2025
            </h1>
            <p className="text-slate-500 font-medium">
              يعرض أداء 4 منصات: تيك توك – فيسبوك – إنستغرام – لينكدإن
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
            {QUARTERS.map((quarter) => (
              <button
                key={quarter.id}
                onClick={() => setSelectedQuarterId(quarter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  selectedQuarterId === quarter.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {quarter.name}
              </button>
            ))}
          </div>
        </header>

        {!hasData ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-slate-50 p-6 rounded-full mb-6">
              <FolderOpen className="w-16 h-16 text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">لا توجد بيانات لهذه الفترة</h2>
            <p className="text-slate-500 max-w-md">
              لم يتم رصد أي نشاط أو بيانات تحليلية للفترة المحددة ({currentData.name}).
            </p>
          </div>
        ) : (
          <>
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

            {/* Platform Detailed Analysis Cards */}
            <div className="mb-6 mt-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                تفاصيل أداء المنصات
                <span className="text-sm font-normal text-slate-400 mt-1 mr-2">(إحصائيات مفصلة لكل قناة)</span>
              </h2>
            </div>
            <PlatformAnalysisCards data={currentData} previousData={previousData} />

            {/* Charts Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">مقارنة عامة</h2>
              <ChartsSection data={currentData} />
            </div>

            {/* Summary Table (Moved to bottom) */}
            <div className="mt-8">
              <DetailedTable data={currentData} />
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default App;