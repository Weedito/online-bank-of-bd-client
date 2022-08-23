import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../../Components/Components.Nahid/Loading';
import FeedbackDetails from './FeedbackDetails';

const ManageFeedbacks = () => {

    const feedback = () => axios.get('http://localhost:5000/feedbacks');

        const {isLoading, data, refetch, error} = useQuery(["feedbacks"], feedback);

        const feedbacks = data?.data;
        if(isLoading){
            return <Loading/>;
        }

        console.log("From React Query", feedbacks)


    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Feedbacks: {feedbacks?.length}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-auto">
                        {
                            feedbacks.map((feedback, index) =><FeedbackDetails feedback={feedback} refetch={refetch} index={index} />)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageFeedbacks;