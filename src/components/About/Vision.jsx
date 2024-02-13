import React from 'react'
import imgVision from '../../assets/images/vision.jpg'

const Vision = () => {
    return (
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
            <div className='w-full md:w-2/5'>
                <img className='rounded-lg' src={imgVision} alt="img" />
            </div>
            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='text-4xl font-bold'>Vision</h1>
                <h2 className=" font-semibold text-lg lg:text-2xl">
                Buscamos ser la plataforma líder que fomente una comunidad compartiendo conocimientos y promoviendo la innovación tecnológica. A través de nuestro compromiso con la excelencia y la inclusividad, aspiramos a ser la brújula digital que guíe a la próxima generación de desarrolladores hacia el éxito en un mundo cada vez más digitalizado.
                </h2>
                <p className='text-sm lg:text-base'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla a facere obcaecati ducimus voluptates nihil laudantium neque ut aperiam nemo blanditiis, quod tempora quasi libero omnis labore voluptatibus similique unde!
                </p>
            </div>
        </div>
    )
}

export default Vision
