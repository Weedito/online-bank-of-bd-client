import React from 'react';
import { Slide } from 'react-reveal';
const Interest = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-2 justify-around items-center py-10 px-2'>
        <Slide left>
          <div className="text-left">
            <h3 className="text-3xl lg:text-5xl font-bold">Interest Rate</h3>

          </div>
        </Slide>
        <Slide right>
          <div className="">
            <img src="https://i.ibb.co/P4G2n23/intarest-removebg-preview.png" alt="" />
          </div>
        </Slide>

      </div>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table table-zebra table-striped w-full z-0">

          <thead>
            <tr>
              <th></th>
              <th>REPAYMENT DATE</th>
              <th>PRINCIPAL</th>
              <th>INTEREST</th>
              <th>TOTAL REPAYMENT</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>



      </div>
    </div>
  );
};

export default Interest;