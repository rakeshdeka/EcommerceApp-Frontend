import React from 'react';
import AdminHeader from './AdminHeader/AdminHeader'
import AdminAside from './AdminAside/AdminAside'
import AdminMainDash from './AdminMainDash/AdminMainDash'
import AdminFooter from './AdminFooter/AdminFooter'
import Inventory from './Inventory/Inventory'
import Products from './Products/Products'
import Sellers from './Sellers/Sellers'
import UserMang from './UserMang/UserMang'
import PromoDisc from './PromoDisc/PromoDisc'
import { useState } from 'react'

const AdminDashboard = () => {
    const [adminActiveComponent, setAdminActiveComponent] = useState('AdminMainDash');
    return (
        <>

            <div className="bg-gray-100 h-[100vh]">
                <AdminHeader />
                <div className="container m-auto flex h-[80%]">

                    <AdminAside setAdminActiveComponent={setAdminActiveComponent} />
                    {adminActiveComponent === 'AdminMainDash' && <AdminMainDash />}
                    {adminActiveComponent === 'Products' && <Products />}
                    {adminActiveComponent === 'Sellers' && <Sellers />}
                    {adminActiveComponent === 'Inventory' && <Inventory />}
                    {adminActiveComponent === 'UserMang' && <UserMang />}
                    {adminActiveComponent === 'PromoDisc' && <PromoDisc />}
                </div>
                {/* <AdminFooter /> */}
            </div>

        </>
    )
}

export default AdminDashboard