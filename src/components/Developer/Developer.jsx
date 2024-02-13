import React from 'react'
import { MdOutlineWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import DeveloperCard from './DeveloperCard';

function Developer() {
    const icon1 = <MdOutlineWeb className=" text-green-500 mx-auto" size={48} />;
    const icon2 = <FaMobileAlt className=" text-green-500 mx-auto" size={48} />;
    const icon3 = (
        <MdMonitor className=" text-green-500 mx-auto" size={48} />
    );
    return (
        <div>
            <div className="flex flex-col justify-center container md:mt-16 py-10">
                <h1 className=" font-bold text-4xl text-center">
                    Programadores
                </h1>

                <p className=" text-center">
                    Vamos a meternos de lleno en los diferentes tipos de programadores que existen en la actualidad para poder ver a qué se dedican cada uno de ellos con detalle y cuáles son las tareas que hacen en su día a día. ¿Con qué opción te quedarías?
                </p>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
                    <DeveloperCard icon={icon1} title="Back-End" />
                    <DeveloperCard icon={icon2} title="Front-End" />
                    <DeveloperCard icon={icon3} title="Full Stack" />
                </div>
            </div>
        </div>
    )
}

export default Developer