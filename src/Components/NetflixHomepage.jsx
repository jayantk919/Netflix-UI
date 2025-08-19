import NetflixHeader from './NetflixHeader';
import FeaturedHero from './FeaturedHero';
import MovieSlider from './MovieSlider';
import moviesData from '../data/moviesData.json';

const NetflixHomepage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <NetflixHeader />

      {/* Featured Hero Section */}
      <FeaturedHero />

      {/* Movie Sliders */}
      <div className="relative z-10 -mt-32">
        <MovieSlider title="Trending Now" movies={moviesData.trending} />
        <MovieSlider title="Top Picks for You" movies={moviesData.topPicks} />
        <MovieSlider title="Comedy Movies" movies={moviesData.comedy} />
        <MovieSlider title="Action & Adventure" movies={moviesData.action} />
      </div>

      {/* Footer Spacing */}
      <div className="h-20 text-gray-600 w-full">
        <p className='text-center text-sm'>&copy; Jayant aka HERO</p>
      </div>
    </div>
  );
};

export default NetflixHomepage;
