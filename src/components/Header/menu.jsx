

const menu = () => {
  return (
      <header class="container mx-auto px-4 py-6 flex items-center justify-between">
        <a href="#" class="font-bold text-white text-xl">Pipe</a>
        <nav>
            <ul class="flex items-center justify-center font-semibold">
                <li class="relative group px-3 py-2">
                    <button class="hover:opacity-50 cursor-default" aria-haspopup="true">Products</button>
                    <div class="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                        <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                            <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                            <div class="relative z-10">
                                <div class="grid grid-cols-2 gap-6">
                                    <div>
                                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">The Suite</p>
                                        <ul class="mt-3 text-[15px]">
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Course Editor
                                                    <p class="text-gray-500 font-normal">All in one editor</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Accept payments
                                                    <p class="text-gray-500 font-normal">Pre-build payments page</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Close captioning
                                                    <p class="text-gray-500 font-normal">Use AI to generate captions</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                                        <ul class="mt-4 text-[15px]">
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Plugins
                                                    <p class="text-gray-500 font-normal">Tweak existing functionality</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Batch uploads
                                                    <p class="text-gray-500 font-normal">Get your time back</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Social sharing
                                                    <p class="text-gray-500 font-normal">Generate content for socials</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="relative group px-3 py-2">
                    <button class="hover:opacity-50 cursor-default" aria-haspopup="true">Solutions</button>
                    <div class="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                        <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                            <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                            <div class="relative z-10">
                                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                                <ul class="mt-3 text-[15px]">
                                    <li>
                                        <a href="#" class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Creators</a>
                                    </li>
                                    <li>
                                        <a href="#" class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Streamers</a>
                                    </li>
                                    <li>
                                        <a href="#" class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Influencers</a>
                                    </li>
                                    <li>
                                        <a href="#" class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-2">Programming</a>
                                    </li>
                                    <li>
                                        <a href="#" class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Design</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="px-3 py-2 relative group">
                    <button class="hover:opacity-50 cursor-default" aria-haspopup="true">Developers</button>
                    <div class="absolute lg:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                        <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                            <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                            <div class="relative z-10">
                                <a href="#" class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                    Documentation
                                    <p class="text-gray-500 font-normal">Start integrating in no time</p>
                                </a>
                                <div class="grid grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <p class="uppercase tracking-wider text-gray-500 text-[13px]">Get started</p>
                                        <ul class="mt-3 text-[15px]">
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">Quick start</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">API reference</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">CLI</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">Library</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p class="uppercase tracking-wider text-gray-500 text-[13px]">Best practices</p>
                                        <ul class="mt-3 text-[15px]">
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">Create your first course</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">Launching</a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-200">Retention strategies</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default menu