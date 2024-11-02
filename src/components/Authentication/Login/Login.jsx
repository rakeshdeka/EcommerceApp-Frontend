
import Header from "../../Header/Header";
import loginImage from "../../../assets/login_im.jpg"
const Login = () => {

    return (
        <div className=" bg-[#FCEFE9]">
            <Header />

            <div className="flex flex-col items-center justify-center min-h-screen">
                {/* Banner */}
                <div className=" w-full max-w-md rounded-t-md text-center">
                    <img src={loginImage} alt="" />
                </div>

                {/* Form */}
                <div className="bg-white w-full max-w-md p-8 rounded-b-md shadow-lg">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Login <span className="font-normal text-gray-600">or</span> Signup</h3>

                    {/* Input */}
                    <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-4">
                        <span className="text-gray-500 border-r text-sm px-1">+91</span>
                        <input
                            type="text"
                            placeholder="Mobile Number*"
                            className="flex-1 outline-none border-none text-sm pl-3 text-gray-700"
                        />
                    </div>

                    {/* Terms and Policy */}
                    <p className="text-xs text-gray-500 text-center mb-6">
                        By continuing, I agree to the
                        <span className="text-[#FF3F6C] font-bold cursor-pointer"> Terms of Use </span>
                        & <span className="text-[#FF3F6C] font-bold cursor-pointer">Privacy Policy</span>
                    </p>

                    {/* Continue Button */}
                    <button className="w-full bg-[#FF3F6C] text-white font-semibold py-2 rounded">
                        CONTINUE
                    </button>

                    {/* Help Link */}
                    <p className="text-xs text-gray-500 mt-4">
                        Have trouble logging in? <span className="text-[#FF3F6C] font-bold cursor-pointer">Get help</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
