import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopOverview = () => {
    return (
        <div className="flex justify-between items-center text-gray-700 gap-3 h-20 w-full">
                <h3 className="text-gray-700 font-semibold text-2xl lg:text-3xl">Overview</h3>
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faBell} />
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TopOverview;