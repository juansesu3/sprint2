import React, { useState, Fragment } from 'react'
import {
    GrdAbu, Grdt1, Grdt2, Grdt3, Grdt4, Grdt5, Grdph6,
    Grdph61, Grdph62, Grdph63, Grdt7, Grdph8, Grdph81,
    Grdph82, Grdph83, Grdph84, Grdph85, Grdph86, Grdt9, Grdt10, Grdph11, Grdph111, Grdph112, Grdph113, Grdph114, Grdph115, Grdph12, Grdph121, Grdph122, Imggua
} from './Styles/Plus'
import { Gridss4 } from './Styles/Guajolotas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//import imagens de sabores

import Guayabas from '../imagesSabores/Guayabas.png'
import Moles from '../imagesSabores/Moles.png'
import Piñas from '../imagesSabores/Piñas.png'
import Pasass from '../imagesSabores/Pasass.png'
import Rajass from '../imagesSabores/Rajass.png'
import Verdes from '../imagesSabores/Verdes.png'



//importo las imagenes de bebidas
import Arrozg from '../imagesbebidas/Arroz.png';
import Cafe from '../imagesbebidas/Cafe.png';
import Champurado from '../imagesbebidas/Champurrado.png';
import Chocolates from '../imagesbebidas/Chocolate.png'



import Sabores from './Sabores';
import Bebidas from './Bebidas';


const Plus = ({ guajolota, cart, setCart, guajolotas }) => {

    const [sabores, setSabores] = useState([
        { ids: 1, names: 'Verde', images: Verdes, prices: 25 },
        { ids: 2, names: 'Mole', images: Moles, prices: 25 },
        { ids: 3, names: 'Guayaba', images: Guayabas, prices: 25 },
        { ids: 4, names: 'Piña', images: Piñas, prices: 25 },
        { ids: 5, names: 'Pasas', images: Pasass, prices: 25 },
        { ids: 5, names: 'Rajass', images: Rajass, prices: 25 }
    ])

    const [bebidas, setBebeidas] = useState([
        { idb: 1, nameb: 'Champurado', imageb: Champurado, priceb: 12 },
        { idb: 2, nameb: 'Atole de arroz', imageb: Arrozg, priceb: 12 },
        { idb: 3, nameb: 'Hot chocolat', imageb: Chocolates, priceb: 12 },
        { idb: 4, nameb: 'Cafe negro ', imageb: Cafe, priceb: 12 }

    ])

    // const {idb, nameb, iamgeb, priceb} = bebida
    const { id, name, image, price } = guajolota

    const [counter, setCounter] = useState(0)

    const addGuaj = id => {
        const guajolota = guajolotas.filter((guajolota) => guajolota.id === id)
        setCart([...cart, ...guajolota])
        
    };

    const delGuajolota = id => {
        const guajolota = cart.filter(guajolota => guajolota.id !== id)
        setCart([...guajolota])
       

    }

    const handleSumar = () => {
        setCounter(counter + 1)
    }
    const handleRestar = () => {
        setCounter(counter - 1)
    }
    const total = (pricet, counter) => {
        let tot = (counter * pricet)
        return tot

    }

    return (
        <div>
            {/* addGuaj(id);
           delGuajolota(id);  */}
            <GrdAbu>
                <Grdt1>
                    <Link to="/guajolota" style={{ textDecoration: 'none', color: '#1f1f1fac'  }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                </Grdt1>

                <Grdt2>
                    <Link to="/cart" style={{ textDecoration: 'none', color: '#1f1f1fac'  }}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </Grdt2>

                <Grdt3  >
                    <Imggua src={image} alt="" />
                </Grdt3>
                <Grdt4>{name}</Grdt4>

                <Grdt5>$ {price} MXN</Grdt5>
                <Grdph6>
                    <Grdph61 type='button' onClick={() => { handleRestar(); delGuajolota(id) }}><FontAwesomeIcon icon={faMinus} /> </Grdph61>
                    <Grdph62>{counter}</Grdph62>
                    <Grdph63 type='button' onClick={() => { handleSumar(); addGuaj(id) }}  ><FontAwesomeIcon icon={faPlus} /></Grdph63>
                </Grdph6>

                <Grdt7>Sabor</Grdt7>

                <Grdph8>
                    {sabores.map((sabor) => (
                        <Sabores
                            key={sabor.ids}
                            sabor={sabor}
                            cart={cart}
                            setCart={setCart}
                            sabores={sabores}
                        />
                    )
                    )}

                </Grdph8>
                <Grdt9>Guajolocombo</Grdt9>
                <Grdt10><p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p></Grdt10>
                <Grdph11>

                    <Grdph111 style={{ gridColumn: '1/13' }} >{bebidas.map((bebida) => (
                        <Bebidas
                            key={bebida.idb}
                            bebida={bebida}
                            cart={cart}
                            setCart={setCart}
                            bebidas={bebidas}
                        />

                    )
                    )}
                    </Grdph111>

                </Grdph11>

                <Grdph12>
                    <Grdph121>

                        < Gridss4 type='button' onClick={() => addGuaj(id)}>
                            Agregar {counter} al carrito
                        </ Gridss4 >

                    </Grdph121>
                    <Grdph122>$ {total(price, counter)} MXN</Grdph122>
                </Grdph12>
            </GrdAbu>
        </div>
    )
}

export default Plus
