interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      className="transition-transform hover:scale-125 px-8 py-4"
      onClick={onClick}
    >
      <span className="text-center">{content}</span>
    </button>
  );
};

export default Button;
