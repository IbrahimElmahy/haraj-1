
import { Platform, QuarterData, PlatformMetrics } from './types';

const createEmptyPlatforms = (): PlatformMetrics[] => [
  {
    name: Platform.TikTok,
    views: 0,
    engagement: 0,
    notes: '-',
    color: '#000000',
    analysisPoints: []
  },
  {
    name: Platform.Facebook,
    views: 0,
    engagement: 0,
    notes: '-',
    color: '#1877F2',
    analysisPoints: []
  },
  {
    name: Platform.Instagram,
    views: 0,
    engagement: 0,
    notes: '-',
    color: '#E4405F',
    analysisPoints: []
  },
  {
    name: Platform.LinkedIn,
    views: 0,
    engagement: 0,
    notes: '-',
    color: '#0A66C2',
    analysisPoints: []
  }
];

const EMPTY_CONCLUSION = {
  tiktok: '-',
  facebook: '-',
  instagram: '-',
  linkedin: '-'
};

export const QUARTERS: QuarterData[] = [
  {
    id: 'Q1',
    name: 'الربع الأول (Q1)',
    totalViews: '0',
    topPlatform: Platform.TikTok,
    platformsManaged: 0,
    keyInsight: 'لا توجد بيانات متاحة لهذا الربع',
    platforms: createEmptyPlatforms(),
    generalConclusion: EMPTY_CONCLUSION
  },
  {
    id: 'Q2',
    name: 'الربع الثاني (Q2)',
    totalViews: '0',
    topPlatform: Platform.TikTok,
    platformsManaged: 0,
    keyInsight: 'لا توجد بيانات متاحة لهذا الربع',
    platforms: createEmptyPlatforms(),
    generalConclusion: EMPTY_CONCLUSION
  },
  {
    id: 'Q3',
    name: 'الربع الثالث (Q3)',
    totalViews: '+1.4M',
    topPlatform: Platform.TikTok,
    platformsManaged: 4,
    keyInsight: 'الفيديوهات القصيرة كانت الأعلى أداءً من حيث التفاعل والمشاهدات',
    platforms: [
      {
        name: Platform.TikTok,
        views: 1400000,
        profileVisits: 11000,
        engagement: 15243,
        notes: 'أعلى أداء بين كل المنصات',
        color: '#000000',
        analysisPoints: [
          'أعلى نمو في المشاهدات (+87.9%).',
          'أعلى تفاعل (+15k).',
          'نجاح كبير مع محتوى الريلز والترندات.',
          'توصيتي: زيادة معدل النشر.'
        ]
      },
      {
        name: Platform.Facebook,
        views: 28800,
        engagement: 71,
        notes: 'متوسط مشاهدة قوي (47 ثانية)',
        color: '#1877F2',
        analysisPoints: [
          'قفزة ضخمة في “مدة المشاهدة” (47 ثانية).',
          'المحتوى مناسب للجمهور.',
          'التفاعل يحتاج محتوى تفاعلي أكثر.'
        ]
      },
      {
        name: Platform.Instagram,
        views: 2716,
        profileVisits: 106,
        engagement: 23,
        newFollowers: 75,
        notes: '90٪ من المشاهدات من غير المتابعين',
        color: '#E4405F',
        analysisPoints: [
          'الحساب في حالة نمو ممتازة.',
          '90٪ من المشاهدات من ناس غير المتابعين.',
          'الريلز هي الأفضل أداءً.'
        ]
      },
      {
        name: Platform.LinkedIn,
        views: 75,
        engagement: 3,
        notes: 'يحتاج محتوى مهني لرفع التفاعل',
        color: '#0A66C2',
        analysisPoints: [
          'بداية جيدة في مرات الظهور.',
          'التفاعل قليل ويحتاج محتوى متخصص.',
          'الأنسب له: إنجازات – قصص نجاح – محتوى مهني.'
        ]
      }
    ],
    generalConclusion: {
      tiktok: 'أقوى منصة هذا الربع.',
      facebook: 'تحسن كبير في متوسط وقت المشاهدة.',
      instagram: 'نمو مستمر وجذب جمهور جديد.',
      linkedin: 'يحتاج خطة محتوى احترافية لرفع التفاعل.'
    }
  },
  {
    id: 'Q4',
    name: 'الربع الرابع (Q4)',
    totalViews: '0',
    topPlatform: Platform.TikTok,
    platformsManaged: 0,
    keyInsight: 'لا توجد بيانات متاحة لهذا الربع',
    platforms: createEmptyPlatforms(),
    generalConclusion: EMPTY_CONCLUSION
  }
];
