import React from 'react';
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <div >
                <nav>
                <Link  to="/gujolota">Guajolotas </Link>
                <Link  to="/bebida">Bebidas</Link>
                <Link  to="/tamal">Tamales</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}