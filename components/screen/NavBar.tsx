export default function NavBar() {
    return (
        <div className="bg-components p-4 shadow-lg w-full">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="text-white text-lg font-bold">BONANI</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
                <div className="md:hidden flex items-center">
                    {/* <!-- Mobile Menu Button --> */}
                    <button id="mobile-menu-button"
                        className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* <!-- Mobile Menu (hidden by default) --> */}
            <div id="mobile-menu"
                className="md:hidden hidden bg-gray-800 p-4 space-y-4">
                <a href="#" className="text-white block">Home</a>
                <a href="#" className="text-white block">About</a>
                <a href="#" className="text-white block">Services</a>
                <a href="#" className="text-white block">Contact</a>
            </div>
        </div>
    )
}
