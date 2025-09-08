interface ButtonProps {
  content: string;
  onClick?: () => void;
  isWhiteText?: boolean;
}

const Button: React.FC<ButtonProps> = ({ content, onClick, isWhiteText = true }) => {
  const textColorClass = isWhiteText ? 'text-white' : 'text-black';
  
  return (
    <button
      className={`transition-transform hover:scale-125 active:scale-95 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 ${textColorClass} text-sm sm:text-base`}
      onClick={onClick}
    >
      <span className="text-center">{content}</span>
    </button>
  );
};

export default Button;
