import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SupportEmails = () => {

    const [support, setSupports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/contacts')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setSupports(result)
            })
    }, []);

    return (
        <div>
            <h2 className='text-5xl'>data are {support.length}</h2>
        </div>
    );
};

export default SupportEmails;