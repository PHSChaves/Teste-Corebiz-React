import React, {useState} from 'react';
import Products from '../Products';

import './style.css';


const Shelf = ({addProduct}) => {
    
    return(
        <div className="container shelf">
            <p className="shelf__seller">Mais Vendidos</p>
            <Products addToCart={addProduct}/>
        </div>
    )
}

export default Shelf;