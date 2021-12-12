
import Mobilemenu from './_offcanvasmenu'

import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
  
  return (
    <>
      <div className="rounded-lg shadow bg-gradient-to-r from-blue-500 to-blue-300 drawer h-auto md:min-h-screen  lg:min-h-screen ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar/>
          <Hero/>
        </div>

        
        <div className="drawer-side md:hidden">
          <label htmlFor="my-drawer-3" className="drawer-overlay md:hidden"></label>
            <Mobilemenu/>
        </div>
        
      </div>

      
    </>
  );
};

export default Header;
