import React, { useEffect, useState } from 'react'
import './style.css'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { useCart } from '../../context/cartContext';

const ProductView = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/store/items/${id}`);
                setProduct(response.data.product)
                console.log(response.data.product)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchProducts();
    }, [id]);

    if (!product) {
        console.log('no product')
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', product });
    }

    return (
        <>
            <section className="product-view">
                <h6 className="text-center my-3"><NavLink to='/shoppages'>Go Back</NavLink></h6>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 p-3 ">
                            <div className="h-100 d-flex justify-content-center">
                                <img src={product.image} alt="" className='img-fluid w-50' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6  p-3 pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start">
                            <div className="product-heading text-center text-lg-start">
                                <p className='mb-2'>{product.category}</p>
                                <h3>{product.title}</h3>
                                <h4 className="mt-3">Cost: {product.price}</h4>
                                <h5>
                                    Rating: {product.rating.rate}/5
                                    <span className='px-4'>In Stock: {product.rating.count}</span>
                                </h5>

                            </div>
                            <div className="mt-3 mt-lg-5 text-center text-lg-start">
                                <h5>Size</h5>
                                <button className='btn btn-sm btn-success mx-2'>XS</button>
                                <button className='btn btn-sm btn-success mx-2'>S</button>
                                <button className='btn btn-sm btn-success mx-2'>M</button>
                                <button className='btn btn-sm btn-success mx-2'>L</button>
                                <button className='btn btn-sm btn-success mx-2'>XL</button>
                                <div className=" text-center text-lg-start my-3">
                                    <button className="btn btn-dark w-100" onClick={handleAddToCart}>Add To Cart</button>
                                    <NavLink to={`/buyitem/${product._id}`}>
                                        <button className="btn btn-outline-success w-100 my-2" >Proceed To Buy</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="mt-4  text-center text-lg-start">
                                <h5>Details</h5>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductView
