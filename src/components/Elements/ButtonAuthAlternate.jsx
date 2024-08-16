import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ButtonAuthAlternate = (props) => {
  const { icon } = props;
  return (
    <Link className="text-blue-500 hover:text-blue-800 lg:w-[10rem] lg:h-[3.5rem] md:w-[9rem] md:h-[2.5rem] sm:w-[8rem] sm:h-[2.5rem] border-2 border-[#515DEF] rounded-[4px] flex items-center justify-center ">
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default ButtonAuthAlternate;
