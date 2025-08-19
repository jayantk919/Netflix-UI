import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[200px] md:min-w-[250px] h-[300px] md:h-[375px] cursor-pointer transition-all duration-300 ease-in-out group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover Content */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
          <p className="text-sm text-gray-300 mb-3">{movie.genre}</p>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            
            <button className="w-8 h-8 bg-gray-600/70 rounded-full flex items-center justify-center text-white hover:bg-gray-600/90 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            
            <button className="w-8 h-8 bg-gray-600/70 rounded-full flex items-center justify-center text-white hover:bg-gray-600/90 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hover Scale Effect */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isHovered ? 'scale-105 z-10' : 'scale-100 z-0'
      }`}></div>
    </div>
  );
};

export default MovieCard;
