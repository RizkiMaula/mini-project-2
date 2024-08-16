import Button from '../Elements/Button';
import Input from '../Elements/Input';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import InputPass from '../Elements/InputPass';
import ButtonAuthAlternate from '../Elements/ButtonAuthAlternate';

const Auth = (props) => {
  const {
    text = 'dari Auth',
    ask = `haven't an account?`,
    error = 'liat error disini',
    event,
    typeUser,
    textCheck,
    textDirect = 'dari direct',
    placeholder = 'dari auth',
    style = 'w-full border-2 border-red-500',
    color,
    direct,
    alternate,
    eventInput,
    eventPass,
    eventButton,
  } = props;
  return (
    <div className="flex flex-col lg:w-[35.75rem] lg:h-[36.75rem] md:w-[33.75rem] md:h-[34.75rem] sm:w-[31.75rem] sm:h-[32.75rem] bg-white rounded-xl text-[#212121]">
      {/* Title */}
      <div className="flex flex-col w-full h-[6.25rem] gap-[1rem]">
        <h1 className="text-[2.5rem] font-bold text-center">{text}</h1>
        <p className="text-[1rem] text-center">{error}</p> {/* kalo ada pesan error, tampilkan pesan error */}
      </div>

      {/* Input */}
      <div className="flex flex-col gap-[2.5rem] ">
        <div className="flex flex-col gap-[1.5rem] justify-center items-center">
          <Input
            event={eventInput}
            type={typeUser}
            placeholder={placeholder}
            style="w-[85%] border-2 border-[#79747E] h-[2.5rem]"
          />
          <InputPass
            event={eventPass}
            placeholder={placeholder}
            style="w-[85%] border-2 border-[#79747E] h-[2.5rem] "
          />
          <span className="flex items-center gap-3 text-[0.875rem] w-[85%]">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
            />
            <label htmlFor="remember-me">{textCheck}</label>
          </span>
        </div>
        {/* Button and ask */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <Button
            event={eventButton}
            bgColor={color}
            text={text}
          />
          <p className="text-[0.875rem]">
            {ask}{' '}
            <Link
              to={direct}
              className="text-blue-500 hover:text-blue-800"
            >
              {textDirect}
            </Link>
          </p>
        </div>

        {/* Alternate Login */}
        <div className="flex flex-col gap-3 text-center">
          <p className="text-[#313131]">{alternate}</p>
        </div>
        <div className="flex justify-center gap-3 lg:text-[2.32rem] md:text-[1.8rem] sm:text-[1.5rem] text-center">
          <ButtonAuthAlternate icon={faFacebook} />
          <ButtonAuthAlternate icon={faGoogle} />
          <ButtonAuthAlternate icon={faApple} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
