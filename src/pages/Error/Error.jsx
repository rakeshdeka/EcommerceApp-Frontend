import NotFound from "../../assets/landing_images/not_found.png"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"


export const Error = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
                <div className="text-gray-600 text-lg">
                    You searched for <span className="text-blue-500 font-semibold">tshirts/h%26m/hm-pure-cotton-regular-fit-t-shirt/28204808/buyc</span>
                </div>
                <div className="flex flex-col items-center mt-6">
                    <div className=" flex items-center justify-center">
                        <img src={NotFound} alt="Not_Found" className=" w-[200px] h-14" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-4">We couldn't find any matches!</h2>
                    <p className="text-gray-500 mt-2">Please check the spelling or try searching something else</p>
                    <div className="mt-6 flex w-full max-w-md border border-slate-200">
                        <input
                            type="text"
                            placeholder="Shoes, T-shirts, Tops etc."
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
                        />
                        <button className="text-blue-500 px-4 py-2 border-l border-slate-200">SEARCH</button>
                    </div>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                    Popular searches:
                    <span className="text-gray-400"> Nike Shoes, Woodland Shoes, Adidas Shoes, Titan Watches, Fila Shoes, Puma Shoes, Fastrack Watches</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
