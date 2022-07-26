import React from 'react';
import AuditCDetails from './AuditCDetails';

const AuditCommittee = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/Mnq1KXy/istockphoto-1327034575-170667a.jpg')] w-full h-52 md:h-80 bg-cover">
                <h3 className="text-3xl md:text-5xl text-white font-bold font-sans items-center h-full flex justify-start pl-5">Audit Committee</h3>
            </div>
            <div className="containet px-5 py-10">
                <AuditCDetails/>
            </div>
        </div>
    );
};

export default AuditCommittee;