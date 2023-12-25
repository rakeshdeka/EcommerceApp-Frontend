// import React from 'react'
import { CiUser } from "react-icons/ci";

const SellerHeader = () => {
    return (
        <>
            <header className="bg-[black] text-white p-4 h-[10%]">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">EStore</h1>
                    </div>
                    
                     <div>
                        <CiUser className=" w-8 h-6 text-white  hover:text-[blue] cursor-pointer" />
                    </div>
                </div>
            </header>

        </>
    )
}

export default SellerHeader