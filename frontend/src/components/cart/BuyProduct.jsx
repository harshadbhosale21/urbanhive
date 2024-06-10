import React, { useEffect, useState } from 'react'
import './styles.css'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BuyProduct = () => {


    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {

                const res = await axios(`https://urbanhive-zuco.onrender.com/store/items/${id}`)
                setProduct(res.data.product)
                console.log(res.data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [id])

    return (
        <>
            <section className="buy-page">
                <div className="container py-2 py-lg-4">
                    <div className="row">
                        <div className="col-12 buy-item-1 py-2">
                            <div className="row gy-4">
                                <div className="col-4 buy-item d-flex flex-column justify-content-center align-items-center p-2">
                                    <img src={product.image} alt="img-fluid" />
                                </div>
                                <div className="col-8 p-2 text-center">
                                    <h5>{product.title}</h5>
                                    <h6>Price : {product.price}</h6>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pt-4">
                            <h3 className='text-center'>Delivery Details</h3>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Shipping Address:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <div className="input-group mb-3 count-btn"  >
                                    <button onClick={() => setCount(count + 1)} className="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
                                    <input type="text" value={count} className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon2" />
                                    <button onClick={() => setCount(count - 1)} className="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
                                </div>

                            </div>
                            <div className="mt-3 text-center">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Cash On delivery</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Card Payment</label>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button className="btn btn-success" onClick={() => toast.success('Order Placed !')}>PLace Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default BuyProduct
