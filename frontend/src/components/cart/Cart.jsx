import React from 'react';
import './styles.css'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/cartContext';


const Cart = () => {

    const { cart, dispatch } = useCart();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', id })
    };


    return (
        <>
            <section className="Pages-Header shop-cart-bg">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-light">Shopping Cart</h1>
                    <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>SHOP</NavLink> / <NavLink>CART</NavLink></p>
                </div>
            </section>
            <section className="shop-cart">
                <div className="container">
                    {cart.length === 0 ? (
                        <h3>Your Cart is Empty.</h3>
                    ) : (
                        <div className="row">
                            {cart.map((item) => (
                                <div className='col-12 col-lg-3 mb-4' key={item._id}>
                                    <div className='card'>
                                        <div className='card-header text-center'>
                                            <div className='title'>{item.title}</div>
                                        </div>
                                        <div className='card-body text-center'>
                                            <img src={item.image} alt={item.title} className='img-fluid w-50' />
                                            <p>{item.price}</p>
                                        </div>
                                        <div className='card-footer text-center'>
                                            <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item._id)}>
                                                Remove
                                            </button>
                                            <NavLink to={`/buyitem/${item._id}`}>
                                                <button className='btn btn-success mx-2'>Buy</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    }
                    <NavLink to='/shoppages' className='btn btn-primary mt-3'>Continue Shopping</NavLink>
                </div>
            </section>
        </>
    )
}

export default Cart;
