const Hero = () => {
  return (
    <>
       <div className='absolute top-0 left-0 w-full h-[70vh] bg-black opacity-70'></div>
        <div className="flex flex-col justify-center items-center h-[70%] relative text-white gap-6 px-8 font-['Martel_Sans',sans-serif]">
          <span className='text-center font-bold text-3xl md:text-2xl'>
            Unlimited movies, TV shows and more{" "}
          </span>
          <span className='text-center font-medium text-lg md:text-lg'>
            Join today. Cancel anytime.
          </span>
          <span className='font-normal text-center text-md md:text-base'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className='flex flex-col gap-4 items-center justify-center w-full'>
            <input
            name='email'
              type='text'
              placeholder='Email address'
              className='font-bold w-full px-4 py-3 text-base rounded bg-black/70 border border-white/50 text-white'
            />
            <button className='btn btn-red px-3 py-2 font-semibold text-white bg-red-600 rounded text-xl'>
              Get Started &gt;
            </button>
          </div>
        </div>
    </>
  )
}

export default Hero
