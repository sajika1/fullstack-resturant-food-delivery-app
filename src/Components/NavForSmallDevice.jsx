import React from 'react'

import { motion } from 'framer-motion';

import { CgMenuHotdog } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import { useState } from 'react';

export default function Navforsmalldevice() {

    const [enableNav, setEnableNav] = useState(false);

    const handleClick = () => {
        setEnableNav(!enableNav)
    }

    return (
        <>
             {/* for small devices */}     
             <motion.div
                    className='fixed w-12 h-12 rounded-full bottom-7 right-5
                            bg-gradient-to-b from-orange-100 via-orange-200 to-orange-400/70
                            hover:from-white hover:to-orange-300 text-2xl
                            flex items-center justify-center z-50
                            cursor-pointer md:hidden drop-shadow-sm text-stone-700
                            '
                    initial={{y:500}}
                    animate={{y:0}}
                    transition={{type:'spring' , duration: 0.8 , stiffness:100}}
                    onClick={ handleClick }
                >
                    { enableNav ? <IoMdClose /> : <CgMenuHotdog /> }
        
                </motion.div>

                <motion.div className={`fixed bottom-0 w-screen  ${enableNav ? 'left-0' : '-left-full'}
                            bg-gradient-to-b from-white via-orange-100 to-orange-200 px-4 pt-12
                             pb-16 md:hidden transition-all duration-300 ease-in-out z-40`}
                >
                    <ul className='flex flex-col items-center uppercase'>
                        {/* use padding for each li for handle spoacing bug on phones
                            (gap is not work)
                        */}
                        <motion.li
                            onClick={ handleClick }
                            className='cursor-pointer pb-4' 
                            whileHover={{scale:1.3}}
                            whileTap={{scale: 0.7}}
                        >home</motion.li>
                        <motion.li
                            onClick={ handleClick }
                            className='cursor-pointer py-4' 
                            whileHover={{scale:1.1}}
                            whileTap={{scale: 0.7}}
                        >menu</motion.li>
                        <motion.li
                            onClick={ handleClick }
                            className='cursor-pointer py-4' 
                            whileHover={{scale:1.1}}
                            whileTap={{scale: 0.7}}
                        >about us</motion.li>
                        <motion.li
                            onClick={ handleClick }
                            className='cursor-pointer pt-4' 
                            whileHover={{scale:1.1}}
                            whileTap={{scale: 0.7}}
                        >services</motion.li>
                    </ul>
                </motion.div>
                
        </>
    )
}
