import React from 'react';
import './styles.css';

const Input = ({valorInput}) => {
    
    return (
        <input placeholder={valorInput} className='app-input' />
    )
}

export default Input