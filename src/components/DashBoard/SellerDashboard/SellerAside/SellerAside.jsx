import React from 'react'

const SellerAside = () => {
    return (
        <>
            <aside className="w-1/4 bg-gray-200 flex flex-col gap-2 text-center p-2">
                <div>
                    <img
                        class="inline-block h-14 w-14 rounded-full"
                        src="https://avatars.githubusercontent.com/u/58238022?v=4"
                        alt="Dan_Abromov"
                    />
                    <p>Seller Name</p>
                </div>


                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Dashboard</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Products</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Orders</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Inventory</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Customer Info</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400'>Promotion & Discount</p>


            </aside>

        </>
    )
}

export default SellerAside