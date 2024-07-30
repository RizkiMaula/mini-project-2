const Label = (props) => {
  const { text = '....', classname = 'w-40 h-8 px-1 text-white' } = props;
  return <label className={classname}>{text}</label>;
};

export default Label;
