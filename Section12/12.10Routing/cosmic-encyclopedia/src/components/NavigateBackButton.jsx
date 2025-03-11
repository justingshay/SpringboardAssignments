import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NavigateBackButton = () => {
    let navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            classname='nav-back-btn'
        >
            Go Back
        </button>
    );
};

export default NavigateBackButton