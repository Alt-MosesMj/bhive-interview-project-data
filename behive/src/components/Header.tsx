import React from 'react';
import  PhoneSVG from '../assets/phone.svg?react';


const Header = () => {
    return (
        <header className="bg-white shadow max-sm:px-8 py-4 md:px-12 xl:px-20 flex justify-between items-center">
            <img src="images/logo.png" alt="Host meeting illustration" className="w-full h-auto max-w-32" />
            <div className='border-[1px] border-[solid] border-[#F2B304] p-[10px] rounded-[4px]'>
                <PhoneSVG />
            </div>
        </header>
    );
};

export default Header;
