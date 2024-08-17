import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import useUserDetails from '../hooks/useUserDetails';

const UserDetails = () => {
  const { user } = useUserDetails();

  // console.log('user', user); //buat cek users

  // 3. destructuring object yang dari api
  const { id, first_name, last_name, email, avatar } = user;

  // 4. tampilin data user (render*) berdasarkan id
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* card */}
      <div className="z-10 flex flex-col items-center justify-center gap-3 p-4 bg-[#5a84df] bg-opacity-[5%] w-[35.75rem] h-[40.5rem] border-black border-3 rounded-[39px] ">
        <img
          className="w-[15rem] h-[15rem] rounded-full"
          src={avatar}
          alt="user"
        />
        <div className="flex flex-col items-center justify-center gap-[0.5rem]">
          <h2 className="text-3xl font-bold">
            {first_name} {last_name}
          </h2>
          <p className="text-xl">{email}</p>
        </div>
        <p className="text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae aspernatur velit ad error tempore impedit ut ab dolorem laudantium.</p>
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-bold text-[2.1rem]">Contact</h3>
          <div className="flex gap-4 w-[9rem] justify-between text-[1.4rem]">
            <Link
              to={'https://facebook.com'}
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              to={'https://x.com'}
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link
              to={'https://instagram.com'}
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              to={'https://Linkedin.com'}
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </div>
      <Link
        to={'/users'}
        className="font-bold text-blue-600 hover:text-blue-800"
      >
        {' '}
        <FontAwesomeIcon icon={faArrowLeft} /> Back To Users Menu
      </Link>
    </div>
  );
};

export default UserDetails;
