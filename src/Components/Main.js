import React from 'react';
import { Gridp, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Grid7, Grid8, Input} from './Styles/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './Navbar';
import { Link } from "react-router-dom";


export const Main = () => {

    return (
        <>

            <Gridp>
                <Grid1>
                    <img src="https://res.cloudinary.com/dv08oqgvx/image/upload/v1636943290/rtimzm8sfrtbirdr3z24.png" alt="" />
                </Grid1>

                <Grid2>
                    <Link to="/cart" style={{ textDecoration: 'none', color: '#1f1f1fac'   }}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </Grid2>

                <Grid3>
                    Nada como una Guajolota para empezar el día
                </Grid3>

                <Grid4>
                    <FontAwesomeIcon icon={faSearch} />
                </Grid4>

                <Grid5>
                    <Input  type="text" placeholder="Sabor de guajolo..." >
                    </Input>
                </Grid5>

                <Grid6>
                <Link  to="/guajolota" style={{ textDecoration: 'none', color: '#1f1f1fac', fontWeight: 'bold'  }}>Guajolotas </Link>
                </Grid6>

                <Grid7>
                <Link  to="/bebida" style={{ textDecoration: 'none', color: '#1f1f1fac', fontWeight: 'bold'  }}>Bebidas</Link>
                </Grid7>

                <Grid8>
                <Link  to="/tamal" style={{ textDecoration: 'none', color: '#1f1f1fac', fontWeight: 'bold' }}>Tamales</Link>
                </Grid8> 

            </Gridp>
            
        </>
    )
}
<input type="text" placeholder="sabor de guajolota, bebidas, sabor de tamal" >
</input>