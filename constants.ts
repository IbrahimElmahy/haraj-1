
import { Platform, QuarterData } from './types';

export const QUARTERS: QuarterData[] = [
  {
    id: 'AUG_NOV',
    name: 'أغسطس - نوفمبر 2025',
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
        newFollowers: 4500,
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
        views: 2800,
        engagement: 75,
        profileVisits: 717,
        newFollowers: 15,
        notes: 'نمو هائل في الزيارات (+124%)',
        color: '#1877F2',
        analysisPoints: [
          'قفزة كبيرة في المشاهدات (+283%) مقارنة بالفترة السابقة.',
          'عدد زيارات البروفايل (717) مرتفع جدًا مقارنة بعدد المشاهدات.',
          'تحسن التفاعل بنسبة (+134%)، والنقرات على الروابط (+50%).',
          'التحدي الحالي: تحويل الزوار إلى متابعين (8 متابعين فقط).'
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
        newFollowers: 3,
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
      facebook: 'نمو ممتاز في الوصول والزيارات، يحتاج تركيز على كسب المتابعين.',
      instagram: 'نمو مستمر وجذب جمهور جديد.',
      linkedin: 'يحتاج خطة محتوى احترافية لرفع التفاعل.'
    }
  }
];
