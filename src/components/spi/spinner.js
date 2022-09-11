import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (
        <div className='contenedor-spinner'>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span>Loading</span>
            </div>
        </div>
    );
}

export default Spinner;
