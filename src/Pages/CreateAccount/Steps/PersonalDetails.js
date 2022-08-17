import { allCountry } from "../../../Components/Components.Nahid/Data";
import { useStepperContext } from "../../../Components/Components.Nahid/StepperContext";

export default function PersonalDetails() {
  const { CAData, setCAData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCAData({ ...CAData, [name]: value });
  };

  /*  // imgbb api key
   const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';
 
   // handle Update Profile
 
   const handleFileUpload = async (e) => {
     const image = e.target.value;
     console.log(data);
     console.log(image);
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
           console.log(img);
 
         }
       })
     // await updateProfile({displayName : displayName, photoURL})
 
   } */


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
          <label className="text-xs">Input NID Front Side Link</label>
          <input required name="NIDFront" onChange={handleChange} value={CAData["NIDFront"] || ""} type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlInput1" placeholder="Enter NID Front Side link" />
          <span className="text-muted text-xs text-orange-600">Upload image in (imgbb) & Paste Link Here</span>
        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Input NID Back Side Link</label>
          <input required name="NIDBack" onChange={handleChange} value={CAData["NIDBack"] || ""} type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlInput1" placeholder="Enter NID Back Side link" />
          <span className="text-muted text-xs text-orange-600">Upload image in (imgbb) & Paste Link Here</span>

        </div>
        <div className="mb-3 w-full lg:w-96">
          <label className="text-xs">Enter Your Address</label>
          <textarea required name="address" onChange={handleChange} value={CAData["address"] || ""} type="text" className="textarea textarea-accent w-full resize-none" placeholder="Enter Your Address"></textarea>
        </div>
      </div>

    </div>
  );
}