import React from 'react';

const AfterAppliedLoan = () => {
    
    return (
        <div className='max-w-7xl mx-auto py-40'>
            <img className="w-52 mx-auto" src="https://i.ibb.co/S7Xj8xh/Mail-Successs.png" alt="success" />
            <div className="my-10">
                <h1 className='text-3xl text-center'>Congratulation, Your loan applied successfully</h1>
                <p className='text-center text-primary mt-2'>Check your E-mail For further instructions!</p>
            </div>
            <div className="text-center">
                <button className='btn btn-primary'><a href="https://gmail.com/">Check Email</a></button>
            </div>
        </div>
    );
};

export default AfterAppliedLoan;