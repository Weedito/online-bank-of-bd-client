import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../Components/Components.Nahid/Loading";
import auth from "../../firebase.init";
import AllCountry from "../../Hook/AllCountry";
import "./CreateAnAccount.css";

const CreateAnAccount = () => {

  const [allCountry] = AllCountry();

  const [user, loading] = useAuthState(auth);

  const legaleNameRef = useRef('');
  const phoneRef = useRef('');
  const nidRef = useRef('');
  const dateOfBirthRef = useRef('');
  const addressRef = useRef('');
  const genderRef = useRef('');
  const countryRef = useRef('');
  const emailRef = useRef('');
  


  if (loading) {
    return <Loading />
  }


  const createAccount = e => {
    e.preventDefault();
    const name = legaleNameRef.current.value;
    const phone = phoneRef.current.value;
    const nid = nidRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    const gender = genderRef.current.value;
    const country = countryRef.current.value;
    const address = addressRef.current.value;
    const email = emailRef.current.value;

    console.log(name, phone, nid, dateOfBirth, gender, country, address, country, email);

    const accoutnDetails = {
      name: name,
      phone: phone,
      NID: nid,
      dateOfBirth: dateOfBirth,
      gender: gender,
      country: country,
      address: address,
      AccNo: Math.floor(Math.random() * 10000000000),
      balance: 0,
      email: email,
      actype: "Savings Account",
      authemail: user.email,
    }

    fetch('https://bank-of-bd.herokuapp.com/account', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(accoutnDetails)
    })
      .then(res => res.json())
      .then(data => {

        legaleNameRef.current.value = '';
        nidRef.current.value = '';
        phoneRef.current.value = '';
        dateOfBirthRef.current.value = '';
        genderRef.current.value = '';
        legaleNameRef.current.value = '';
        emailRef.current.value = '';
        addressRef.current.value = '';

        toast("Account Created Successfully!")
      })
  }

  return (
    <div className="h-auto lg:h-auto mt-96 lg:mt-12 w-full">
      <div className="card w-auto bg-slate-100 shadow-2xl lg:my-8 mx-auto lg:w-1/2 h-full lg:h-auto py-10 lg:py-0 ">
        <div className="card-body">
          <h1 className="text-primary text-2xl font-bold">
            Create An Bank Account
          </h1>

          <form action="" onSubmit={createAccount}>

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
                    allCountry.map(country => <option>{country?.name?.common}</option> )
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

          </form>


        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;