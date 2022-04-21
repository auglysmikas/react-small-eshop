import React from 'react';
import './Subtotal.css'
import {useStateValue} from "../features/StateProvider";
import {total} from "../features/reducer";

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();


    return (
        <div className='box'>
            <p>Subtotal ({basket.length} items): <b>€ {total(basket)}</b></p>
        </div>
    );
};

export default Subtotal;