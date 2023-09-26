import React, { useState } from 'react';
import SellerHeader from './SellerHeader/SellerHeader';
import SellerAside from './SellerAside/SellerAside';
import SellerMainDash from './SellerMainDash/SellerMainDash';
import SellerFooter from './SellerFooter/SellerFooter';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Inventory from './Inventory/Inventory';
import SellerCusInfo from './SellerCusInfo/SellerCusInfo'
import SellerPromoDisc from './SellerPromoDisc/SellerPromoDisc'

const SellerDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('MainDash');

    return (
        <>
            <div className="bg-gray-100 h-[100vh]">
                <SellerHeader />

                <div className="container m-auto flex h-[80%]">
                    <SellerAside setActiveComponent={setActiveComponent} />
                    {activeComponent === 'MainDash' && <SellerMainDash />}
                    {activeComponent === 'Products' && <Products />}
                    {activeComponent === 'Orders' && <Orders />}
                    {activeComponent === 'Inventory' && <Inventory />}
                    {activeComponent === 'CusInfo' && <SellerCusInfo />}
                    {activeComponent === 'PromoDisc' && <SellerPromoDisc />}
                </div>

                <SellerFooter />
            </div>
        </>
    );
};

export default SellerDashboard;
