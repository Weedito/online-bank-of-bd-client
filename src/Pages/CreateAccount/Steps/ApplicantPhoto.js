import React, { useState } from 'react';
import { useStepperContext } from '../../../Components/Components.Nahid/StepperContext';
import Webcam from "react-webcam";
import { toast } from 'react-toastify';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const ApplicantPhoto = () => {
    const [acImage, setAcImage] = useState('');

    const { CAData, setCAData } = useStepperContext();
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        });

    // console.log(image);

    if (CAData?.ahcpimage?.length > 10) {
        toast("Image Upload Succesfull");
    }

    // imgbb api key
    const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

    // handle Update Profile

    const handleFileUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    CAData["ahupimage"] = img;
                    setAcImage(img);
                }
            })

    }


    const handleCaptureUpload = () => {
        CAData["ahcpimage"] = image;
        toast.success("upload Capture Image")
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCAData({ ...CAData, [name]: value });
    };

    console.log(CAData);
    return (
        <div className="">
            <h3 className="font-semibold text-md md:text-xl lg:text-2xl py-7 text-center">Please Give Your Image Info-</h3>

            <div className="flex flex-col md:flex-row justify-center w-full items-center p-5 gap-3 mx-auto">

                <div className="flex flex-col w-full md:w-3/6 items-center justify-center gap-3">
                    <div className="space-y-7 w-full md:w-4/5 py-7 px-5">
                        <div className="mb-3 w-full lg:w-96">
                            <label className="text-xs">Enter Account Holder Image Link</label>
                            <input required name="ahimage" onChange={handleChange} value={CAData["ahimage"] || ""} type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlInput1" placeholder="Enter Account Holder Image Link" />
                            <span className="text-muted text-xs text-orange-600">Upload image in (imgbb) & Paste Link Here</span>
                        </div>
                        <div className="mb-3 w-full lg:w-96">
                            <label className="text-xs">Upload Account Holder Image</label>
                            {
                                acImage === '' ?
                                    <div required name="ahupimage" onChange={handleFileUpload} value={CAData['ahupimage'] || ""} className="flex justify-center items-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 600x600px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div> :
                                    <div className="h-32 w-full rounded">
                                        <img src={acImage} alt="" className="object-cover h-full rounded" />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal px-5">OR</div>
                <div className="flex flex-col gap-3 px-5 text-left w-full md:w-3/6 items-center justify-center mx-auto">
                    <div className="">
                        {
                            image !== '' ?
                            <div className="h-40 w-full rounded">
                                <img src={image} alt="" className="object-cover h-full rounded" />
                            </div> :
                            <div className="h-40 w-full rounded">
                                <img src="https://i.ibb.co/mNqpbdt/photo-camera-PNG101598.png" alt="" className="object-cover h-full rounded" />
                            </div>
                        }
                    </div>
                    <div className="space-y-7 w-full md:w-4/5 mx-auto flex justify-center items-center py-7">
                        {/* <!-- The button to open modal --> */}
                        <label htmlFor="my-modal-3" className="btn modal-button">Capture Image</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <div className="webcam-container py-20 mx-auto w-full">
                                    <div className="webcam-img m-5">

                                        {image === '' ? <Webcam
                                            audio={false}
                                            height={250}
                                            width={250}
                                            className={`rounded-xl border-2 border-rose-700 flex mx-auto`}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            videoConstraints={videoConstraints}
                                        /> : <img className={`rounded-xl border-2 border-rose-700 flex mx-auto`} src={image} alt="" />}
                                    </div>

                                    <div className="ImageCam text-center">

                                        {image !== '' ?
                                            <div className="flex gap-2 justify-center">
                                                <button variant="contained" color="secondary" size="small" onClick={(e) => {
                                                    e.preventDefault();
                                                    setImage('');
                                                }}
                                                    className="webcam-btn btn btn-accent">
                                                    Retake Image</button>
                                                <button required name="ahcpimage" onClick={handleCaptureUpload} value={CAData["ahcpimage"] || ""} variant="contained" color="secondary" size="small"
                                                    className="webcam-btn btn btn-accent">
                                                    Upload Image</button>
                                            </div>
                                            :
                                            <button variant="contained" color="secondary" size="small" onClick={(e) => {
                                                e.preventDefault();
                                                capture();
                                            }}
                                                className="webcam-btn btn btn-primary">Capture Image</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default ApplicantPhoto;