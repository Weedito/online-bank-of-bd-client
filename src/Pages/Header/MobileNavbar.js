import React, { useState } from 'react';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// import navigation data
import { Navigation } from '../../Components.Nahid/Data';

// import framer
import { motion } from 'framer-motion';

// import Link
import { NavLink } from 'react-router-dom';


const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-dark'
      >
        <FontAwesomeIcon icon={faBars} className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer text-white absolute top-8 right-8'
        >
          <FontAwesomeIcon icon={faClose} className='w-8 h-8' />
        </div>
        {Navigation.map((item, idx) => {
          return (
              <li onClick={() => setIsOpen(false)} key={idx} className='mb-8 text-white'>
              <NavLink
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize focus:text-secondary hover:border-b-2'
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default MobileNavbar;