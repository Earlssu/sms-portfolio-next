interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      className=" hover:bg-red-300 border-2 border-white p-4 flex-1"
      onClick={onClick}
    >
      <span className="text-center">{content}</span>
    </button>
  );
};

export default Button;
