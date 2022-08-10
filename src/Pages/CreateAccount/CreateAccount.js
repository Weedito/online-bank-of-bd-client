import React, { useState } from "react";
import { UseContextProvider } from "../../Components/Components.Nahid/StepperContext";
import Stepper from "./Controls/Stepper";
import StepperControl from "./Controls/StepperControl";
import Complete from "./Steps/Complete";
import ContactInfo from "./Steps/ContactInfo";
import AccountInfo from "./Steps/AccountInfo";
import PersonalDetails from "./Steps/PersonalDetails";
import ApplicantPhoto from "./Steps/ApplicantPhoto";
import ApplicationPreview from "./Steps/ApplicationPreview";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { toast } from "react-toastify";
// import Loading from "../../../../Components/Components.Nahid/Loading";
// import auth from "../../../../firebase.init";
// import AllCountry from "../../../../Hook/AllCountry";



const CreateAccount = () => {


    const steps = [
        "Contact Information",
        "Account Information",
        "Personal Details",
        "Applicant Photo",
        "Complete",
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <ContactInfo />;
            case 2:
                return <AccountInfo />;
            case 3:
                return <PersonalDetails />;
            case 4:
                return <ApplicantPhoto />;
            case 5:
                return <Complete />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="bg-slate-100">
            <div className="h-full w-full">
                <div className="card-body w-full">
                    <h1 className="text-primary text-2xl font-bold text-center">
                        Application for Account Opening
                    </h1>

                    {/* <form action="" onSubmit={createAccount}>

                            <div className="flex flex-wrap justify-between">

                                <div className="form-control flex-1 mr-2">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input required type="text" placeholder="Legal Name" className="input input-bordered" ref={legaleNameRef} />
                                </div>
                                <div className="form-control flex-1 ml-2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input required type="number" placeholder="+880 12345678" className="input input-bordered" ref={phoneRef} />
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between items-center">


                                <div className="form-control text-left flex-1 mr-2">
                                    <label className="label">
                                        <span className="label-text">Birthday</span>
                                    </label>

                                    <input type="date" ref={dateOfBirthRef} id="birthday" name="birthday" className="input input-bordered" />
                                </div>

                                <div className="form-control mr-2">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>

                                    <select ref={genderRef} className="select w-full max-w-xs">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                            </div>


                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Your Country</span>
                                </label>

                                <select ref={countryRef} className="select w-full max-w-xs">
                                    {
                                        allCountry.map(country => <option>{country?.name?.common}</option>)
                                    }
                                </select>
                            </div>

                            <div className="flex flex-wrap justify-between items-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} defaultValue={user?.email} type="email" placeholder="Phone" className="input input-bordered" />
                                </div>

                                <div className="form-control flex-1 ml-2">
                                    <label className="label">
                                        <span className="label-text">Your NID Number</span>
                                    </label>
                                    <input required type="number" placeholder="NID Number" className="input input-bordered" ref={nidRef} />
                                </div>
                            </div>

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input ref={addressRef} type="text" placeholder="Type your address" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-primary text-white " value="Create Account" />
                            </div>

                        </form> */}

                    {/* <form onSubmit={createAccount} className='space-y-8 w-full mx-auto lg:w-4/5' >
                        <div className='flex flex-col lg:flex-row gap-8'>
                            <input required name='name' className='input w-full px-5' type='text' placeholder='Your name' />
                            <input required name='email' className='input w-full px-5' type='email' placeholder='Your email' />
                        </div>
                        <div className="">
                            <input required name='subject' className='input w-full px-5' type='text' placeholder='Subject' />
                        </div>
                        <div className="">
                            <textarea required name='message' className='textarea w-full px-5 resize-none' placeholder='Your message'></textarea>
                        </div>
                        <input type='submit' value="Create Account" className='btn btn-lg bg-green-700 text-white hover:bg-secondary-hover' />
                    </form> */}

                    {/* Stepper */}
                    <div className="pb-5 px-5 lg:px-0 w-full lg:w-4/5 mx-auto">
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/5">
                        {/* Display Step */}
                        <div className="horizontal container mt-5 ">

                            <div className="my-10 p-10 ">
                                <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                            </div>
                        </div>

                        {/* navigation button */}
                        {currentStep !== steps.length && (
                            <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CreateAccount;