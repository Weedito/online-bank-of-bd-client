import { useState } from "react";
import { allCountry } from "../../../Components/Components.Nahid/Data";
import { useStepperContext } from "../../../Components/Components.Nahid/StepperContext";

export default function PersonalDetails() {

  const [nidFront, setNidFront] = useState('');
  const [NIDBack, setNidBack] = useState('');

  const { CAData, setCAData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCAData({ ...CAData, [name]: value });
  };

  // imgbb api key
  const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

  // handle Update NID Front

  const handleNIDFront = (e) => {
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
          CAData["NIDFront"] = img;
          setNidFront(img);
        }
      })

  }


  // handle Update NID Back

  const handleNIDBack = (e) => {
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
          CAData["NIDBack"] = img;
          setNidBack(img);
        }
      })

  }


  console.log(CAData);
  return (
    <div className='flex flex-col md:flex-row justify-center w-full items-center p-5 gap-3 mx-auto'>
      <div className="flex flex-col w-full md:w-3/6 items-center justify-center gap-3">
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Enter Your Name (as NID Card)</label>
          <input required name="name" onChange={handleChange} value={CAData["name"] || ""} type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none "
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Enter Your NID Number</label>
          <input required name="NIDno" onChange={handleChange} value={CAData["NIDno"] || ""} type="number" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none "
            id="exampleFormControlInput1"
            placeholder="Enter Your NID Number"
          />
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Select Date of Birth</label> <br />
          <input required name="DOB" onChange={handleChange} value={CAData["DOB"] || ""} type="date" className="input input-bordered w-full"
            id="exampleFormControlInput1"
            placeholder="Enter Your NID Number"
          />
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Select Your Gender</label>
          <select required name="gender" onChange={handleChange} value={CAData["gender"] || ""} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Select Your Religion</label>
          <select required name="religion" onChange={handleChange} value={CAData["religion"] || ""} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select Religion</option>
            <option>Islam</option>
            <option>Hindu</option>
            <option>Buddhist</option>
            <option>Christian</option>
          </select>
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Country of Residence</label>
          <select required name="country" onChange={handleChange} value={CAData["country"] || ""} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select Your Country</option>
            {
              allCountry?.map(country => <option>{country?.country}</option>)
            }

          </select>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-3/6 items-center justify-center gap-3">
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Upload NID Front Side Image</label>
          {/* <input required name="NIDFront" onChange={handleNIDFront} value={CAData["NIDFront"] || ""} type="file" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlInput1" placeholder="Enter NID Front Side link" /> */}
          {
            nidFront === '' ?
              <div required name="NIDFront" onChange={handleNIDFront} value={CAData['NIDFront'] || ""} className="flex justify-center items-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" className="mb-3 w-10 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 600x600px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div> :
              <div className="w-full h-32 rounded">
                <img src={nidFront} alt="" className="object-cover h-full rounded" />
              </div>
          }
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Upload NID Back Side Image</label>
          {/* <input required name="NIDBack" onChange={handleNIDBack} value={CAData["NIDBack"] || ""} type="file" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlInput1" placeholder="Enter NID Back Side link" /> */}
          {
            NIDBack === '' ?
              <div required name="NIDBack" onChange={handleNIDBack} value={CAData['NIDBack'] || ""} className="flex justify-center items-center w-full">
                <label htmlFor="dropzone-file2" className="flex flex-col justify-center items-center w-full h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" className="mb-3 w-10 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 600x600px)</p>
                  </div>
                  <input id="dropzone-file2" type="file" className="hidden" />
                </label>
              </div> :
              <div className="w-full h-32 rounded">
                <img src={NIDBack} alt="" className="object-cover h-full rounded" />
              </div>
          }
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Enter Your Address</label>
          <textarea required name="address" onChange={handleChange} value={CAData["address"] || ""} type="text" className="textarea textarea-accent w-full resize-none" placeholder="Enter Your Address"></textarea>
        </div>
      </div>

    </div>
  );
}