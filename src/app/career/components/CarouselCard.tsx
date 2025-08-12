interface CarouselCardProps {
  index: number;
  active: number;
  total: number;
  title?: string;
  num?: string;
  imageSrc?: string;
}

const CarouselCard = ({ 
  index, 
  active, 
  total, 
  title = "Sydney", 
  num = "04", 
  imageSrc = "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=" 
}: CarouselCardProps) => {
  // Calculate CSS custom properties dynamically
  const offset = index - active;
  const zIndex = total - Math.abs(offset);
  
  const style = {
    '--active': offset,
    '--zIndex': zIndex,
    '--items': total,
  } as React.CSSProperties;

  return (
    <div className="carousel-item" style={style}>
      <div className="carousel-box">
        <div className="title">{title}</div>
        <div className="num">{num}</div>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default CarouselCard;
