import { Platform, QuarterData } from './types';

export const QUARTERS: QuarterData[] = [
  {
    id: 'Q1',
    name: 'الربع الأول (Q1)',
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
    id: 'Q2',
    name: 'الربع الثاني (Q2)',
    totalViews: '+1.6M',
    topPlatform: Platform.TikTok,
    platformsManaged: 4,
    keyInsight: 'استمرار هيمنة تيك توك مع تحسن ملحوظ في انستغرام',
    platforms: [
      {
        name: Platform.TikTok,
        views: 1550000,
        profileVisits: 13000,
        engagement: 18000,
        notes: 'زيادة مستمرة',
        color: '#000000',
        analysisPoints: ['الاستمرار في الصدارة', 'زيادة البث المباشر']
      },
      {
        name: Platform.Facebook,
        views: 30000,
        engagement: 120,
        notes: 'ثبات في الأداء',
        color: '#1877F2',
        analysisPoints: ['الحفاظ على الجمهور الحالي']
      },
      {
        name: Platform.Instagram,
        views: 15000,
        profileVisits: 500,
        engagement: 400,
        newFollowers: 150,
        notes: 'نمو كبير بعد تغيير الاستراتيجية',
        color: '#E4405F',
        analysisPoints: ['نجاح حملة الريلز المكثفة']
      },
      {
        name: Platform.LinkedIn,
        views: 500,
        engagement: 20,
        notes: 'بداية التحسن',
        color: '#0A66C2',
        analysisPoints: ['تحسن طفيف بعد نشر قصص النجاح']
      }
    ],
    generalConclusion: {
      tiktok: 'ما زال في الصدارة.',
      facebook: 'أداء مستقر.',
      instagram: 'نجم الربع الصاعد.',
      linkedin: 'بداية تحرك الأرقام.'
    }
  }
];