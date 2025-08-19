const NetflixHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 transition-all duration-300">
      <nav className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img
            src="assets/logo.svg"
            alt="Netflix"
            className="h-8 md:h-10"
          />
          
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-white text-sm">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Movies</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">New & Popular</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">My List</a></li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white cursor-pointer hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Notifications */}
          

          {/* User Profile */}
          <div className="flex items-center cursor-pointer space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NetflixHeader;
