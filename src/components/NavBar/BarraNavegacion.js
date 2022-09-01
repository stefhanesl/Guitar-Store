import React from 'react';

const BarraNavegacion = () => {
    return (
        <div className='responsive-header global-header'>
            <div class="responsive-header_branding">

            </div>
            <div className='response-header_utility'>
                <div className='responsive-header_utility_mobile'>
                    <a href='/#' aria-label='Hamburger Menu' role='presentation'></a>
                    <a href='/#' class='toggle-search' aria-label='Search' role='presentation'></a>
                </div>
                <a href='/#' class='logo-store'></a>
                <div className='responsive-header_utility_search' role='search' aria-label='Que podemos ayudarte a busca?'></div>
                <a href='/#' className='responsive-header_utility_help'></a>
                <span className='responsive-header_utility_signin'>
                    <div className='responsive-header_utility_signin_icon'></div>
                    <span>Sign In</span>
                    <div id='dropdown-myAccount' className='responsive-header_utility_account-dropdown' >
                        <ul>
                            <li>
                                <div id='header_login_link'>
                                    <a id='btn_logIn'></a>
                                </div>
                            </li>
                            <li>
                                <div id='header_signup_link'>
                                    <a id='btn_signup'></a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </span>
                <a href='/#' className='responsive-header_utility_cart'>
                    <span className="cart-count" style="display: block;color: black;"></span>
                    <div className="responsive-header_utility_cart_icon"></div>
                    <span className="responsive-header_utility_cart_label">Cart</span>
                </a>

            </div> 
            <div className='responsive-header_browse' aria-label='Main'>
                <div class="responsive-header_browse_header">
                    <div className='responsive-header_browse_categorymenu -collapsible'>
                        
                    </div>
                    <ul className='responsive-header_browse_categories'>
                        <li className='categories-item'>
                            <a className='products_association_id'></a>
                        </li>
                        <li className='categories-item'>
                            <a className='products_association_id'></a>
                        </li>
                        <li className='categories-item'>
                            <a className='products_association_id'></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BarraNavegacion;
  