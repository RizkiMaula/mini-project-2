const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text = '....', textSize = 'text-[1rem]' } = props;
  return <label className={` w-40 h-8 px-1 text-white ${textSize}`}>{text}</label>;
};

export default Label;
