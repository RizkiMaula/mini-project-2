const InputPass = (props) => {
  const { style = `w-full p-1 rounded`, event } = props;
  return (
    <input
      onChange={event}
      type="password"
      placeholder="Password"
      className={style}
    />
  );
};

export default InputPass;
