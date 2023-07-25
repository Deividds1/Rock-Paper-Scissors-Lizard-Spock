import React from 'react'
import modalimg from '../assets/image-rules-bonus.svg';
import close from '../assets/icon-close.svg';
import './modal.css';

function Modal(props) {
    return (
        <div className='modal'>
            <h1>RULES</h1>
            <img src={modalimg} alt="" />
            <button onClick={props.closeModal}><img src={close} alt="" /></button>

        </div>
    )
}

export default Modal;