const InnerContainer = (props) => {
  const { layout = 'flex flex-col', children } = props;
  return <div className={`${layout} items-center justify-center w-[20rem] h-[15rem] rounded-xl bg-blue-400 gap-5 border-3 p-3`}>{children}</div>;
};

export default InnerContainer;
