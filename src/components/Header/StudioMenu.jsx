import React from 'react'

const StudioMenu = () => {
  return (
      <div className="absolute top-3 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                        <div className="relative top-6 p-6 bg-white shadow-xl w-full">
                            {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                            <div className="relative z-10">
                               

    <section className="flex flex-col items-center p-8 bg-white">

      <div className="flex flex-col items-center">
     
        <img src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" alt="" />
        <p className="text-gray-600 mt-2 text-center text-lg font-normal">Your daily inspiration for everything fashion</p>
      </div>

      {/* Image Grid */}
      <div className="mt-8">
        <img
          src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
          alt="Person 1"
          className="rounded-lg object-cover h-56 w-full"
        />
     
      </div>

      {/* Button */}
      <button className="mt-8 border border-slate-200 py-3 px-10 text-black  transition-colors">
        Explore Studio &rarr;
      </button>
    </section>


                            </div>
                        </div>
                    </div>
  )
}

export default StudioMenu