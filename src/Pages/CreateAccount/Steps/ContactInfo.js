import React from 'react';
import { useStepperContext } from '../../../Components/Components.Nahid/StepperContext';



const ContactInfo = () => {
    const { CAData, setCAData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCAData({ ...CAData, [name]: value });
      };

    // console.log(user);

    return (
        <div className='flex flex-col md:flex-row justify-center w-full items-center p-5 gap-3 mx-auto'>
            <div className="flex flex-col w-full md:w-3/6 items-center justify-center gap-3">
                <img className='object-cover p-3 w-44' src="https://i.ibb.co/TLs3WLg/Logo-Header.png" alt="" />
                <img className='object-cover p-3 w-full' src="https://i.ibb.co/mH71jkt/Register.png" alt="" />
            </div>
            <div className="text-left w-full md:w-3/6 mx-auto">
                <h3 className="font-semibold">Please enter your contact information:</h3>
                <div className="space-y-7 w-4/5 h-full mt-10 py-7">
                    <div className="relative z-0 my-2">

                        <input placeholder=" " required name="phone" onChange={handleChange} value={CAData["phone"] || ""} type="number" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
                        <label for="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone</label>
                    </div>
                    <div className="relative z-0 my-2">

                        <input placeholder=" " required  name="email" onChange={handleChange} value={CAData["email"] || ""} type="email" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" />
                        <label for="floating_standard" className="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;