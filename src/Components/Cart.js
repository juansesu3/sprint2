import React, { useEffect, useState } from "react";


//import los estilos para el cart 

//importo el componente Guajolota
import Guajolota from "./Guajolota";
import Bebidas from "./Bebidas";
import Tamales from "./Tamales";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { GriddCartpapa, GriddCarthijos1, GriddCarthijos2, GriddCarthijos3, BtnPay, ImageCart, TotalCont, Texttotal, Pricetotal } from "./Styles/Cart";
import Frame from '../Guappjolotas/card/Frame.png'
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {

    console.log(cart);

    return (
        <div >
            <GriddCartpapa>

                <GriddCarthijos1><Link to="/guajolota"><FontAwesomeIcon icon={faChevronLeft} /></Link></GriddCarthijos1>

                <GriddCarthijos2>Carrito</GriddCarthijos2>

                <GriddCarthijos3>

                    {cart.length === 0 ? (<ImageCart className="empty-btn" src={Frame} alt="" />) : (cart.map((guajolota => {
                        console.log(guajolota.type)
                        return guajolota.type === "guajolotas" && (
                            <Guajolota key={guajolota.id} guajolota={guajolota} cart={cart} setCart={setCart} />)
                                     }
                                 )
                            )
                         )
                    }


                    {cart.length === 0 ? (<p></p>) : (cart.map((bebida => {
                        console.log(bebida.type)
                        return bebida.type === "bebidas" && (
                            <Bebidas key={bebida.idb} bebida={bebida} cart={cart} setCart={setCart} />)
                                    }
                                )
                            )
                        )
                    }


                    {cart.length === 0 ? (<p></p>) : (cart.map((tamal => {
                        console.log(tamal.type)
                        return tamal.type === "tamales" && (
                            <Tamales key={tamal.idt} tamal={tamal} cart={cart} setCart={setCart} />)
                                    }
                                )
                            )
                        )
                    }


                </GriddCarthijos3>

                <TotalCont><Texttotal>Total</Texttotal> <Pricetotal>$ {} MXN</Pricetotal></TotalCont>

                <BtnPay>Pagar</BtnPay>


            </GriddCartpapa>
        </div>
    );
};

export default Cart;