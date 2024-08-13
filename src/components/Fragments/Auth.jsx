import Button from '../Elements/Button';
import Input from '../Elements/Input';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import InputPass from '../Elements/InputPass';

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
    <div className="flex flex-col w-[32rem] h-[37.563rem] gap-[2.188rem]">
      {/* Title */}
      <div className="flex flex-col w-full h-[6.25rem] gap-[1rem]">
        <h1 className="text-[2.5rem] font-bold">{text}</h1>
        <p className="text-[1rem]">{error}</p> {/* kalo ada pesan error, tampilkan pesan error */}
      </div>

      {/* Input */}
      <div className="flex flex-col gap-[2.5rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <Input
            event={eventInput}
            type={typeUser}
            placeholder={placeholder}
            style="w-full border-2 border-[#79747E] h-[2.5rem]"
          />
          <InputPass
            event={eventPass}
            placeholder={placeholder}
            style="w-full border-2 border-[#79747E] h-[2.5rem] "
          />
          <span className="flex items-center gap-3 text-[0.875rem]">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
            />
            <label htmlFor="remember-me">{textCheck}</label>
          </span>
        </div>
        {/* Button and ask */}
        <div className="flex flex-col gap-3 text-center">
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
        <div className="flex flex-col gap-3 text-center">
          <p className="text-[#313131]">{alternate}</p>
        </div>
        <div className="flex justify-center gap-3 text-[2.32rem] text-center">
          <Link className="text-blue-500 hover:text-blue-800 w-[10rem] h-[3.5rem] border-2 border-[#515DEF] rounded[4px]">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link className="text-blue-500 hover:text-blue-800 w-[10rem] h-[3.5rem] border-2 border-[#515DEF] rounded-[4px]">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <Link className="text-blue-500 hover:text-blue-800 w-[10rem] h-[3.5rem] border-2 border-[#515DEF] rounded-[4px]">
            <FontAwesomeIcon icon={faApple} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
