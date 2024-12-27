import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from 'react'
import logo from "../assets/logo.png"
import { navItems } from "../constants/index.jsx"

const Navbar = () => {
  const [ drawerOpen, SetDrawerOpen ] = useState(false);

  const toggleNavbar = () => {
    SetDrawerOpen(!drawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className='mx-auto px-2 text-sm'>
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 1w-0 mr-4' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 text-white-500">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center gap-2 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                    <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">Create an Account</a>
                </div>
                <div className="lg:hidden md:flex justify-end">
                    <button onClick={toggleNavbar}>
                        { drawerOpen ? <X /> : <Menu /> }
                    </button>
                </div>
            </div>
            { drawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full py-6 px-12 flex flex-col justify-center flex-shrink-0 items-center lg:hidden">
                    <ul className="flex flex-col text-white-500">
                        { navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )) }
                    </ul>
                    <div className="flex justify-center space-x-6 items-center mt-4">
                        <a href="#" className="py-2 px-3 text-center min-w-[100px] border rounded-md">Sign In</a>
                        <a href="#" className="py-2 px-3 text-center min-w-[160px] bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md">Create an Account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar