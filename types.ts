export enum Platform {
  TikTok = 'TikTok',
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn'
}

export interface PlatformMetrics {
  name: Platform;
  views: number;
  profileVisits?: number;
  engagement: number; // Likes + Comments + Shares
  newFollowers?: number;
  notes: string;
  color: string;
  analysisPoints: string[];
}

export interface QuarterData {
  id: string;
  name: string;
  totalViews: string; // Formatted string, e.g., "1.4M+"
  topPlatform: Platform;
  platformsManaged: number;
  keyInsight: string;
  platforms: PlatformMetrics[];
  generalConclusion: {
    tiktok: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}