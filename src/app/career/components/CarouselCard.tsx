import './CarouselCard.css';

interface CarouselCardProps {
  index: number;
  active: number;
  total: number;
  title?: string;
  num?: string;
  imageSrc?: string;
  onClick?: () => void;
}

const CarouselCard = ({
  index,
  active,
  total,
  title = 'Sydney',
  num = '04',
  imageSrc = 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=',
  onClick,
}: CarouselCardProps) => {
  // 각 카드의 위치와 스타일을 계산
  const offset = index - active; // 현재 활성 카드로부터의 거리
  const absOffset = Math.abs(offset);

  // CSS 변수로 전달할 값들
  const style: React.CSSProperties & {
    '--index': number;
    '--active': number;
    '--offset': number;
    '--abs-offset': number;
    '--total': number;
  } = {
    '--index': index,
    '--active': active,
    '--offset': offset,
    '--abs-offset': absOffset,
    '--total': total,
  };

  return (
    <div className="carousel-item" style={style} onClick={onClick}>
      <div className="carousel-box">
        <div className="title">
          {title}
          <p className={'text-white/80 text-sm mt-2'}>클릭하여 자세히 보기</p>
        </div>
        <div className="num">{num}</div>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default CarouselCard;
