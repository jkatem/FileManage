import React from 'react'
import NewMatterForm from './Matters/NewMatterForm';
import Backdrop from './Backdrop' 
import './Modal.css'

const Modal = (props) => (
    
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className='Modal'
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>

            {props.show && (<NewMatterForm />)}
        </div>
    </React.Fragment>
)

export default Modal;
