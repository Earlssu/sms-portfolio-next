// Career carousel data based on translation.json career projects

import { CarouselItem } from '@/app/career/types/carouselItem';

export const carouselItems: CarouselItem[] = [
  {
    id: 'xcore-system',
    title: '엑스코어시스템 (XCoreSystem)',
    num: '01',
    imageSrc: '/XCore.png',
    category: 'Blast',
    teamSize: 'FE 2 / BE 1',
  },
  {
    id: 'finter',
    title: '핀터 (Finter)',
    num: '02',
    imageSrc: '/Finter.png',
    category: 'Blast',
    teamSize: 'FE 3 / PM 1',
  },
  {
    id: 'pikble',
    title: '픽블 (Pikble)',
    num: '03',
    imageSrc: '/Pikble.png',
    category: 'Blast',
    teamSize: 'FE 1 / BE 1 / PM 1',
  },
  {
    id: 'candypay',
    title: '캔디페이 (CandyPay)',
    num: '04',
    imageSrc: '/CandyPay.png',
    category: 'Blast',
    teamSize: 'FE 2 / BE 1',
  },
  {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
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
    title: '워터리 (Watery)',
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
    title: '포트폴리오 웹사이트 (이전 버전)',
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
    title: "L'acier 남성 화장품 쇼핑몰 (L'acier)",
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
