import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Guajolota from "./Guajolota";
import Bebidas from "./Bebidas";
import Tamales from "./Tamales";
import { GriddCartpapa, GriddCarthijos1, GriddCarthijos2, GriddCarthijos3, BtnPay, ImageCart, TotalCont, Texttotal, Pricetotal } from "./Styles/Cart";
import Frame from '../Guappjolotas/card/Frame.png'


const Cart = ({ cart, setCart }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        cart.map(totals => {

            if (totals.price !== undefined) {
                sumatoriatotal += totals.price
                setTotal(sumatoriatotal)
            }
            if (totals.priceb !== undefined) {
                sumatoriatotal += totals.priceb
                setTotal(sumatoriatotal)
            }
            if (totals.pricet !== undefined) {
                sumatoriatotal += totals.pricet
                setTotal(sumatoriatotal)
            }
        })
    }, [cart])

    let sumatoriatotal = 0

    return (
        <div >
            <GriddCartpapa>

                <GriddCarthijos1>
                    <Link to="/guajolota"><FontAwesomeIcon icon={faChevronLeft} /></Link>
                </GriddCarthijos1>

                <GriddCarthijos2>Carrito</GriddCarthijos2>

                <GriddCarthijos3>

                    {cart.length === 0 ? (<ImageCart className="empty-btn" src={Frame} alt="" />) : (cart.map((guajolota => {
                        // console.log(guajolota.type)
                        return guajolota.type === "guajolotas" && (
                            <Guajolota key={guajolota.id} guajolota={guajolota} cart={cart} setCart={setCart} />)
                    }
                    )
                    )
                    )
                    }

                    {cart.length === 0 ? (<p></p>) : (cart.map((bebida => {
                        // console.log(bebida.type)
                        return bebida.type === "bebidas" && (
                            <Bebidas key={bebida.idb} bebida={bebida} cart={cart} setCart={setCart} />)
                    }
                    )
                    )
                    )
                    }

                    {cart.length === 0 ? (<p></p>) : (cart.map((tamal => {
                        // console.log(tamal.type)
                        return tamal.type === "tamales" && (
                            <Tamales key={tamal.idt} tamal={tamal} cart={cart} setCart={setCart} />)
                    }
                    )
                    )
                    )
                    }

                </GriddCarthijos3>

                <TotalCont><Texttotal>Total</Texttotal> <Pricetotal>$ {total} MXN</Pricetotal></TotalCont>

                <BtnPay>Pagar</BtnPay>


            </GriddCartpapa>
        </div>
    );
};

export default Cart;