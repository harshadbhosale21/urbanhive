import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/userAuth';
import { useCart } from '../../context/cartContext';
import './styles.css'

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed">
                <div className="container-fluid">
                    <NavLink className='navbar-brand'>UrbanHive</NavLink>
                    <button className='navbar-toggler  order-2 order-lg-1' type='button' data-bs-toggle='collapse' data-bs-target='#nav' aria-controls='nav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto m-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link  dropdown-toggle fw-bold" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Pages</NavLink>
                                <ul className="dropdown-menu drop-menu">
                                    <li><NavLink className='dropdown-item nav-dropdown-link' to='/about'>ABOUT Us</NavLink></li>
                                    <li><NavLink className='dropdown-item nav-dropdown-link' to='/contact'>CONTACT</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  fw-bold" to='/shoppages'>Shop</NavLink>
                                {/* <ul className="dropdown-menu drop-menu">
                                    <li><NavLink className="dropdown-item nav-dropdown-link" to='/shoppages'>All Categories</NavLink></li>
                                    <li><NavLink className="dropdown-item nav-dropdown-link" to=''>FOR HER</NavLink></li>
                                    <li><NavLink className="dropdown-item nav-dropdown-link" to=''>ACCESSORIES</NavLink></li>
                                    <li><NavLink className="dropdown-item nav-dropdown-link" to=''>FOR HIM</NavLink></li>

                                </ul> */}
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item my-account">
                                <NavLink class="nav-link" to="/user-dashboard">{authUser ? <img src='/images/user.png' alt='user' /> : <p className='mb-0'>My Account</p>}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex order-1 order-lg-2 nav-cart-button ms-auto ms-lg-0 px-2 px-lg-1" role="search">
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        <NavLink to='/shopcart'><img src="/images/nav-cart.png" title='Cart' alt="" />
                            {cartCount > 0 && (
                                <span className='cart-count'>{cartCount}</span>
                            )}
                        </NavLink>
                    </form>
                </div>
            </nav>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className=' footer-subs'>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-lg-end">
                                <h4>GET THE LATEST UPDATES</h4>
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-lg-start">
                                <input type="text" className="form-controls" placeholder='Enter your e-mail' />
                                <button className="btn footer-btn ms-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-type-1">
                    <div className="container">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-lg-start">
                                <div className='d-flex flex-column align-items-center align-items-lg-start footer-logo'>
                                    <h3 >UrbanHive</h3>
                                    <p className="my-4">Zenna Shop is a very slick and clean <br /> eCommerce template.</p>
                                    <div>
                                        <img src="/images/footer-tw.png" alt="" />
                                        <img src="/images/footer-tw.png" alt="" />
                                        <img src="/images/footer-tw.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-offset-1 col-md-2">
                                <div className='d-flex flex-column align-items-center align-items-lg-start footer-list-h'>
                                    <h5>Information</h5>
                                    <ul className='list-unstyled footer-list'>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0'>Our Stores</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0'>About us</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0'>Delivery Information</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0'>our services</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-offset-1 col-md-2">
                                <div className='d-flex flex-column align-items-center align-items-lg-start footer-list-h'>
                                    <h5>Account</h5>
                                    <ul className='list-unstyled footer-list'>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>My account</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Wishlist</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Order history</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Specials</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-offset-1 col-md-2">
                                <div className='d-flex flex-column align-items-center align-items-lg-start footer-list-h'>
                                    <h5>Services</h5>
                                    <ul className='list-unstyled footer-list'>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Support</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>warranty</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>FAQ</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-offset-1 col-md-2">
                                <div className='d-flex flex-column align-items-center align-items-lg-start footer-list-h'>
                                    <h5>Useful Links</h5>
                                    <ul className='list-unstyled  footer-list'>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Shipping Policy</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Stores</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Returns</NavLink></li>
                                        <li><NavLink className='link-secondary link-offset-2 link-underline-opacity-0 '>Terms & Conditions</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-type-2">
                    <div className="container px-2">
                        <div className="row gy-4">
                            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                                <p>© 2024 UrbanHive | Made by Harshad Bhosale</p>
                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                                <div className="foot-icons d-flex">
                                    <img src="/images/foot-icon1.png" alt="" className='mx-1' />
                                    <img src="/images/foot-icon2.png" alt="" className='mx-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Navbar, Footer };

