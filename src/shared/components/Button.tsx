interface ButtonProps {
  content: string;
  onClick?: () => void;
  isWhiteText?: boolean;
}

const Button: React.FC<ButtonProps> = ({ content, onClick, isWhiteText = true }) => {
  const textColorClass = isWhiteText ? 'text-white' : 'text-black';
  
  return (
    <button
      className={`transition-transform hover:scale-125 px-8 py-4 ${textColorClass}`}
      onClick={onClick}
    >
      <span className="text-center">{content}</span>
    </button>
  );
};

export default Button;
