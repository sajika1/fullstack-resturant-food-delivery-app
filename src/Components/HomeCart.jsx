import React from 'react'
import { motion } from 'framer-motion'

export default function Homecart({name , image , categorie , price}) {
    

    return (
        <>
            <motion.div 
                className='relative bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg
                            flex flex-col items-center justify-between p-4 border- lg:border-0 
                            border-white rounded-lg cursor-pointer'
                initial={{x:-500}}
                animate={{x:0}}
                transition={{type:'spring' , duration:0.8 }}
                whileHover={{scale:1.03 , backgroundColor:'#f1f1f1' }}
                whileTap={{scale:0.9}}
            >
                
                <img src={image} alt="ice cream" className='w-28 h-28'/>
                <div className='flex flex-col items-center'>
                    <h3 className='mt-2 font-semibold'>{name}</h3>
                    <p className='text-[12px] text-gray-500 text-center'>{categorie}</p>
                </div>
                <p><span className='text-red-500 mr-1 text-sm'>$</span>{price}</p>
            </motion.div>
        </>
    )
}
