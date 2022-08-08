import React from 'react';
import Chart from './Charts/Chart';
import DBCards from './DBCards/DBCards';

const AdDashboard = () => {
    return (
        <div>
            <DBCards/>
            <Chart/>
        </div>
    );
};

export default AdDashboard;