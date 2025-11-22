import React from 'react';
import { QuarterData, PlatformMetrics } from '../types';
import { TrendingUp, TrendingDown, Clock, Users, Briefcase, Eye, Heart, MousePointer2, UserPlus, Minus } from 'lucide-react';

interface Props {
  data: QuarterData;
  previousData?: QuarterData | null;
}

const getIconForPlatform = (name: string) => {
  switch (name) {
    case 'TikTok': return TrendingUp;
    case 'Facebook': return Clock;
    case 'Instagram': return Users;
    case 'LinkedIn': return Briefcase;
    default: return TrendingUp;
  }
};

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(num);
};

const calculateTrend = (current: number, previous?: number) => {
  if (previous === undefined || previous === 0) return null;
  const diff = current - previous;
  const percent = (diff / previous) * 100;
  
  if (Math.abs(percent) < 0.1) return { direction: 'neutral', value: '0%', label: 'لا تغيير' };

  return {
    value: `${Math.abs(percent).toFixed(1)}%`,
    direction: percent > 0 ? 'up' : 'down',
    label: percent > 0 ? 'نمو' : 'انخفاض'
  };
};

interface MetricItemProps {
  label: string;
  value: string | number;
  icon: any;
  color: string;
  trend?: { value: string; direction: string; label: string } | null;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value, icon: Icon, color, trend }) => (
  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-between h-full hover:bg-slate-100/50 transition-colors">
    <div className="flex justify-between items-start mb-3">
      <div className="p-2 rounded-lg bg-white shadow-sm" style={{ color }}>
        <Icon size={20} />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
          trend.direction === 'up' 
            ? 'text-emerald-700 bg-emerald-100' 
            : trend.direction === 'down' 
              ? 'text-rose-700 bg-rose-100' 
              : 'text-slate-600 bg-slate-200'
        }`}>
          {trend.direction === 'up' ? <TrendingUp size={12} /> : trend.direction === 'down' ? <TrendingDown size={12} /> : <Minus size={12} />}
          <span dir="ltr">{trend.direction === 'up' ? '+' : '-'}{trend.value}</span>
        </div>
      )}
    </div>
    <div>
      <span className="text-2xl font-bold text-slate-900 block mb-1 font-mono">{value}</span>
      <span className="text-xs text-slate-500 font-medium">{label}</span>
    </div>
  </div>
);

const PlatformCard: React.FC<{ platform: PlatformMetrics, prevPlatform?: PlatformMetrics, conclusion: string }> = ({ platform, prevPlatform, conclusion }) => {
  const BrandIcon = getIconForPlatform(platform.name);
  
  // Calculate trends
  const viewsTrend = prevPlatform ? calculateTrend(platform.views, prevPlatform.views) : null;
  const engagementTrend = prevPlatform ? calculateTrend(platform.engagement, prevPlatform.engagement) : null;
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 group">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: platform.color }}></div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl text-white shadow-md transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: platform.color }}>
              <BrandIcon size={28} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-slate-900">{platform.name}</h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mt-1">
                 {platform.notes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Statistics Section */}
      <div className="p-6 bg-white">
        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-slate-300"></span>
          إحصائيات الأداء
          <span className="flex-1 h-px bg-slate-100"></span>
        </h5>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricItem 
            label="المشاهدات" 
            value={formatNumber(platform.views)} 
            icon={Eye} 
            color={platform.color}
            trend={viewsTrend}
          />
          <MetricItem 
            label="التفاعل (Like, Share...)" 
            value={formatNumber(platform.engagement)} 
            icon={Heart} 
            color={platform.color}
            trend={engagementTrend}
          />
          {platform.profileVisits && (
            <MetricItem 
              label="زيارات البروفايل" 
              value={formatNumber(platform.profileVisits)} 
              icon={MousePointer2} 
              color={platform.color}
            />
          )}
          {platform.newFollowers && (
            <MetricItem 
              label="متابعين جدد" 
              value={`+${platform.newFollowers}`} 
              icon={UserPlus} 
              color={platform.color}
            />
          )}
        </div>

        {/* Analysis Section */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h5 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }}></div>
            التحليل الاستراتيجي
          </h5>
          <ul className="space-y-3 mb-5">
            {platform.analysisPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-slate-300 mt-1">•</span>
                <span className="leading-relaxed font-medium">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-4 border-t border-slate-200/60">
            <p className="text-xs font-bold text-slate-400 mb-1">الخلاصة:</p>
            <p className="text-sm text-slate-800 italic leading-relaxed">
              "{conclusion}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlatformAnalysisCards: React.FC<Props> = ({ data, previousData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {data.platforms.map((platform) => {
        // Determine the correct conclusion text
        let conclusion = '';
        if (platform.name === 'TikTok') conclusion = data.generalConclusion.tiktok;
        else if (platform.name === 'Facebook') conclusion = data.generalConclusion.facebook;
        else if (platform.name === 'Instagram') conclusion = data.generalConclusion.instagram;
        else if (platform.name === 'LinkedIn') conclusion = data.generalConclusion.linkedin;

        // Find previous platform data if available
        const prevPlatform = previousData?.platforms.find(p => p.name === platform.name);

        return (
          <PlatformCard 
            key={platform.name} 
            platform={platform}
            prevPlatform={prevPlatform}
            conclusion={conclusion} 
          />
        );
      })}
    </div>
  );
};
