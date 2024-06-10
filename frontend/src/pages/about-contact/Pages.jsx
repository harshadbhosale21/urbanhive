import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
            <section className="Pages-Header about-bg-img">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-light">About</h1>
                    <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>ABOUT US</NavLink></p>
                </div>
            </section>
            <section className="pages-content">
                <div className="container" style={{ borderBottom: '2px solid #F6F6F6', paddingBottom: '50px' }}>
                    <div className="row gy-4">
                        <div className="col-12 col-md-8">
                            <h3>ABOUT OUR SHOP</h3>
                            <p className="my-3">Urban Hive is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling. And emotion are quickened. Duis turpis eros, tincidunt at, tempor a nisi. Fusce turpis mi, sollicitudin non volutpat id, ornare at nunc. Vestibulum tristique molestie mauris, non ultricies turpis consequat eget.</p>
                        </div>
                        <div className="col-12 col-md-3 offset-md-1">
                            <h3>10</h3>
                            <p>Years on Global Market</p>
                            <h3>45</h3>
                            <p>Partners are Working With Us</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pages-content">
                <div className="py-2 text-center d-flex flex-column align-items-center">
                    <p className="mb-2">Who We Are</p>
                    <h3>MEET OUR TEAM</h3>
                </div>
                <div className="container py-4">
                    <div className="row gy-4">
                        <div className="col-12 col-md-3 px-1 d-flex flex-column align-items-center">
                            <div>
                                <img src="/images/team-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="pt-4 team-info text-center">
                                <h4>Micheal Keene</h4>
                                <p>CEO of Comapany</p>
                                <div className="mt-1 d-flex justify-content-center">
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 px-1 d-flex flex-column align-items-center">
                            <div>
                                <img src="/images/team-2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="pt-4 team-info text-center">
                                <h4>Monika Green</h4>
                                <p>Marketing Officer</p>
                                <div className="mt-1 d-flex justify-content-center">
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 px-1 d-flex flex-column align-items-center">
                            <div>
                                <img src="/images/team-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="pt-4 team-info text-center">
                                <h4>Alex Smith</h4>
                                <p>Photographer</p>
                                <div className="mt-1 d-flex justify-content-center">
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 px-1 d-flex flex-column align-items-center">
                            <div>
                                <img src="/images/team-4.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="pt-4 team-info text-center">
                                <h4>Tom Trump</h4>
                                <p>Co-founder</p>
                                <div className="mt-1 d-flex justify-content-center">
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                    <img src="/images/team-tw.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo  */}
            <section className="abt-promo d-flex  justify-content-center align-items-center">
                <div className="text-center d-flex justify-content-center align-items-center">
                    <h2>The Best Seller</h2>
                </div>
            </section>

            {/* Happy-Clients  */}
            <section className="pages-content">
                <div className="py-2 text-center d-flex flex-column align-items-center">
                    <p className="mb-2">Hot Customers</p>
                    <h3>HAPPY CLIENTS</h3>
                </div>
                <div className="container py-4">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item clients-caro text-center active">
                                <p>I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.
                                </p>
                                <span>Nicolas Jackson</span>
                            </div>
                            <div class="carousel-item clients-caro text-center ">
                                <p>Needless to say, beautifully designed theme that serves many purpose. Even more sutomers support is the best! Highly recommend this theme to anyone who enjoys a fine product.
                                </p>
                                <span>Matthew Wilson</span>
                            </div>
                            <div class="carousel-item clients-caro text-center">
                                <p>This is the excellent theme. It has many useful features that can be use for any kind of business. The support is just amazing and design
                                </p>
                                <span>John C. Marshall</span>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Contact = () => {
    return (
        <>
            <section className="Pages-Header contact-title-bg">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-light">Contact</h1>
                    <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>CONTACT</NavLink></p>
                </div>
            </section>
            <section className="pages-content contact-cont-bg">
                <div className="container contact-form">
                    <div className="row gy-4">
                        <div className="col-12 col-lg-8 px-4">
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label fw-bold">Full Name*</label>
                                <input type="text" class="form-control input-field" id="formGroupExampleInput" placeholder="John" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label fw-bold ">E-mail*</label>
                                <input type="text" class="form-control input-field" id="formGroupExampleInput2" placeholder="abc@gmail.com" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label fw-bold ">Subject*</label>
                                <input type="text" class="form-control input-field" id="formGroupExampleInput2" placeholder="About......." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Message</label>
                                <textarea class="form-control input-field" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div className="mb-2">
                                <button type="submit" class="btn contact-form-btn ">Send Message</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="row gy-4 mt-4 mt-lg-3">
                                <div className="col-6 col-lg-12 contact-info text-center text-lg-start mb-0 mb-lg-4 ps-0 ps-lg-5 ">
                                    <h5>ADDRESS</h5>
                                    <p className="mb-0">shivaji Nagar</p>
                                    <p className="mb-0">Pune</p>
                                    <p className="mb-0">Maharashtra</p>
                                </div>
                                <div className="col-6 col-lg-12  contact-info text-center text-lg-start mb-0 mb-lg-4  ps-0 ps-lg-5  ">
                                    <h5>INFORMATION</h5>
                                    <p className="mb-0">urbanhivemail@gmail.com</p>
                                    <p className="mb-0">+00 1283809893</p>
                                    <p className="mb-0">+00 7786790909</p>
                                </div>
                                <div className="col-12 col-lg-12  contact-info text-center text-lg-start mt-4 mt-lg-0  ps-0 ps-lg-5  ">
                                    <h5>BUSINESS HOURS</h5>
                                    <p className="mb-0">Monday-Friday: 9am to 20pm</p>
                                    <p className="mb-0">Saturday: 9am to 7pm</p>
                                    <p className="mb-0">Sunday: Holiday</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { About, Contact };