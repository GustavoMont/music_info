import React from 'react';
import icon from '../assets/img/man-playing.svg'

export default function Outdoor() {
    return <div id='outdoor' className='p-4 d-flex justify-content-center align-items-center'>
        <h1 className='text-center p-2 rounded' >Music Info</h1>
        <img src={icon} alt='Homem tocando' />
    </div>;
}
