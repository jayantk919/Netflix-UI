import moviesData from '../data/moviesData.json';

const FeaturedHero = () => {
  const featured = moviesData.featured;

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featured.image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 max-w-2xl">
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {featured.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center space-x-4 text-white">
            <span className="bg-red-600 px-2 py-1 text-sm font-semibold rounded">
              {featured.rating}
            </span>
            <span className="text-lg">{featured.year}</span>
            <span className="text-lg">{featured.genre}</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
            {featured.description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 cursor-pointer bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Play</span>
            </button>
            
            <button className="flex items-center space-x-2 cursor-pointer bg-gray-600/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-600/90 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHero;
