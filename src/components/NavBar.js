import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import './NavBar.css';
import {Link} from 'react-router-dom';
import { Shop } from "../context/ShopContext";

const NavBar = () => {

    const {estadoA} = useContext(Shop)

    return(
        <header>
            <ul>
            <li><a><Link to={"/"} className="logoTienda">T I E N D A  M O N T E S</Link></a></li>
            <li><a className="opcion"><Link to={'/category/electronics'}>Electronics</Link></a></li>
            <li><a className="opcion"><Link to={'/category/jewelery'}>Jewelery</Link></a></li>
            <li><a className="opcion"><Link to={"/category/women's clothing"}>Women's</Link></a></li>
            <li><a className="opcion"><Link to={"/category/men's clothing"}>Men's</Link></a></li>
            <li><a className="cartWidget"><Link to={"/cart"}><CartWidget/></Link></a></li>
        </ul>
        </header>
    )
}

export default NavBar