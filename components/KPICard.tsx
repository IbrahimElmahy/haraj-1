import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  colorClass?: string;
}

export const KPICard: React.FC<KPICardProps> = ({ 
  title, 
  value, 
  subtext, 
  icon: Icon, 
  trend, 
  trendValue,
  colorClass = "bg-white" 
}) => {
  
  const renderTrend = () => {
    if (!trend || !trendValue) return null;
    
    const isUp = trend === 'up';
    const isDown = trend === 'down';
    const TrendIcon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
    
    const colorStyle = isUp 
      ? "text-emerald-600 bg-emerald-50" 
      : isDown 
        ? "text-rose-600 bg-rose-50" 
        : "text-slate-500 bg-slate-100";

    return (
      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${colorStyle}`}>
        <TrendIcon size={14} />
        <span dir="ltr">{trendValue}</span>
      </div>
    );
  };

  return (
    <div className={`${colorClass} rounded-2xl shadow-sm border border-slate-100 p-6 flex items-start justify-between transition-transform hover:-translate-y-1 duration-300`}>
      <div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <div className="text-3xl font-bold text-slate-800 mb-2">{value}</div>
        
        <div className="flex items-center gap-2 flex-wrap">
          {trend && trendValue && renderTrend()}
          
          {subtext && (
            <p className="text-xs text-slate-400 font-medium bg-slate-50 inline-block px-2 py-1 rounded-lg">
              {subtext}
            </p>
          )}
        </div>
      </div>
      <div className="p-3 bg-indigo-50 rounded-xl">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  );
};