const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text = 'dari title', classname = 'w-40 h-8 px-1 text-white' } = props;
  return <h1 className={classname}>{text}</h1>;
};

export default Title;
