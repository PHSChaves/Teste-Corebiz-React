import React, {useState} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Shelf from './components/Shelf';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import './style.global.css';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const handleAddToCart = () => {
        setCartQuantity(cartQuantity + 1);

        localStorage.setItem('Product-quantity', cartQuantity + 1)
    }

    return(
      <>
        <Header cartQuantity={cartQuantity}/>
        <Banner />
        <Shelf addProduct={handleAddToCart}/>
        <Newsletter />
        <Footer />
      </>
    );
}

export default App;