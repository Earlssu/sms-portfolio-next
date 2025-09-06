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
    id: 'watery',
    title: '워터리 (Watery)',
    num: '05',
    imageSrc: '/Watery.png', // 새로운 이미지 필요
  },
];

export default carouselItems;
