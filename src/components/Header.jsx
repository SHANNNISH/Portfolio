import React from 'react';
// images
import Logo from '../assets/logo.svg';

const Header = () => {
  return(
    <header className=' py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*logo*/}
          <a href="#" className=''>
            
            <h1 className='text-gradient h2 mb-0'>YAROSLAV</h1>
            <h2 className='text-gradient h3'>KLISHEVICH</h2>
          </a>
          {/*button*/}
          <button className='btn btn-sm duration-300 delay-300 transition-all transition-colors'>Work with me</button>

        </div>
      </div>
    </header>
  ) 
};

export default Header;
