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


  return (
    <div>

      <div class="hero min-h-screen bg-slate-100">
        <div class="hero-content grid lg:grid-cols-3">
          <div>
            <img src={loanInfo.loan_img} class="max-w-sm rounded shadow-2xl mask mask-circle" alt='img' />
            <h1 class="text-5xl font-bold">{loanInfo.loan_name}</h1>
          </div>
          <div>

            <form>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Loan Amount(Tk.)</span>
                </label>
                <input type="number" name='loanAmount' placeholder="Type Loan Amount" class="input input-bordered w-full max-w-xs" />

                <label class="label">
                  <span class="label-text">Interest Rate(%)</span>
                </label>
                <input type="number" name='interestRate' placeholder="Type Interest Rate(%)" class="input input-bordered w-full max-w-xs" />

                <label class="label">
                  <span class="label-text">Payment Type</span>
                </label>
                <select class="select select-bordered select-sm w-full max-w-xs">
                  <option selected>Monthly</option>
                  <option>Quarterly</option>
                  <option>Half-Yearly</option>
                  <option>Yearly</option>
                </select>

                <label class="label">
                  <span class="label-text">Loan period in years</span>
                </label>
                <select class="select select-bordered select-sm w-full max-w-xs">
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
            </form>

          </div>
          <div>

            <p class="py-6">{loanInfo.loan_description}</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SmeLoan;