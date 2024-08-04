const Input = (props) => {
  const { type = 'text', placeholder = 'dari input', style = 'w-full p-1 rounded', event } = props;
  return (
    <input
      onChange={event}
      type={type}
      placeholder={placeholder}
      className={style}
    />
  );
};

export default Input;
