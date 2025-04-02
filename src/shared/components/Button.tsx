interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <div className="cursor-pointer border-2 border-white px-8 py-4 w-1/6 flex justify-center items-center flex-1">
      {content}
    </div>
  );
};

export default Button;
