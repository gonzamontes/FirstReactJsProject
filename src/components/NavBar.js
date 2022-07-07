import React from "react";
import CartWidget from "./CartWidget";
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <ul>
            <li><a className="LogoTienda"><Link to={"/"}>T I E N D A  M O N T E S</Link></a></li>
            <li><a><Link to={'/category/electronics'}>Electronics</Link></a></li>
            <li><a><Link to={'/category/jewelery'}>Jewelery</Link></a></li>
            <li><a><Link to={"/category/women's"}>Women's</Link></a></li>
            <li><a><Link to={"/category/men's"}>Men's</Link></a></li>
            <CartWidget/>
        </ul>
    )
}

export default NavBar