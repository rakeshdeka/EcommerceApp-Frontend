import React from 'react'
import SellerHeader from './SellerHeader/SellerHeader'
import SellerAside from './SellerAside/SellerAside'
import SellerMainDash from './SellerMainDash/SellerMainDash'
import SellerFooter from './SellerFooter/SellerFooter'


const SellerDashboard = () => {
    return (
        <>

            <div className="bg-gray-100 h-[100vh]">
                <SellerHeader />

                <div className="container m-auto flex h-[80%]">

                    <SellerAside />
                    <SellerMainDash />

                </div>

                <SellerFooter />

            </div>

        </>
    )
}

export default SellerDashboard