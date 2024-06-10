import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ProductList = ({ category, priceRange }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = {};
                if (category) {
                    params.category = category;
                }

                if (priceRange) {
                    const [minPrice, maxPrice] = priceRange.split('-');
                    params.minPrice = minPrice;
                    params.maxPrice = maxPrice;
                }

                const response = await axios('http://localhost:5000/store/items', { params });
                setProducts(response.data.data);
                console.log(response.data)
            }
            catch (error) {
                console.log(error)
            }
        };

        fetchProducts()
    }, [category, priceRange])

    return (
        <>
            <div className="container-fluid ">
                <div className="row gy-4 flex-row">
                    {products.map((item) => {
                        return (
                            <>
                                <div className="col-6 col-lg-3">
                                    <div className="card h-100" key={item._id}>
                                        <div className="card-header text-center">
                                            <div className="title text-fluid">{item.title}</div>
                                        </div>
                                        <div className="card-body  text-center">
                                            <div className="card-img d-flex align-items-center justify-content-center h-100">
                                                <img src={item.image} alt="images" width='100' />
                                            </div>
                                        </div>
                                        <div className="card-footer  text-center">
                                            <p>{item.price}</p>
                                            <NavLink to={`/shoppages/${item._id}`}>
                                                <button className='btn btn-caro'>Quick View</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default ProductList
