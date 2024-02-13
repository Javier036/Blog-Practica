import React, { useState } from 'react'
import { DiAtom } from "react-icons/di";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu)
    }

    return (
        <header className='fixed w-full z-10 bg-secondary text-white py-4'>
            <nav className='container flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <DiAtom size={35} className='text-primary' />
                    <Link to="/" className='font-bold text-2xl'>Blog del Programador</Link>
                </div>
                <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
                    <Link to="/" className='hover:text-primary transition duration-200 ease-linear'>Inicio</Link>
                    <Link to="/tecnologies" className='hover:text-primary transition duration-200 ease-linear'>Tecnologias</Link>
                    <Link to="/about" className='hover:text-primary transition duration-200 ease-linear'>Acerca de</Link>
                    <button className='hidden lg:flex  text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear'>Iniciar Sesion</button>
                </div>
                <div className='md:hidden flex items-center'>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />) : (
                        <CiMenuFries size={25} onClick={handleChange} />
                    )}
                </div>
            </nav>
            <div className={`${menu ? "translate-x-0 " : "-translate-x-full"} md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
                <Link to="/" className='hover:text-primary transition duration-200 ease-linear'>Inicio</Link>
                <Link to="/tecnologies" className='hover:text-primary transition duration-200 ease-linear'>Tecnologias</Link>
                <Link to="/about" className='hover:text-primary transition duration-200 ease-linear'>Acerca de</Link>
                <div>
                <button className='py-1 px-4 rounded-md'>Iniciar Sesion</button>
                </div>  
            </div>
        </header>
    )
}

export default Navbar
