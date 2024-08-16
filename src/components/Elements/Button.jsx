const Button = (props) => {
  const { text = '....', bgColor = 'bg-red-500', event } = props;
  return (
    <button
      onClick={event}
      className={`${bgColor} rounded-[0.25rem] p-1 text-white w-[85%]`}
    >
      {text}
    </button>
  );
};

export default Button;
