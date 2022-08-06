import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import FeedbackDetails from './FeedbackDetails';

const ManageFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])


    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Feedbacks: {feedbacks?.length}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-auto">
                        {
                            feedbacks.map((feedback, index) =><FeedbackDetails feedback={feedback} setFeedbacks={setFeedbacks} index={index} />)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageFeedbacks;