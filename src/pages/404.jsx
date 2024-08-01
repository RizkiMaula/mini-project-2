const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-400">OOPS!</h1>
      <p className="my-5 text-xl">Unexpected error has occured</p>
      <p className="my-5 text-xl">404</p>
    </div>
  );
};

export default NotFound;
