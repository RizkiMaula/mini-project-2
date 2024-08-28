import Square from '../Elements/Square';
import { faCheck, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import useUserAPI from '../../hooks/useUserAPI';

const Dashboard = () => {
  const { total } = useUserAPI();

  return (
    <div className="flex justify-center">
      <div className="flex gap-3 w-[65%] items-center justify-between">
        <Square
          icon={faUser}
          text="User Registered"
          num={total}
          bgColor="bg-[#EFE0FD]"
          logoColor="text-black"
        />
        <Square
          icon={faCheck}
          text="Active User"
          num={total - total / 2}
          bgColor="bg-[#C1DEFE]"
        />
        <Square
          icon={faX}
          text="Inactive User"
          bgColor="bg-[#FCF4D7]"
          num={total - total / 2}
          logoColor="text-red-600"
        />
      </div>
    </div>
  );
};

export default Dashboard;
