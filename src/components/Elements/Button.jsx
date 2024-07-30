const Button = (props) => {
  const { text = '....', bgColor = 'bg-red-500' } = props;
  return <button className={`${bgColor} rounded-xl w-full p-3 text-white`}>{text}</button>;
};

export default Button;
