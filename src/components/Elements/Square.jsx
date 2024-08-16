import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Square = (props) => {
  const { icon = faCheck, bgColor = 'bg-gray-500', txtColor = 'white', logoColor = 'text-green-600', text = '....', num = 99 } = props;
  return (
    <div
      className={`flex flex-col items-center ${bgColor} ${txtColor} justify-center lg:w-[15rem] lg:h-[10rem] md:w-[13rem] md:h-[7rem] sm:w-[10rem] sm:h-[5rem] border-2 text-center border-black rounded-xl lg:text-xl md:text-[1.2rem] sm:text-[0.9rem]`}
    >
      <FontAwesomeIcon
        className={logoColor}
        icon={icon}
      />
      <h1>{text} </h1>
      <h2>{num}</h2>
    </div>
  );
};

export default Square;
