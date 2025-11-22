import React from 'react';
import { QuarterData } from '../types';

interface DetailedTableProps {
  data: QuarterData;
}

export const DetailedTable: React.FC<DetailedTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">الجدول التفصيلي للأداء</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-slate-50 text-slate-500 text-sm">
            <tr>
              <th className="py-4 px-6 font-medium">المنصة</th>
              <th className="py-4 px-6 font-medium">المشاهدات</th>
              <th className="py-4 px-6 font-medium">زيارات البروفايل</th>
              <th className="py-4 px-6 font-medium">التفاعل</th>
              <th className="py-4 px-6 font-medium">المتابعين الجدد</th>
              <th className="py-4 px-6 font-medium">ملاحظات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.platforms.map((platform) => (
              <tr key={platform.name} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: platform.color }}></div>
                  {platform.name}
                </td>
                <td className="py-4 px-6 text-slate-600 font-mono text-sm">
                  {new Intl.NumberFormat('en-US').format(platform.views)}
                </td>
                <td className="py-4 px-6 text-slate-600 font-mono text-sm">
                  {platform.profileVisits ? new Intl.NumberFormat('en-US').format(platform.profileVisits) : '—'}
                </td>
                <td className="py-4 px-6 text-slate-600 font-mono text-sm">
                  {new Intl.NumberFormat('en-US').format(platform.engagement)}
                </td>
                <td className="py-4 px-6 text-slate-600 font-mono text-sm">
                  {platform.newFollowers ? `+${platform.newFollowers}` : '—'}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
                    {platform.notes}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};