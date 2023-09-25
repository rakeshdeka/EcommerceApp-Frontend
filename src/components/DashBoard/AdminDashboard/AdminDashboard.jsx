import React from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminAside from './AdminAside/AdminAside'
import AdminMainDash from './AdminMainDash/AdminMainDash'
import AdminFooter from './AdminFooter/AdminFooter'

const AdminDashboard = () => {
    return (
        <>

            <div className="bg-gray-100 h-[100vh]">
                <AdminHeader />
                <div className="container m-auto flex h-[80%]">
                    <AdminAside />
                    <AdminMainDash />
                </div>
                <AdminFooter />
            </div>

        </>
    )
}

export default AdminDashboard