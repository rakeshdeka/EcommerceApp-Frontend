import React from 'react'

const SellerDashboard = () => {
    return (
        <>

            <div className="bg-gray-100 h-[100vh]">

                <header className="bg-[#5549E2] text-white p-4 h-[10%]">
                    <div className="container mx-auto">

                        <h1 className="text-2xl font-semibold">Seller Dashboard</h1>
                    </div>
                </header>



                <div className="container m-auto flex h-[80%]">


                    <aside className="w-1/4 bg-gray-200 flex flex-col gap-2 text-center p-2">
                        <div>
                            <img
                                class="inline-block h-14 w-14 rounded-full"
                                src="https://avatars.githubusercontent.com/u/58238022?v=4"
                                alt="Dan_Abromov"
                            />
                            <p>Seller Name</p>
                        </div>


                        <p className='border border-black min-h-10 cursor-pointer'>Dashboard</p>
                        <p className='border border-black min-h-10 cursor-pointer'>Products</p>
                        <p className='border border-black min-h-10 cursor-pointer'>Orders</p>
                        <p className='border border-black min-h-10 cursor-pointer'>Inventory</p>
                        <p className='border border-black min-h-10 cursor-pointer'>Customer Info</p>
                        <p className='border border-black min-h-10 cursor-pointer'>Promotion & Discount</p>


                    </aside>


                    <main className="w-3/4 bg-white p-4 flex flex-wrap border border-black justify-between text-center">

                        <div className=" max-h-16 w-30 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Products</div>
                        <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Add Products</div>
                        <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Manage Profile</div>
                        <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Orders</div>
                        <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Payment Details</div>
                        <div className=" max-h-16 w-28 text-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Transaction Details</div>
                        <div className=" max-h-16 w-28  text-left rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer">Change Password</div>
                    </main>
                </div>


                <footer className="h-[10%] bg-gray-300 text-gray-600 ">
                    <div className="container mx-auto">

                        <p>Footer</p>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default SellerDashboard