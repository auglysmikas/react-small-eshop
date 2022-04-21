import React from 'react';
import"./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">

            <div className="header_logo">
                <StorefrontIcon fontSize='large' className='header_logoImage' />
                <h2 className="header_logoTitle">eShop</h2>


            </div>

            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon fontSize='large' className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="nav_item">
                    <div className="nav_itemLineOne">hello</div>
                    <div className="nav_itemLineTwo">sign</div>
                </div>
                <div className="nav_item">
                    <div className="nav_itemLineOne">your</div>
                    <div className="nav_itemLineTwo">shop</div>
                </div>
                <div className="nav_item">
                    <ShoppingCartIcon className='itemBasket'/>
                    <div className="nav_itemLineTwo nav_basketCount">0</div>
                </div>

            </div>

        </div>
    );
};

export default Header;