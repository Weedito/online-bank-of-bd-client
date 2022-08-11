import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SMEBanking = () => {
    const [smeLoans, setSmeLoans] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/smebanking')
            .then(res => res.json())
            .then(data => setSmeLoans(data))
    }, [])


    const navigate = useNavigate();

    const handleBtnUpdate = id => {
        navigate('/smebanking/' + id)

    }


    return (
        <div className='max-w-7xl mx-auto'>


            <div class="hero bg-slate-100">

                <div class="hero-content flex-col lg:flex-row pt-8">
                    <img src="https://i.ibb.co/s2DSzq8/what-is-sme-loan-png-min.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='sme img' />
                    <div>
                        <h2 className="text-3xl font-bold">Grow Your Business</h2>
                        <h3 className="text-2xl">With our quick & simplified</h3>
                        <h3 className="text-2xl font-bold">SME FINANCING</h3>

                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 lg:grid-cols-4 pt-8 gap-5 bg-slate-100 px-8'>

                {
                    smeLoans.map(smeLoan => <div key={smeLoan._id} className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img src={smeLoan.loan_img} alt="sme loan img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{smeLoan.loan_name} </h2>
                            <p className='text-left'>{smeLoan.loan_description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleBtnUpdate(smeLoan._id)} className='btn btn-xs bg-green-700 border-0'>Loan Now</button>

                            </div>
                        </div>
                    </div>
                    )
                }

            </div>


        </div>
    );
};

export default SMEBanking;