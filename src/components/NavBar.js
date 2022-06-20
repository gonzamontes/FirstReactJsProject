import React from "react";
import './NavBar.css';

const NavBar = () => {
    return(
        <ul>
            <li><a href="#home" className="LogoTienda">T I E N D A  M O N T E S</a></li>
            <li><a href="#news">Lo Nuevo</a></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Menú</a>
                <div className="dropdown-content">
                    <a href="#">Descuentos</a>
                    <a href="#">Formas de pago</a>
                    <a href="#">Contactanos</a>
                </div>
            </li>
        </ul>
    )
}

export default NavBar