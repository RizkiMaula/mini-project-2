import InnerContainer from '../components/Fragments/InnerContainer';
import OuterContainer from '../components/Fragments/OuterContainer';
import InputText from '../components/Fragments/InputText';
import Button from '../components/Elements/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <h1 className="text-3xl font-bold text-center text-white">Register</h1>
        <hr className="w-full" />
        <form
          action=""
          method="get"
          className="flex flex-col gap-3"
        >
          <InputText
            textSize="text-[0.8rem]"
            label="Username"
            textType="email"
            textPlaceholder="example@mail.com"
          />
          <InputText
            textSize="text-[0.8rem]"
            label="Password"
            textType="Password"
            textPlaceholder="Password"
          />
          <InputText
            textSize="text-[0.8rem]"
            label="Confirm Password"
            textType="Password"
            textPlaceholder="Password"
          />
          <Button
            bgColor="bg-blue-500"
            text="Register"
          />
        </form>
      </InnerContainer>
      <p>
        already have an account?{' '}
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-800"
        >
          Login
        </Link>
      </p>
    </OuterContainer>
  );
};

export default Register;
