import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Filtered = ({ productNames }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = {};
                if (productNames && productNames.length > 0) {
                    params.names = productNames.join(',');
                }

                const response = await axios.get('http://localhost:5000/store/trendy', { params });
                setProducts(response.data.data);
                console.log(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [productNames])
    return (
        <>
            {products.map((item) => (
                <div className="col-6 col-md-3 px-2 px-lg-3 " key={item._id} >
                    <div className="img-container shop-item">
                        <img src={item.image} className='img-fluid' alt="" />
                        <div className="caro-cont shop-box">
                            <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                <NavLink className="text-light fw-bold">{item.category}</NavLink>
                                <h3 className="text-light fw-bold">{item.title}</h3>
                                <p><del className='px-2'>$730.00 </del> <span className='px-2'>{item.price}</span></p>
                                <NavLink to={`/shoppages/${item._id}`}><button className="btn btn-caro fw-bold">Quick View</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Filtered
