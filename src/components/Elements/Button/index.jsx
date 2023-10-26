const Button = (props) => {
  const { children, className, onClick = () => {}, type = "button" } = props;
  return (
    <button
      type={type}
      className={`text-sm text-white font-bold rounded py-2 px-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
