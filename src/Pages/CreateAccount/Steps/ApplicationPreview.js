import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import Loading from '../../../Components/Components.Nahid/Loading';
import { useStepperContext } from '../../../Components/Components.Nahid/StepperContext';
import auth from '../../../firebase.init';

const ApplicationPreview = ({ currentStep, steps }) => {
    const [submit, setSubmit] = useState(false);
    const { CAData } = useStepperContext();
    const [user, loading] = useAuthState(auth);
    const accno = Math.floor(Math.random() * 1000000000000);
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    if (loading) {
        return <Loading />
    }

    const handleCreateAccount = () => {
        const name = CAData?.name;
        const phone = parseFloat(CAData?.phone);
        const accEmail = CAData?.email;
        const NIDno = parseFloat(CAData?.NIDno);
        const NIDFrontSide = CAData?.NIDFront;
        const NIDBackSide = CAData?.NIDBack;
        const DOB = CAData?.DOB;
        const ahimage = CAData?.ahimage;
        const AccNo = accno;
        const balance = parseFloat(CAData?.balance);
        const acpurpose = CAData?.acpurpose;
        const actype = CAData?.actype;
        const branch = CAData?.branch;
        const email = user?.email;
        const gender = CAData?.gender;
        const country = CAData?.country;
        const address = CAData?.address;

        const accountDetails = {
            name: name,
            phone: phone,
            email: email,
            NIDno: NIDno,
            NIDFrontSide: NIDFrontSide,
            NIDBackSide: NIDBackSide,
            DOB: DOB,
            ahimage: ahimage,
            AccNo: AccNo,
            balance: balance,
            acpurpose: acpurpose,
            actype: actype,
            branch: branch,
            accEmail: accEmail,
            gender: gender,
            country: country,
            address: address,
            OpeningDate: date,
        }

        Swal.fire({
            title: 'Are you sure to Submit Data?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Submit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/account', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(accountDetails)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId && data.acknowledged === true){
                            Swal.fire(
                                'Submitted!',
                                'Your Data has been Under Review.',
                                'success'
                            )
                            setSubmit(true)
                        }
                    })
            }
        })

    };

    // {(currentStep === steps.length - 1) && handleCreateAccount()}



    return (
        <div className="flex flex-col w-full mx-auto items-center justify-center h-full">
            <div class="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                <div className="w-full p-5 md:w-2/5 mx-auto">
                    <img class=" object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={CAData?.ahimage} alt="" />
                </div>
                <div class="p-6 w-full md:w-3/5 mx-auto flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{CAData?.name}</span></h5>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{CAData?.actype}</span></p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {accno}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {CAData?.balance}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {CAData?.email}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">NID Number: {CAData?.NIDno}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Phone: {CAData?.phone}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Date of Birth: {CAData?.DOB}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Gender: {CAData?.gender}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Country: {CAData?.country}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Address: {CAData?.address}</p>
                </div>
            </div>
            <button onClick={handleCreateAccount} disabled={submit} className={`${submit === true ? " cursor-not-allowed opacity-50 " : ""} cursor-pointer my-5 rounded-xl border-2 border-slate-300 bg-blue-500 text-white py-2 px-4 font-semibold uppercase transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white`}>
                Submit Your Data
            </button>
        </div>
    );
};

export default ApplicationPreview;