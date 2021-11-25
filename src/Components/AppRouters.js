import React,{useState} from 'react'
import {BrowserRouter, 
    Routes,
    Route,
    Link} 
    from 'react-router-dom';

import Cart from './Cart';    
import Guajolota from './Guajolota';
import Bebidas from './Bebidas';
import Tamales from './Tamales'
import { Main } from './Main';



//importo las imagenes de guajolotas 
import Guayabag from '../imagesGuajolotas/Guayabag.png';
import Moleg from '../imagesGuajolotas/Moleg.png';
import Pasasg from '../imagesGuajolotas/Pasasg.png';
import Piñag from '../imagesGuajolotas/Piñag.png';
import Verdeg from '../imagesGuajolotas/Verdeg.png';




//importo las imagenes de bebidas
import Arrozg from '../imagesbebidas/Arroz.png';
import Cafe from '../imagesbebidas/Cafe.png';
import Champurado from '../imagesbebidas/Champurrado.png';
import Chocolates from '../imagesbebidas/Chocolate.png'




//importo las imagenes de tamales
import Guayabat from '../imagesTamales/Guayabat.png'
import Molet from '../imagesTamales/Molet.png';
import Pasast from '../imagesTamales/Pasast.png';
import Piñat from '../imagesTamales/Piñat.png';
import Verdet from '../imagesTamales/Verdet.png';
import Plus from './Plus';
import PlusBebidas from './PlusBebidas';
import PlusTamales from './PlusTamales'


export const AppRouter = () => {


    //creo el estado de guajolotas con un listado de guajolotas 
    const [guajolotas, setGuajolotas] = useState([
        { type:"guajolotas", id: 1, name: 'Verde',  image: Verdeg, price: 25},
        {id: 2, name: 'Mole', image: Moleg, price: 25},
        {id: 3, name: 'Guayaba', image: Guayabag, price: 25},
        {id: 4, name: 'Piña', image: Piñag, price: 25},
        {id: 5, name: 'Pasas', image: Pasasg, price: 25}
      ])

//creo el estado de bebidas con un listado de bebidas 
      const [bebidas, setBebeidas] = useState([
        {type:"bebidas", idb: 1, nameb: 'Champurado', imageb: Champurado, priceb: 12},
        {idb: 2, nameb: 'Atole de arroz', imageb: Arrozg, priceb: 12},
        {idb: 3, nameb: 'Hot chocolat', imageb: Chocolates, priceb: 12},
        {idb: 4, nameb: 'Cafe negro ', imageb: Cafe, priceb: 12}
        
      ])

//creo el estado de tamales con un listado de tamales 
      const [tamales, setTamales] = useState([
        { type:"tamales", idt: 1, namet: 'Verde', imaget: Verdet, pricet: 14},
        {idt: 2, namet: 'Mole', imaget: Molet, pricet: 14},
        {idt: 3, namet: 'Guayaba', imaget: Guayabat, pricet: 14},
        {idt: 4, namet: 'Piña', imaget: Piñat, pricet: 14},
        {idt: 5, namet: 'Pasas', imaget: Pasast, pricet: 14}
        
      ])

//creo el estado del carrito y el setCart para actualizar su estado

      const [cart, setCart] = useState([])


    

    return (
        <div>
            <BrowserRouter>
            <Main/>
                <Routes>

                    <Route exact path="/guajolota" element={guajolotas.map((guajolota) => (

                            <>
                            
                            {/* aqui estra el enrutamiento asi la plantilla plus pintando guajolotas  */}
                            <Link to="/plus/guajolota" style={{ textDecoration: 'none' }}><Guajolota
                            key= {guajolota.id}
                            guajolota={guajolota}
                            cart={cart}
                            setCart={setCart}
                            guajolotas={guajolotas}
                            />  
                            </Link>
                           
                            </>

                            )
                        )}/>  
                    <Route exact path="/bebida" element={bebidas.map((bebida) => (
                           
                           <>
                           {/* aqui estra el enrutamiento asi la plantilla plus pintando bebidas  */}
                           <Link to="/plus/bebidas" style={{ textDecoration: 'none' }}><Bebidas
                            key= {bebida.idb}
                            bebida={bebida}
                            cart={cart}
                            setCart={setCart}
                            bebidas={bebidas}
                            />
                            </Link>
                            
                            </>

                            )
                        )}/> 
                    <Route exact path="/tamal" element= {tamales.map((tamal) => (

                            <>
                            {/* aqui estra el enrutamiento asi la plantilla plus pintando tamales */}
                           <Link to="/plus/tamales" style={{ textDecoration: 'none' }}> <Tamales
                            key= {tamal.idt}
                            tamal={tamal}
                            cart={cart}
                            setCart={setCart}
                            tamales={tamales}
                            />
                            </Link>
                            
                            </>

                            )
                        )}/> 
                   



                    {/* Enrutamiento para ver plus seleccionar combos o add mas productos selectionar sabor mostrando guajolotas  */}
                    <Route exact path="/plus/guajolota" element = {guajolotas.map((guajolota) => (
                            <Plus 
                            key= {guajolota.id}
                            guajolota={guajolota}
                            cart={cart}
                            setCart={setCart}
                            guajolotas={guajolotas}
                            
                            />  
                            
                            )
                        )} />

                    {/* Enrutamiento para ver plus seleccionar combos o add mas productos selectionar sabor mostrando bebidas  */}
                    <Route exact path="/plus/bebidas" element = {bebidas.map((bebida) => (
                            <PlusBebidas
                            key= {bebida.idb}
                            bebida={bebida}
                            cart={cart}
                            setCart={setCart}
                            bebidas={bebidas}
                            
                            />  
                            
                            )
                        )} />
                          {/* Enrutamiento para ver plus seleccionar combos o add mas productos selectionar sabor mostrando bebidas  */}
                    <Route exact path="/plus/tamales" element = {tamales.map((tamal) => (
                            <PlusTamales
                            key= {tamal.idt}
                            tamal={tamal}
                            cart={cart}
                            setCart={setCart}
                            tamales={tamales}
                            
                            />  
                            
                            )
                        )} />

                    <Route exact path="/cart" element={<Cart cart ={cart} />} /> 
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}