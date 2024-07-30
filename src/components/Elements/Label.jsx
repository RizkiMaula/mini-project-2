const Label = (props) => {
  const { text = '....', bgColor = 'bg-slate-500' } = props;
  return <label className={`w-40 h-8 text-white rounded-md ${bgColor}`}>{text}</label>;
};

export default Label;
