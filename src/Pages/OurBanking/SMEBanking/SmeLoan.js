import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SmeLoan = () => {
  const { loanId } = useParams();
  const [loanInfo, setLoanInfo] = useState({});

  useEffect(() => {
    const url = `https://bank-of-bd.herokuapp.com/smeBanking/${loanId}`

    fetch(url)
      .then(res => res.json())
      .then(data => setLoanInfo(data))
  }, [])

  // const Monthly = 12;
  // const Quarterly = 4;
  // const Half_Yearly = 2;
  // const Yearly = 1;





  const handleLoanCalculator = e => {
    e.preventDefault();
    const loanAmount = e.target.loanAmount.value;
    console.log(loanAmount);
    const interestRate = e.target.interestRate.value;
    console.log(interestRate)
    const Payment_Type = e.target.Payment_Type.value;
    console.log(Payment_Type)
    const Loan_period = e.target.Loan_period.value;
    console.log(Loan_period);





  }

  return (
    <div>

      <div className="hero min-h-screen bg-slate-100">
        <div className="hero-content grid lg:grid-cols-3">
          <div>
            <img src={loanInfo.loan_img} className="max-w-sm rounded shadow-2xl mask mask-circle" alt='img' />
            <h1 className="text-5xl font-bold">{loanInfo.loan_name}</h1>
          </div>
          <div>


            <form onSubmit={handleLoanCalculator}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Loan Amount(Tk.)</span>

                </label>
                <input type="number" name='loanAmount' placeholder="Type Loan Amount" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                  <span className="label-text">Interest Rate(%)</span>
                </label>
                <input type="number" name='interestRate' placeholder="Type Interest Rate(%)" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                  <span className="label-text">Payment Type</span>
                </label>

                <select class="select select-bordered w-full max-w-xs" name="Payment_Type">
                  <option value='12' selected>Monthly</option>
                  <option value='4'>Quarterly</option>
                  <option value='2'>Half_Yearly</option>
                  <option value='1'>Yearly</option>

                </select>

                <label className="label">
                  <span className="label-text">Loan period in years</span>
                </label>

                <select class="select select-bordered w-full max-w-xs" name="Loan_period">

                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>


              <input className='m-5 px-5 bg-green-700' type="submit" value="Add" />
              <input className='m-5 px-5 bg-red-700' type="reset" value="Reset" />
            </form>

          </div>
          <div>

            <p className="py-6">{loanInfo.loan_description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SmeLoan;