const OuterContainer = (props) => {
  const { children } = props;
  return <div className="flex flex-col items-center justify-center h-screen gap-4 py-0 px-auto bg-slate-300">{children}</div>;
};

export default OuterContainer;
