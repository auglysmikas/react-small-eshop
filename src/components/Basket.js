import React from 'react';
import './CheckoutProducts.css'
import {useStateValue} from "../features/StateProvider";


const CheckoutProducts = ({id, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue()

    function removeFromBasket () {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (

            <div className="checkoutProduct">
                <img src={image}
                     alt="" className="image"/>

                <div className="product_info">
                    <p>€ <b>{price}</b></p>
                    <div className="flex"> {Array(rating)
                        .fill()
                        .map((x, i)=>(
                            <p key={i}>⭐️</p>
                        ))
                    }️</div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>

    );
};

export default CheckoutProducts;