import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (
        <div className='contenedor-spinner'>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Loading</span>
            </div>
        </div>
    );
}

export default Spinner;
