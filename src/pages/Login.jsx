import { Link } from 'react-router-dom';
import InputText from '../components/Fragments/InputText';
import Title from '../components/Elements/Title';
import Button from '../components/Elements/Button';
import InnerContainer from '../components/Fragments/InnerContainer';
import OuterContainer from '../components/Fragments/OuterContainer';

const Login = () => {
  return (
    <OuterContainer>
      <InnerContainer>
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
      </InnerContainer>
      <p>
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-800"
        >
          Register
        </Link>
      </p>
    </OuterContainer>
  );
};

export default Login;
