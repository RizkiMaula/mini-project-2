const Table = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logic } = props;
  return (
    <table className="w-full h-[3rem] text-center  border-collapse border-slate-500 ">
      <thead>
        <tr className="border-red-700 border-3">
          <th className="bg-[#2F80ED] bg-opacity-[20%] py-3 rounded-l-lg">Pic</th>
          <th className="bg-[#2F80ED] bg-opacity-[20%] py-3">Name</th>
          <th className="bg-[#2F80ED] bg-opacity-[20%] py-3">Email</th>
          <th className="bg-[#2F80ED] bg-opacity-[20%] py-3 rounded-r-lg">Action</th>
        </tr>
      </thead>
      <tbody>{logic}</tbody>
    </table>
  );
};

export default Table;
