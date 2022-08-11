import { useStepperContext } from "../../../Components/Components.Nahid/StepperContext";


export default function AccountInfo() {
  const { CAData, setCAData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCAData({ ...CAData, [name]: value });
  };

  console.log(CAData);

  return (
    <div className="text-left w-full md:w-5/6 mx-auto">
      <h3 className="font-semibold text-md">Please let us Know your Preferences:</h3>
      <div className="space-y-7 w-full md:w-4/5 mx-auto py-7 ">
        <div class="mb-3 xl:w-96">
          <label className="text-xs">What's Purpose of Account Opening ?</label>
          <select required name="acpurpose" onChange={handleChange} value={CAData["acpurpose"] || ""} class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select Purpose of Account</option>
            <option>Personal Savings</option>
            <option>Business Transactions</option>
            <option>Term Deposit Opening</option>
            <option>Salary Transactions</option>
          </select>
        </div>
        <div class="mb-3 xl:w-96">
          <label className="text-xs">What is Your Desired Account Type ?</label>
          <select required name="actype" onChange={handleChange} value={CAData["actype"] || ""} class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select Type of Account</option>
            <option>Savings Account</option>
            <option>Current Account</option>
            <option>Business Account</option>
            <option>Sohoj Account</option>
            <option>OBB Cash</option>
          </select>
        </div>
        <div class="mb-3 xl:w-96">
          <label className="text-xs">What is Your Preferred Branch ?</label>
          <select required name="branch" onChange={handleChange} value={CAData["branch"] || ""} class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected>Select the Branch Near You</option>
            <option>Ashulia Branch</option>
            <option>Aftabnagar Branch</option>
            <option>Banani Branch</option>
            <option>Farmgate Branch</option>
            <option>Gazipur Sadar</option>
            <option>Gulshan-1 Branch</option>
            <option>Khulna Sadar</option>
            <option>Mirpur Branch</option>
            <option>Mohammadpur Branch</option>
            <option>Uttara Branch</option>
          </select>
        </div>
        <div class="mb-3 xl:w-96">
          <label className="text-xs">Initial Deposit (in Figure)</label>
          <input required name="balance" onChange={handleChange} value={CAData["balance"] || ""} type="number" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            id="exampleFormControlInput1"
            placeholder="Deposit Your Account"
          />
        </div>
      </div>
    </div>
  );
}