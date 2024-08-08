import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Square = (props) => {
  const { icon = faCheck, bgColor = 'bg-gray-500', txtColor = 'white', logoColor = 'text-green-600', text = '....', num = 99 } = props;
  return (
    <div className={`flex flex-col items-center ${bgColor} ${txtColor} justify-center w-[10rem] h-[5rem] border-2 border-black rounded-xl`}>
      <h1>
        {text}{' '}
        <FontAwesomeIcon
          className={logoColor}
          icon={icon}
        />
      </h1>
      <h2>{num}</h2>
    </div>
  );
};

export default Square;
