import React from 'react'; 
import NavLink from './NavLink'
import {Outlet, Route, Routes} from 'react-router-dom'
const Navbar = () =>{
  const navLinkData=  [{
        id:0,
        path:'#Home',
        title:'Home',
    },{
        id:1,
        path:'#about-me',
        title:'About Me',
    },{
        id:2,
        path:'#Projects',
        title: 'Projects',
    },{
        id:3,
        path:'#contact',
        title:'Contact',
    
    }];

    return(
        <>
        <nav className='w-100 h-[50px] bg-[#27272a] opacity-40 fixed top-0 right-0 left-0 z-10'>
            <ul className='flex flex-row list-none text-white mt-2 justify-end'>
                    {
                        navLinkData.map((link) => (
                        <li className="text-lg font-semibold px-6 " key={link.id}>
                        <NavLink title={link.title} path={link.path} />
                        </li>
                        ))
                    }

            </ul>
        </nav>
        <Outlet />
        </>
    )

}

export default Navbar;
