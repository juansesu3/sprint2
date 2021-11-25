import React, { useState, Fragment } from 'react'
import { GrdAbu, Grdt1, Grdt2, Grdt3, Grdt4, Grdt5, Grdph6, 
    Grdph61, Grdph62, Grdph63, Grdt7, Grdph8, Grdph81, 
     Grdph82, Grdph83, Grdph84, Grdph85, Grdph86, Grdt9, Grdt10, Grdph11, Grdph111, Grdph112, Grdph113, Grdph114, Grdph115, Grdph12, Grdph121, Grdph122, Imggua, Btnplus } from './Styles/Plus'
import { Gridss4 } from './Styles/Guajolotas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


//importo las imagenes de sabores
import Guayabas from '../imagesSabores/Guayabas.png'
import Moles from '../imagesSabores/Moles.png'
import Piñas from '../imagesSabores/Piñas.png'
import Pasass from '../imagesSabores/Pasass.png'
import Rajass from '../imagesSabores/Rajass.png'
import Verdes from '../imagesSabores/Verdes.png'



// importo las imagenes de guajolotas 
import Guayabag from '../imagesGuajolotas/Guayabag.png';
import Moleg from '../imagesGuajolotas/Moleg.png';
import Pasasg from '../imagesGuajolotas/Pasasg.png';
import Piñag from '../imagesGuajolotas/Piñag.png';
import Verdeg from '../imagesGuajolotas/Verdeg.png';



// //importo las imagenes de bebidas
// import Arrozg from '../imagesbebidas/Arroz.png';
// import Cafe from '../imagesbebidas/Cafe.png';
// import Champurado from '../imagesbebidas/Champurrado.png';
// import Chocolates from '../imagesbebidas/Chocolate.png'



import Sabores from './Sabores';
import Bebidas from './Bebidas';
import Guajolota from './Guajolota';


const Plus = ({bebida, cart ,setCart, bebidas}) => {

    //   const [bebidas, setBebeidas] = useState([
    //     {idb: 1, nameb: 'Champurado', imageb: Champurado, priceb: 12},
    //     {idb: 2, nameb: 'Atole de arroz', imageb: Arrozg, priceb: 12},
    //     {idb: 3, nameb: 'Hot chocolat', imageb: Chocolates, priceb: 12},
    //     {idb: 4, nameb: 'Cafe negro ', imageb: Cafe, priceb: 12}
        
    //   ])

    const [sabores, setSabores] = useState([
        {ids: 1, names: 'Verde', images: Verdes, prices: 25},
        {ids: 2, names: 'Mole', images: Moles, prices: 25},
        {ids: 3, names: 'Guayaba', images: Guayabas, prices: 25},
        {ids: 4, names: 'Piña', images: Piñas, prices: 25},
        {ids: 5, names: 'Pasas', images: Pasass, prices: 25},
        {ids: 5, names: 'Rajass', images: Rajass, prices: 25}
      ])
      
    
      const [guajolotas, setGuajolotas] = useState([
        {id: 1, name: 'Verde', image: Verdeg, price: 25},
        {id: 2, name: 'Mole', image: Moleg, price: 25},
        {id: 3, name: 'Guayaba', image: Guayabag, price: 25},
        {id: 4, name: 'Piña', image: Piñag, price: 25},
        {id: 5, name: 'Pasas', image: Pasasg, price: 25}
      ])

      const {id, name, image,price } = guajolotas
     
    // const {idb, nameb, iamgeb, priceb} = bebida
    const {idb, nameb, imageb, priceb } = bebida
    //aqui esta la solucion para mostrar solamente el producto sobre el que se haga click 
    const [counter, setCounter] = useState(0)



    const addBebida = idb => {
        const bebida = bebidas.filter((bebida) => bebida.idb === idb )
        setCart([...cart, ...bebida])    
        // contadorBebida ();                       //aqui esta el problema, pero cual es???
        // alert('Agregaste una Bebida al carrito')
    };
    // const contadorBebida = (idb) =>{
    //     idb = idb +1
    //     return <div>^`</div>

    // }
    const delBebida = idb => {
        const bebida =  cart.filter(bebida => bebida.idb !== idb )
        setCart([...bebida])
        // setCart(...guajolotas)

    }


    const addGuajolota = id => {
        const guajolota = guajolotas.filter((guajolota) => guajolota.id === id )
        setCart([...cart, ...guajolota])    
        // contadorBebida ();                       //aqui esta el problema, pero cual es???
        // alert('Agregaste una Bebida al carrito')
    };


    const handleSumar = () => {
        setCounter(counter + 1)
    }
    const handleRestar = () => {
        setCounter(counter - 1)
    }
    const total =(pricet, counter)=>{
        let tot = (counter * pricet)
        return tot 

    }
    return (
        <div>
           {/* delBebida(idb); 
           addBebida(idb);  */}
            <GrdAbu> {/* Grid Abuelo*/} 
                <Grdt1><Link to="/bebida"><FontAwesomeIcon icon={faChevronLeft} /></Link></Grdt1>{/*Grid tios */}
                <Grdt2><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></Grdt2>{/*Grid tios */}
                <Grdt3><Imggua src={imageb} alt="" /></Grdt3>{/*Grid tios */}
                <Grdt4>{nameb}</Grdt4>{/*Grid tios */}
                <Grdt5>$ {priceb} MXN</Grdt5>{/*Grid tios */}
                <Grdph6> {/* Grid papa con hijos */}
                    <Grdph61 type='button' onClick={() => {handleRestar(); delBebida(idb)} }><FontAwesomeIcon icon={faMinus} /> </Grdph61>{/*Hijos del grid papa  */}
                    <Grdph62>{counter}</Grdph62>{/*Hijos del grid papa  */}
                    <Grdph63       type='button' onClick={() =>{handleSumar(); addBebida(idb)} }><FontAwesomeIcon icon={faPlus} /></Grdph63>{/*Hijos del grid papa  */}
                </Grdph6>  
                <Grdt7>Sabor</Grdt7>{/*Grid tios */}
                <Grdph8>
                {sabores.map((sabor) => (
                                <Sabores
                                key= {sabor.ids}
                                sabor={sabor}
                                cart={cart}
                                setCart={setCart}
                                sabores={sabores}
                                />
                                
                                )
                            )}
                           
                </Grdph8>  
                <Grdt9>Guajolocombo</Grdt9>{/*Grid tios */}
                <Grdt10><p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p></Grdt10>{/*Grid tios */}
                <Grdph11>
               
                    
                    {/* Grid papa con hijos */}
                    <Grdph111 style={{gridColumn: '1/13'}}>
                        {guajolotas.map((guajolota) => (
                            <Btnplus  type='button' onClick={() => addGuajolota(id) }>
                            <Guajolota 
                            key= {guajolota.id}
                            guajolota={guajolota}
                            cart={cart}
                            setCart={setCart}
                            guajolotas={guajolotas}
                            />
                            </Btnplus>
                            
                            )
                        )}</Grdph111>{/*Hijos del grid papa  */}
                    
                </Grdph11>
                <Grdph12>{/* Grid papa con hijos */}
                    <Grdph121>
                        
                        
                        < Gridss4  type='button' onClick={() => addBebida(idb) }>
                                Agregar {counter} al carrito
                        </ Gridss4 >
                                                    
                                                    
                    </Grdph121>{/*Hijos del grid papa  */}
                    <Grdph122>$ {total(priceb, counter )}</Grdph122>{/*Hijos del grid papa  */}
                </Grdph12>
            </GrdAbu>
        </div>
    )
}

export default Plus
