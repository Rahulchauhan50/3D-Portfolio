import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-primary to-[#12128600]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
        to='/'
        className="flex items-center gap-2"
        onClick={()=>{
          setActive('');
          window.scrollTo(0,0)
        }}
        >
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Rahul &nbsp;<span className="sm:block hidden"> | JacaScript</span></p>
        </Link>
        <div className="flex flex-row items-center">
        <ul className="list-none hidden sm:flex flex-row gap-10 mx-6">
          {navLinks?.map((link)=>{
            return <li
                    key={link.id}
                    className={`${
                      active===link.title?"text-white":"text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={()=>{setActive(link.title)}}
                    >
                     <a href={`#${link.id}`}>{link.title}</a>
                   </li>
          })}

        </ul>

       <div className="flex flex-row ">
          <a href="https://drive.google.com/u/0/uc?id=129mKSHa4KaKVViQsQ775mN-gcmbMFXBC&export=download" >
        <button class="bg-blue-900 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Resume</span>
          </button>
          </a>
        
       </div>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={!toggle?menu:close}  alt={menu} className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>{setToggle(!toggle)}}/>
          <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className="list-none justify-end flex items-start flex-col gap-4">
          {navLinks?.map((link)=>{
            return <li
                    key={link.id}
                    className={`${
                      active===link.title?"text-white":"text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=>{
                      setActive(link.title)
                      setToggle(!toggle)
                    }}
                    >
                     <a href={`#${link.id}`}>{link.title}</a>
                   </li>
          })}

        </ul>
         
          </div>
        </div>
       

      </div>
    </nav>
  );
};

export default Navbar;