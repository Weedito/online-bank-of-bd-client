import React from 'react';
import './Toggle.css';

// Icons
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

// Toogle

const Toggle = ({ handleThemeChange, theme }) => {

    return (
        <div className='toggle' onClick={handleThemeChange}>
            <Sun/>
            <Moon/>
            <div className="toggleBtn" style={theme ? {right: "2px"} : {left: '2px'}} >
                
            </div>
        </div>
    );
};

export default Toggle;