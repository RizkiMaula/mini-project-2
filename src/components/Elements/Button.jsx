const Button = (props) => {
  const { text = 'dari button', style = 'bg-red-500 w-full p-3 text-white' } = props;
  return <button className={style}>{text}</button>;
};

export default Button;
