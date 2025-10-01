import {CarouselItem} from '@/app/career/types/carouselItem';

/**
 * Carousel 항목 기본 데이터
 * title은 다국어 지원을 위해 titleKey를 사용하여 translation에서 가져옵니다.
 */
export const carouselItems: CarouselItem[] = [
  {
    id: 'xcore-system',
    titleKey: 'carousel.titles.xcore-system',
    num: '01',
    imageSrc: '/XCore.png',
    category: 'Blast',
    teamSize: 'FE 2 / BE 1',
  },
  {
    id: 'finter',
    titleKey: 'carousel.titles.finter',
    num: '02',
    imageSrc: '/Finter.png',
    category: 'Blast',
    teamSize: 'FE 3 / PM 1',
  },
  {
    id: 'pikble',
    titleKey: 'carousel.titles.pikble',
    num: '03',
    imageSrc: '/Pikble.png',
    category: 'Blast',
    teamSize: 'FE 1 / BE 1 / PM 1',
  },
  {
    id: 'candypay',
    titleKey: 'carousel.titles.candypay',
    num: '04',
    imageSrc: '/CandyPay.png',
    category: 'Blast',
    links: [
      {
        title: 'Ios',
        url: 'https://apps.apple.com/kr/app/%EC%BA%94%EB%94%94%ED%8E%98%EC%9D%B4/id6463577769',
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=kr.co.candypay&hl=ko',
      },
    ],
    teamSize: 'FE 2 / BE 1',
  },
  {
    id: 'portfolio',
    titleKey: 'carousel.titles.portfolio',
    num: '05',
    imageSrc: '/Portfolio.png',
    category: 'Side Project',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/earlssu/sms-portfolio-next',
      },
    ],
    teamSize: '개인 프로젝트',
  },
  {
    id: 'watery',
    titleKey: 'carousel.titles.watery',
    num: '06',
    imageSrc: '/Watery.png',
    category: 'Side Project',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/MAKE-VALUE-GACHI/4_watery_front',
      },
    ],
    teamSize: 'FE 2 / BE 2 / 디자이너 1 / PM 1',
  },
  {
    id: 'portfolio-v1',
    titleKey: 'carousel.titles.portfolio-v1',
    num: '07',
    imageSrc: '/Portfolio-V1.png',
    category: 'Side Project',
    links: [
      { title: 'GitHub', url: 'https://github.com/earlssu/portfolio-project' },
    ],
    teamSize: '개인 프로젝트',
  },
  {
    id: 'lacier',
    titleKey: 'carousel.titles.lacier',
    num: '08',
    imageSrc: '/Lacier.png',
    category: 'Side Project',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/codestates-seb/seb41_main_002',
      },
    ],
    teamSize: 'FE 3 / BE 3',
  },
];

export default carouselItems;
