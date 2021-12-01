import React from 'react'
import { GridImageSabores, Gridsabores } from './Styles/Sabores'


const Sabores = ({sabor}) => {

    const {ids, names, images, prices} = sabor
  
    return (
        <div>
            <Gridsabores >
               
                <GridImageSabores>
                    <img src={images} alt="" />
                </GridImageSabores>
               
            </Gridsabores >
        </div>
    )
}

export default Sabores
