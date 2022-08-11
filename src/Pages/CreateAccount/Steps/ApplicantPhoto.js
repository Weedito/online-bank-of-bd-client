import React from 'react';
import { useStepperContext } from '../../../Components/Components.Nahid/StepperContext';
import WebcamCapture from '../../../Components/Components.Nahid/Webcam';

const ApplicantPhoto = () => {
    const { CAData, setCAData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCAData({ ...CAData, [name]: value });
    };

    console.log(CAData);
    return (
        <div className="">
            <h3 className="font-semibold text-md md:text-xl lg:text-2xl py-7 text-center">Please Give Your Image Info-</h3>


            <div className='flex flex-col md:flex-row justify-center w-full items-center p-5 gap-3 mx-auto'>
                <div className="flex flex-col w-full md:w-3/6 items-center justify-center gap-3">
                    <div className="space-y-7 w-4/5 py-7">
                        <div class="mb-3 w-full lg:w-96">
                            <label className="text-xs">Enter Account Holder Image Link</label>
                            <input required name="ahimage" onChange={handleChange} value={CAData["ahimage"] || ""} type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlInput1" placeholder="Enter Account Holder Image Link" />
                            <span className="text-muted text-xs text-orange-600">Upload image in (imgbb) & Paste Link Here</span>
                        </div>
                        <div class="mb-3 w-full lg:w-96">
                            <label className="text-xs">Upload Account Holder Image</label>
                            <div class="flex justify-center items-center w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 600x600px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left w-full md:w-3/6 flex items-center justify-center mx-auto">

                    <div className="space-y-7 w-full md:w-4/5 mx-auto flex justify-center items-center py-7">
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-3" class="btn modal-button">Capture Image</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <WebcamCapture />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default ApplicantPhoto;