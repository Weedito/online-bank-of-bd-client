import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Zoom } from 'react-reveal';
import { NavLink } from 'react-router-dom';
import useAccount from '../../Components/Components.Nahid/Hooks/useAccount';
import UseAdmin from '../../Components/Components.Nahid/Hooks/useAdmin';
import { AboutDropdown, CommitteeDropdown, Navigation, OurBankingDropdown, ProductsDropdown } from '../../Components/Components.Nahid/NavbarData';
import auth from '../../firebase.init';

const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin();
    const { myAccount } = useAccount();
    const account = myAccount?.length > 0;

    // console.log(myAccount);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <nav>
            <ul className='flex space-x-2 capitalize text-[15px]'>

                {
                    Navigation.map((item, idx) => {

                        if (item?.name === 'About US') {
                            return (
                                <li className={`${bg && 'text-black'} dropdown text-xl font-semibold hover:text-secondary cursor-pointer`}>
                                    <NavLink
                                        to="#"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > About US  <FontAwesomeIcon className='pl-1' icon={faCaretDown} />  </NavLink>
                                    <Zoom>
                                        <ul
                                            tabIndex={0}
                                            className="mt-3 p-2 border-y-2 border-red-500 shadow menu menu-compact absolute dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-44"
                                        >
                                            {
                                                AboutDropdown.map((item, idx) => {

                                                    if (item.name === "Committee") {
                                                        return (
                                                            <li className='dropdown-hover dropdown-right'>
                                                                <NavLink className="flex items-center" to="#"><Zoom>Committee <FontAwesomeIcon className='' icon={faCaretRight} /> </Zoom></NavLink>
                                                                <Zoom>
                                                                    <ul
                                                                        tabIndex={0}
                                                                        className="mt-3 p-2 shadow border-y-2 border-red-500 menu menu-compact absolute dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-fit"
                                                                    >
                                                                        {
                                                                            CommitteeDropdown.map((item, idx) => {
                                                                                return (
                                                                                    <li key={idx}>
                                                                                        <NavLink to={item.href}>{item.name}</NavLink>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }

                                                                    </ul>
                                                                </Zoom>
                                                            </li>
                                                        )
                                                    }

                                                    return (
                                                        <li key={idx}>
                                                            <NavLink to={item.href}><Zoom>{item.name}</Zoom></NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Zoom>

                                </li>
                            )
                        }


                        if (item.name === "Products") {
                            return (
                                <li className={`${bg && 'text-black'} dropdown text-xl font-semibold hover:text-secondary cursor-pointer`}>
                                    <NavLink
                                        to="#"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > Products <FontAwesomeIcon className='pl-1' icon={faCaretDown} />  </NavLink>

                                    <Zoom>
                                        <ul
                                            tabIndex={0}
                                            className="mt-3 p-2 shadow border-y-2 border-red-500 menu menu-compact absolute dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-44"
                                        >
                                            {
                                                ProductsDropdown.map((item, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <NavLink to={item.href}>{item.name}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Zoom>

                                </li>
                            )
                        }

                        if (item.name === "Our Banking") {
                            return (
                                <li className={`${bg && 'text-black'} dropdown text-xl font-semibold hover:text-secondary cursor-pointer`}>
                                    <NavLink
                                        to="#"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > Our Banking <FontAwesomeIcon className='pl-1' icon={faCaretDown} />  </NavLink>
                                    <Zoom>
                                        <ul
                                            tabIndex={0}
                                            className="mt-3 p-2 shadow border-y-2 border-red-500 menu menu-compact absolute dropdown-content gap-2 bg-base-100 text-gray-500 rounded-box w-44"
                                        >
                                            {
                                                OurBankingDropdown.map((item, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <NavLink to={item.href}>{item.name}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Zoom>
                                </li>
                            )
                        }


                        if (item.name === 'Open Account') {
                            return (
                                (user && !account && !admin) && <li key={idx} className={`${bg && 'text-black'} text-xl font-semibold hover:text-secondary cursor-pointer`}>

                                    <NavLink
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > {item.name} </NavLink>
                                </li>
                            )
                        }

                        if (item.name === 'Dashboard') {
                            return (
                                (user && account && !admin) && <li key={idx} className={`${bg && 'text-black'} text-xl font-semibold hover:text-secondary cursor-pointer`}>

                                    <a href={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > {item.name} </a>
                                </li>
                            )
                        }


                        if (item.name === 'Control Panel') {
                            return (
                                (user && admin) && <li key={idx} className={`${bg && 'text-black'} text-xl font-semibold hover:text-secondary cursor-pointer`}>

                                    <a href={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                    > {item.name} </a>
                                </li>
                            )
                        }


                        return (
                            <li key={idx} className={`${bg && 'text-black'} text-xl font-semibold hover:text-secondary cursor-pointer`}>

                                <NavLink
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="flex rounded px-4 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                > {item.name} </NavLink>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    );
};

export default Navbar;