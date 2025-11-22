import React from 'react';
import { QuarterData, PlatformMetrics } from '../types';
import { TrendingUp, Clock, Users, Briefcase, Eye, Heart, MousePointer2, UserPlus } from 'lucide-react';

interface Props {
  data: QuarterData;
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

const MetricItem = ({ label, value, icon: Icon, color }: { label: string, value: string | number, icon: any, color: string }) => (
  <div className="bg-slate-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border border-slate-100">
    <div className="mb-1" style={{ color }}>
      <Icon size={18} />
    </div>
    <span className="text-xl font-bold text-slate-800">{value}</span>
    <span className="text-xs text-slate-500 font-medium">{label}</span>
  </div>
);

const PlatformCard: React.FC<{ platform: PlatformMetrics, conclusion: string }> = ({ platform, conclusion }) => {
  const BrandIcon = getIconForPlatform(platform.name);
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="p-5 pb-4 border-b border-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: platform.color }}></div>
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl text-white shadow-sm" style={{ backgroundColor: platform.color }}>
              <BrandIcon size={22} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900">{platform.name}</h4>
              <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                 {platform.notes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-5 bg-white">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <MetricItem 
            label="المشاهدات" 
            value={formatNumber(platform.views)} 
            icon={Eye} 
            color={platform.color}
          />
          <MetricItem 
            label="التفاعل" 
            value={formatNumber(platform.engagement)} 
            icon={Heart} 
            color={platform.color}
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

        {/* Analysis Points */}
        <div className="mb-6">
          <h5 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            أبرز التحليلات
          </h5>
          <ul className="space-y-3">
            {platform.analysisPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50/50 p-2 rounded-lg">
                <span className="text-slate-400 mt-0.5">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Conclusion */}
      <div className="mt-auto bg-slate-50 p-4 border-t border-slate-100">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">الخلاصة</p>
        <p className="text-sm font-medium text-slate-800 leading-snug">
          {conclusion}
        </p>
      </div>
    </div>
  );
};

export const PlatformAnalysisCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {data.platforms.map((platform) => {
        // Determine the correct conclusion text based on platform name
        let conclusion = '';
        if (platform.name === 'TikTok') conclusion = data.generalConclusion.tiktok;
        else if (platform.name === 'Facebook') conclusion = data.generalConclusion.facebook;
        else if (platform.name === 'Instagram') conclusion = data.generalConclusion.instagram;
        else if (platform.name === 'LinkedIn') conclusion = data.generalConclusion.linkedin;

        return (
          <PlatformCard 
            key={platform.name} 
            platform={platform} 
            conclusion={conclusion} 
          />
        );
      })}
    </div>
  );
};