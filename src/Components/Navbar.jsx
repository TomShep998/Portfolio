import React from 'react'; 
import NavLink from './NavLink'
import {Outlet, Route, Routes} from 'react-router-dom'
const Navbar = () =>{
  const NavLinkData=  [{
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
        <nav className='w-100 h-[50px][#212626] fixed top-0 right-0 left-0'>
            <ul className='flex flex-row list-none text-white'>
               
            </ul>
        </nav>
        <Outlet />
        </>
    )

}

export default Navbar;
