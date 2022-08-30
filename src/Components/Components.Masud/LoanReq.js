import React from 'react';

const LoanReq = () => {

    


    
    return (
        
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                   
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Loan Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td>1</td>
                            <th>Ali Ibne Masud</th>
                            <td>$ 5000</td>
                            <td>Agricultural</td>
                            <td>Pending</td>
                            <td>
                                <button>View</button>
                                <button>Approve</button>
                            </td>
                        </tr>                      
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoanReq;