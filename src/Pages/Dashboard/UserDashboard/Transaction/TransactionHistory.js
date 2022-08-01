import React from 'react';

const TransactionHistory = () => {
  const time = new Date().toLocaleString();
  
    return (
        <div className='w-full lg:h-full p-12'>
            <h1 className='font-bold text-2xl pb-4 text-green-500'>Transaction history</h1>
            <div class="overflow-x-auto">
              <table class="table w-full mb-4 shadow-xl">
                
                <thead>
                  <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Transaction Id</th>
                    <th>Transaction Date</th>
                  </tr>
                </thead>

                <tbody>
                  
                  <tr>
                    <th>1</th>
                    <td>Ganderton@gmail.com</td>
                    <td>2394058234lfdas53599353</td>
                    <td>{time}</td>
                  </tr>
                  
                  <tr>
                    <th>2</th>
                    <td>Hagerty@gmail.com</td>
                    <td>y8934yu5934dfat4rd93</td>
                    <td>{time}</td>
                  </tr>
                  
                  <tr>
                    <th>3</th>
                    <td>BriceSwyre@gmail.com</td>
                    <td>93y73930urf35r7f0u</td>
                    <td>{time}</td>
                  </tr>

                </tbody>
              </table>
            </div>
        </div>
    );
};

export default TransactionHistory;