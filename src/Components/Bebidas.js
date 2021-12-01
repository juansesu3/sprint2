import React from 'react'
import { Gridfather, Gridson, Gridsonofson, Gridss1, Gridss2, Gridss3, Gridss4 } from './Styles/Guajolotas'


const Bebidas = ({bebida,  bebidas}) => {

    const {idb, nameb, imageb, priceb} = bebida

    // cart, setCart,
    // const addBebidas = idb => {
    //     const bebida = bebidas.filter((bebida) => bebida.idb === idb )
    //     setCart([...cart, ...bebida])
    // };

    return (
        <div>
               <Gridfather>
                
                <Gridson>
                        <Gridsonofson >
                            <Gridss1><img src={imageb} alt="" /></Gridss1>
                            <Gridss2>{nameb}</Gridss2>
                            <Gridss3>$ {priceb} MXN </Gridss3>

                            {bebidas ? (
                                    // este es un boton que implemente para agregar productos en la fase de desarrollo ahora esta inhabilitado 
                                    // < Gridss4  type='button' onClick={() => addBebidas(idb) }>
                                    //     Add +
                                    //     </ Gridss4 >
                                        <div></div>
                            
                            ): (
                                <div>
                                {/* <button type='button' onClick={() => addGuaj(id) }>
                                    Confirmar 
                                    </button>
                                
                                <button type='button' onClick={() => addGuaj(id) }>
                                    Eliminar 
                                    </button> */}
                                </div>
                                )
                            } 
                        </Gridsonofson>
                </Gridson>

        </Gridfather> 
        </div>
    )
}

export default Bebidas
