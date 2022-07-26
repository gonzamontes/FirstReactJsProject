import React, { Component } from 'react'
import Portal from '../Portal';
import './styles.css';

export default class Modal extends Component {
    render() {

        const { children, toggle, active} = this.props;


    return (
        <Portal>
            {active && (
                <div className='div-principal'>
                    <div onClick={toggle} className={'fondo-modal'}></div>
                    <div className='div-secundario'>
                        
                        <button onClick={toggle} className='cerrar-boton'>x</button>
                        <div>{children}</div>

                    </div>
                    
                </div>
            )}
        </Portal>
    )
    }
}
