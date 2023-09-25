import React from 'react'

const SellerMainDash = () => {
    return (
        <>
            <main className="w-3/4 bg-white p-4 flex flex-wrap border border-black justify-between text-center">

                <div className=" max-h-16 w-30 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Products</div>
                <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Add Products</div>
                <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Manage Profile</div>
                <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Orders</div>
                <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Payment Details</div>
                <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Transaction Details</div>
                <div className=" max-h-16 w-28  text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer hover:bg-slate-400">Change Password</div>
            </main>

        </>
    )
}

export default SellerMainDash