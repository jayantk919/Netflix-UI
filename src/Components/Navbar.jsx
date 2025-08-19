const Navbar = () => {
  return (
    <div>
      <nav className='mx-auto flex justify-between items-center py-6 px-6 relative z-10'>
        <span>
          <img
            src='assests/Images/logo.svg'
            alt=''
            className='w-20'
          />
        </span>
        <div className='flex gap-2'>
         <select className="bg-black/70 border rounded px-2 py-1 text-sm border-white/50 text-white" name="lang" id="lang">
            <option className="bg-black text-sm" value="English">
              English
            </option>
            <option value="Hindi">
              Hindi
            </option>
         </select>
          <button className='btn btn-red-sm px-2 py-1 font-medium text-white bg-red-600 rounded border border-white/10 cursor-pointer'>
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
