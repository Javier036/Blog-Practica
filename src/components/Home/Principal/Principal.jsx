import React from 'react'
import img from '../../../assets/images/logo.png'

const Principal = () => {
    return (
        <div className='bg-black text-white'>
            <div className='h-screen container flex flex-col justify-center md:flex-row items-center'>
                <div className='w-full md:w-2/4 space-y-5 mt-10 '>
                    <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>Bienvenido Programador</h1>
                    <p className='text-lg lg:text-2xl font-medium'>Mas de 100 conceptos de programación para conocer.</p>
                    <p className='text-sm lg:text-base'>
                    Explorando desde los conceptos fundamentales hasta las últimas tendencias y herramientas. Desde el diseño de algoritmos hasta la creación de aplicaciones fascinantes.
                    </p>
                    <div className='flex gap-8'>
                        <button className='bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear'>Explorar más</button>
                    </div>
                </div>
                <div className='w-full md:w-2/4 mt-4'>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Principal
