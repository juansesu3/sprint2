import React from "react";
import {  Gridfather, Gridson, Gridsonofson, Gridss1, Gridss2, Gridss3,  Gridss4  } from "./Styles/Guajolotas";





const Guajolota = ({guajolota, cart, setCart, guajolotas}) => {
    
    
    
    //Constante que va guardar las propiedades del estad de las guajolotas
    const {id, name, image, price} = guajolota



    //Funcion para agregar guajolotas al carrito 
    // const addGuaj = id => {
    //     const guajolota = guajolotas.filter((guajolota) => guajolota.id === id  )
    //     setCart([...cart, ...guajolota])
    // };


    //Funcion para eliminar guajolota 

    const delGuajolota = (id) => {
        const guajolotas =  cart.filter(guajolota => guajolota.id !== id )
        // setCart(...guajolotas)

    }
    
    
    return(
    <div> 
    

                    
                     <Gridfather>{/* Grid papa */}
                
                            <Gridson>{/* Grid hijo */}
                                    <Gridsonofson>
                                        <Gridss1><img src={image} alt="" /></Gridss1>
                                        <Gridss2>{name}</Gridss2>
                                        <Gridss3>$ {price} MXN </Gridss3>

                                        {guajolotas ? (
                                            
                                                // < Gridss4  type='button' onClick={() => addGuaj(id) }>
                                                //     Add +
                                                //     </ Gridss4 >
                                                    <div></div>
                                        
                                        ): (
                                            <div>
                                            {/* <button type='button' onClick={() => addGuaj(id) }>
                                                Confirmar 
                                                </button> */}
                                            
                                            
                                            
                                            {/* <button type='button' onClick={() => delGuajolota(id) }>
                                                Elimar 
                                                </button> */}
                                            </div>
                                    )} 
                                    </Gridsonofson>
                            </Gridson>{/* Grid hijo */}

                    </Gridfather> {/* Grid papa */}

        
    </div>
    );
};
export default Guajolota 