import React from 'react';

const InterestRate = () => {
    return (
        <div>
            <h3 className="text-3xl">This is Interest Rate Page</h3>

            
            <div>
                <h3 className="text-3xl">This is Executive Committee Page</h3>
                <div>
                    {/* table */}
                    <div class="overflow-x-auto px-20 py-16">
                        <table class="table table-zebra w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Deposit Products</th>
                                    <th>Interest  Rate</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>Current Deposits</td>
                                    <td>0.00%</td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Easy Current Account</td>
                                    <td>1.00%</td>

                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Easy Plus Current Account</td>
                                    <td>1.50%</td>

                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Below 1 Lac</td>
                                    <td>1.00%</td>

                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>1 Lac and Above</td>
                                    <td>1.50%</td>

                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Easy Plus Current Account</td>
                                    <td>1.50%</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* table end */}
                </div>
            </div>
        </div>
    );
};

export default InterestRate;