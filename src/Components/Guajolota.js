import React from "react";
import {  Gridfather, Gridson, Gridsonofson, Gridss1, Gridss2, Gridss3,  Gridss4  } from "./Styles/Guajolotas";



const Guajolota = ({guajolota,  guajolotas}) => {
    
    // cart, setCart,
    
    //Funcion para agregar guajolotas al carrito 
    // const addGuaj = id => {
    //     const guajolota = guajolotas.filter((guajolota) => guajolota.id === id  )
    //     setCart([...cart, ...guajolota])
    // };


    //Funcion para eliminar guajolota 

    // const delGuajolota = (id) => {
    //     const guajolotas =  cart.filter(guajolota => guajolota.id !== id )
    //     setCart(...guajolotas)

    // }


    //Constante que va guardar las propiedades del estad de las guajolotas
    const {id, name, image, price} = guajolota

    return(
    <>
                     <Gridfather>
                
                            <Gridson>
                                    <Gridsonofson>
                                        <Gridss1><img src={image} alt="" /></Gridss1>
                                        <Gridss2>{name}</Gridss2>
                                        <Gridss3>$ {price} MXN </Gridss3>

                                        {guajolotas ? (
                                            
                                                // < Gridss4  type='button' onClick={() => addGuaj(id) }>
                                                //     Add +
                                                //     </ Gridss4 >
                                                    <></>
                                        
                                        ): (
                                            <>
                                            {/* <button type='button' onClick={() => addGuaj(id) }>
                                                Confirmar 
                                                </button> */}
                                            
                                            
                                            
                                            {/* <button type='button' onClick={() => delGuajolota(id) }>
                                                Elimar 
                                                </button> */}
                                            </>
                                    )} 
                                    </Gridsonofson>
                            </Gridson>

                    </Gridfather> 
    </>
    );
};
export default Guajolota 