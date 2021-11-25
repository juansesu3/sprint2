import React from 'react';
import {Gridfather, Gridson, Gridsonofson, Gridss1, Gridss2, Gridss3,  Gridss4 } from './Styles/Guajolotas'


const Tamales = ({tamal, cart, setCart, tamales}) => {

    const {idt, namet, imaget, pricet} = tamal


    const addGuaj = idt => {
        const tamal = tamales.filter((tamal) => tamal.idt === idt )
        setCart([...cart, ...tamal])
    };
  ///una funcion que capture el id atravez del evento de un boton  y actulice el estado de la ruta plus 

//   const addGuaj = id => {
//     const guajolota = guajolotas.filter((guajolota) => guajolota.id === id  )
//     setCart([...cart, ...guajolota])
// };

    return (
        <div>
             <Gridfather>{/* Grid papa */}
                
                <Gridson>{/* Grid hijo */}

                     
                        <Gridsonofson>
                       
                            <Gridss1><img src={imaget} alt="" /></Gridss1>
                            <Gridss2>{namet}</Gridss2>
                            <Gridss3>$ {pricet} MXN </Gridss3>

                            {tamales ? (
                                
                                    // < Gridss4  type='button' onClick={() => addGuaj(idt) }>
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
                        )} 
                        
                        </Gridsonofson>
                        
                </Gridson>{/* Grid hijo */}

        </Gridfather> {/* Grid papa */}
        </div>
    )
}

export default Tamales
