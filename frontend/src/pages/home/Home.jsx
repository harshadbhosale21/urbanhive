import React from 'react'
import { NavLink } from 'react-router-dom'
import Filtered from './Filtered'

const Home = () => {

    const specificProducts = ['Drawing Dress', 'Mesha Sandals', 'Tribal Gray Blazer', 'Sweater w/Colar', 'Lola May Blazer', 'Faux Suit', 'Cray Watch', 'Jersey Stylish']

    return (
        <>
            <section className="section-home">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item  active" data-bs-interval="2000">
                            <div className="img-container">
                                <img src="/images/caro-1.jpg" className='caro-img img-fluid' alt="" />
                                <div className=" caro-cont d-flex flex-column  align-items-center justify-content-center  ">
                                    <h1 className="text-center text-light">Exclusive Products</h1>
                                    <p className="text-light">Get awesome items only in zest online shopping</p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-caro fw-bold mx-2">Buy Now</button>
                                        <button className='btn btn-outline-light fw-bold mx-2'> Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="2000">
                            <div className="img-container">
                                <img src="/images/caro-2.jpg" className='caro-img img-fluid' alt="" />
                                <div className=" caro-cont d-flex flex-column align-items-center justify-content-center  ">
                                    <h1 className="text-center text-light">Great Fashion 2024</h1>
                                    <p className="text-light">New arrival collection </p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light fw-bold mx-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <div className="img-container">
                                <img src="/images/caro-3.jpg" className='caro-img img-fluid' alt="" />
                                <div className=" caro-cont d-flex flex-column  align-items-center justify-content-center  ">
                                    <h1 className="text-center text-light">Enjoy Online Shopping</h1>
                                    <p className="text-light">Get awesome items only in zest online shopping</p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light fw-bold mx-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* ************************************************************** Page 2 ****************************************************************  */}
            <section className="home-pages">
                <div className="container">
                    <div className="row gy-4 justify-content-between p-1">
                        <div className="col-12 col-lg-4 px-0 px-lg-3">
                            <NavLink to=''> <div className="img-container page-2-box">
                                <img src="/images/home-page2-item1.jpg" alt="" className="top-box img-fluid" />
                                <div className="top-box-cont text-center">
                                    <h1 className="text-light">For Him</h1>
                                    <h2 className="text-light">Best Selling Deals</h2>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-4 px-0 px-lg-3">
                            <NavLink to=''>
                                <div className="img-container page-2-box">
                                    <img src="/images/home-page2-item2.jpg" alt="" className="top-box img-fluid" />
                                    <div className="top-box-cont text-center">
                                        <h1 className="text-light">Accessories</h1>
                                        <h2 className="text-light">Hot Trends</h2>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-12 col-lg-4 px-0 px-lg-3">
                            <NavLink to=''>
                                <div className="img-container page-2-box">
                                    <img src="/images/home-page2-item3.jpg" alt="" className="top-box img-fluid" />
                                    <div className="top-box-cont text-center">
                                        <h1 className="text-light">For Her</h1>
                                        <h2 className="text-light">New Collection</h2>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-pages pt-3">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 pages-cont-2 text-center d-flex flex-column align-items-center">
                            <p>Hot items of this year</p>
                            <h2>TRENDY PRODUCTS</h2>
                        </div>
                    </div>
                    <div className="row gy-4 my-2">
                        <Filtered productNames={specificProducts} />
                        {/* <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container shop-item">
                                <img src="/images/shop_item_1.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Women</NavLink>
                                        <h3 className="text-light fw-bold">Drawing Dress</h3>
                                        <p><del className='px-2'>$730.00 </del> <span className='px-2'> $200.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_2.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Accessories</NavLink>
                                        <h3 className="text-light fw-bold">Mesha Sandals</h3>
                                        <p><del className='px-2'>$500.00 </del> <span className='px-2'> $250.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_3.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Women</NavLink>
                                        <h3 className="text-light fw-bold">Tribal Gray Brazer</h3>
                                        <p><span className='px-2'> $800.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_4.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Men</NavLink>
                                        <h3 className="text-light fw-bold">Sweater w/Colar</h3>
                                        <p><span className='px-2'> $299.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_5.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Women</NavLink>
                                        <h3 className="text-light fw-bold">Lola May Blazer</h3>
                                        <p><span className='px-2'> $42.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_6.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Men</NavLink>
                                        <h3 className="text-light fw-bold">Faux Suit</h3>
                                        <p><del className='px-2'>$500.00 </del> <span className='px-2'> $200.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_7.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Accessories</NavLink>
                                        <h3 className="text-light fw-bold">Cray Watch</h3>
                                        <p> <span className='px-2'> $280.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-2 px-lg-3">
                            <div className="img-container  shop-item">
                                <img src="/images/shop_item_8.jpg" className='img-fluid' alt="" />
                                <div className="caro-cont shop-box">
                                    <div className="d-flex trendy-products w-100 h-100 flex-column justify-content-center align-items-center text-center">
                                        <NavLink className="text-light fw-bold">Women</NavLink>
                                        <h3 className="text-light fw-bold">Jersey Stylish</h3>
                                        <p> <span className='px-2'> $289.00</span></p>
                                        <button className="btn btn-caro fw-bold">Quick View</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="happy-clients my-4">
                <div className="happy-clients-hsla">
                    <div className="container d-flex flex-column align-items-center pages-cont-2 text-center">
                        <h2 className='pb-3'>HAPPY CLIENTS</h2>
                        {/* Carousel  */}
                        <div id="carouselExampleAutoplaying" class="carousel slide my-3" data-bs-ride='carousel'>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item client-text active">
                                    <p className="text-light">I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.</p>
                                    <p className="text-light">John C. marshall / Art Director</p>
                                </div>
                                <div class="carousel-item  client-text">
                                    <p className="text-light">I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.</p>
                                    <p className="text-light">Mathew Wilson / PR Agent</p>
                                </div>
                                <div class="carousel-item  client-text">
                                    <p className="text-light">I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.</p>
                                    <p className="text-light">Andrew Smith / CEO Smith Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specails Offers  */}
            <section className="home-page-last">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 col-lg-3 d-flex flex-column align-items-start px-5 ">
                            <h3 className="py-3">SPECIAL OFFERS</h3>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_1.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Skinny Dress</p>
                                    <del>$380.00</del>
                                    <span>$159.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_2.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Mesha Sandals</p>
                                    <span>$250.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_3.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Tribal Gray Blazer</p>
                                    <span>$330.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column align-items-start px-5 ">
                            <h3 className="py-3">BESTSELLERS</h3>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_9.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Camo Belt</p>
                                    <span>$33.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_10.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Heathered Scraf</p>
                                    <span>$180.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_11.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Mattle Brown Bag</p>
                                    <span>$180.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column align-items-start px-5 ">
                            <h3 className="py-3">ACCESSORIES</h3>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_5.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Lalo May Crop Blazer</p>
                                    <span>$42.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_7.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Watch</p>
                                    <span>$280.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_8.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Jersey STylish</p>
                                    <span>$289.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-column align-items-start px-5 ">
                            <h3 className="py-3">TOP RATED</h3>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_4.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Sweater w/Colar</p>
                                    <span>$299.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_6.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Fuax Suit</p>
                                    <span>$233.00</span>
                                </div>
                            </div>
                            <div className="homepagelast-box d-flex ">
                                <div className='me-2'>
                                    <img src="/images/shop_item_12.jpg" className='img-fluid' alt="" />
                                </div>
                                <div className="ps-3">
                                    <p>Sport T-shirt</p>
                                    <span>$99.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
