const Input = (props) => {
  const { type = 'text', placeholder = 'dari input', style = 'w-full p-1 rounded' } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style}
    />
  );
};

export default Input;
