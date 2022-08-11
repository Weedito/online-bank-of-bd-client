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
// import ApplicationPreview from "./Steps/ApplicationPreview";



const CreateAccount = () => {


    const steps = [
        "Contact Information",
        "Account Information",
        "Personal Details",
        "Applicant Photo",
        "Application Preview",
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
                return <ApplicationPreview currentStep={currentStep} steps={steps} />;
            case 6:
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