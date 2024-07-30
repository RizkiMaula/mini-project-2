import { Link } from 'react-router-dom';
import InputText from '../components/Fragments/InputText';
import Title from '../components/Elements/Title';
import Button from '../components/Elements/Button';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen py-0 px-auto bg-slate-300">
      <div className="flex flex-col items-center border-2 border-black w-[400px] h-[230px] rounded-xl bg-blue-400 gap-5 border-3 p-3">
        <Title
          text="Login"
          classname="text-xl font-bold text-center text-white"
        />
        <hr className="w-full" />
        <form
          action=""
          method="get"
          className="flex flex-col gap-3"
        >
          <InputText
            label="Username"
            textType="email"
            textPlaceholder="example@mail.com"
          />
          <InputText
            label="Password"
            textType="Password"
            textPlaceholder="Password"
          />
          <Button
            text="Login"
            bgColor="bg-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
