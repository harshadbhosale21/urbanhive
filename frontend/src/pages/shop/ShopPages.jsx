import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductList from './ProductList';

const ShopPages = () => {

    const [priceRange, setPriceRange] = useState('');
    const [category, setCategory] = useState('');


    return (
        <>
            <section className="section-home shop-pages">
                <section className="Pages-Header store-bg-img">
                    <div className="shop-pages-header d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center text-light">Store</h1>
                        <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>STORE</NavLink></p>
                    </div>
                </section>
                <div className="container shop-nav my-3">
                    <div className="row gy-4 p-2 d-flex align-items-center">
                        <div className=" col-lg-4 col-12 d-flex align-items-center ">
                            <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Enter what u are looking for" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-6 ">
                            <select class="form-select w-100" onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                                <option selected value=''>Category: All</option>
                                <option value='womens'>Women's</option>
                                <option value='mens'>Men's</option>
                                <option value='accessories'>Accessories</option>
                                <option value='jewelery'>Jewelery</option>
                                <option value='electronics'>Electronics</option>
                            </select>
                        </div>
                        <div className=" col-lg-4 col-6">
                            <select class="form-select w-100" onChange={(e) => setPriceRange(e.target.value)} aria-label="Default select example">
                                <option selected value=''>Price Range</option>
                                <option value='100-200'>100-200</option>
                                <option value='200-300'>201-300</option>
                                <option value='301-400'>301-400</option>
                                <option value='401-500'>401-500</option>
                                <option value='501-600'>501-600</option>
                                <option value='above 600'>above 600</option>
                            </select>
                        </div>
                    </div>
                </div>
                <ProductList category={category} priceRange={priceRange} />

            </section >
            {/*  */}
        </>
    )
}

export default ShopPages
