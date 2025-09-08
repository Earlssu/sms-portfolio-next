// Career carousel data based on translation.json career projects

import { CarouselItem } from '@/app/career/types/carouselItem';

export const carouselItems: CarouselItem[] = [
  {
    id: 'xcore-system',
    title: '엑스코어시스템 (XCoreSystem)',
    num: '01',
    imageSrc: '/XCore.png',
  },
  {
    id: 'finter',
    title: '핀터 (Finter)',
    num: '02',
    imageSrc: '/Finter.png',
  },
  {
    id: 'pikble',
    title: '픽블 (Pikble)',
    num: '03',
    imageSrc: '/Pikble.png',
  },
  {
    id: 'candypay',
    title: '캔디페이 (CandyPay)',
    num: '04',
    imageSrc: '/CandyPay.png',
  },
  {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
    num: '05',
    imageSrc: '/Portfolio.png', // 새로운 이미지 필요
  },
  {
    id: 'watery',
    title: '워터리 (Watery)',
    num: '06',
    imageSrc: '/Watery.png', // 새로운 이미지 필요
  },
  {
    id: 'portfolio-v1',
    title: '포트폴리오 웹사이트 (이전 버전)',
    num: '07',
    imageSrc: '/Portfolio-V1.png', // 새로운 이미지 필요
  },
  {
    id: 'lacier',
    title: "L'acier 남성 화장품 쇼핑몰 (L'acier)",
    num: '08',
    imageSrc: '/Lacier.png', // 새로운 이미지 필요
  },
];

export default carouselItems;
