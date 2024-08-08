const InnerContainer = (props) => {
  const { layout = 'flex flex-col', children, width = 'w-[20rem]', height = 'h-[15rem]' } = props;
  return <div className={`${layout} items-center justify-center rounded-xl ${width} ${height} bg-blue-400 gap-5 border-3 p-3`}>{children}</div>;
};

export default InnerContainer;
