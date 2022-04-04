import React from 'react'

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import Loading from '../img/loading.gif';

import { BsHandbag } from 'react-icons/bs';
// framer motion to apply animations
import { motion } from 'framer-motion';

import login from '../helper/login';
import { useSelector } from 'react-redux';


export default function Header() {

    const userState = useSelector( state => state.user )
  
    return (
        <>
            <motion.header 
                className='w-screen h-auto flex justify-between items-center py-4 md:py-6 section'
                initial={{y:-500}}
                animate={{y:0}}
                transition={{type:'spring' , duration: 0.8 , stiffness:100}}
            >
                {/* logo */}
                <motion.div 
                    className='h-full flex items-center gap-2 cursor-pointer'
                    whileTap={{ scale:.9 }}
                >
                    <img src={Logo} alt="logo" className='w-6 h-6 md:w-8 md:h-8' />
                    <p className='font-light text-sm md:text-base text-slate-600 hidden sm:block'>food delivery</p>
                </motion.div>
                
                {/* navbar */}
                <nav className='flex items-center gap-10 ml-auto mr-6 xl:mx-auto hidden md:block'>
                    <ul className='flex items-center lg:gap-6 gap-4'>
                        <motion.li 
                            className='cursor-pointer text-sm 2xl:text-lg font-light text-stone-500 first-letter:uppercase '
                            whileHover={{color:'tomato'}}
                            whileTap={{scale: .7}}
                            transition={{type:'spring' , stiffness:500}}
                        >home</motion.li>
                        <motion.li 
                            className='cursor-pointer text-sm 2xl:text-lg font-light text-stone-500 first-letter:uppercase '
                            whileHover={{color:'tomato'}}
                            whileTap={{scale: .7}}
                            transition={{type:'spring' , stiffness:500 }}
                        >menu</motion.li>
                        <motion.li 
                            className='cursor-pointer text-sm 2xl:text-lg font-light text-stone-500 first-letter:uppercase '
                            whileHover={{color:'tomato'}}
                            whileTap={{scale: .7}}
                            transition={{type:'spring' , stiffness:500}}
                        >about us</motion.li>
                        <motion.li 
                            className='cursor-pointer text-sm 2xl:text-lg font-light text-stone-500 first-letter:uppercase '
                            whileHover={{color:'tomato'}}
                            whileTap={{scale: .7}}
                            transition={{type:'spring' , stiffness:500}}
                        >services</motion.li>
                    </ul>

                </nav>
                <div className='flex items-center gap-0 md:gap-2'>
                    {/* bag */}
                    <motion.div 
                        className='cursor-pointer relative'
                        whileTap={{scale: .7}}
                        whileHover={{scale:1.1}}
                    >
                        {/* bag icon */}
                        <BsHandbag className='text-lg'/>

                        {/* counter */}
                        <motion.div
                            className='absolute -top-3 -right-3 w-4 h-4 rounded-full bg-lime-500/90 flex justify-center items-center p-2 text-xs text-white'
                            initial={{scale:.8 }}
                            animate={{scale:1 }}
                        >
                            
                        </motion.div>

                    </motion.div>
                    {/* avatar */}
                    {
                        userState.loading ? 
                        <img src={Loading}
                             alt="loading"
                             className='w-8 h-8 md:w-10 md:h-10 ml-6 cursor-pointer rounded-full drop-shadow-lg hover:drop-shadow-xl'
                        /> :   
                        <motion.div 
                            className='w-8 h-8 md:w-10 md:h-10 ml-6 cursor-pointer rounded-full drop-shadow-lg hover:drop-shadow-xl'
                            whileTap={{scale: .7}}
                            onClick = { login }
                        >
                            <img src={userState.user ? userState.user.photoURL : Avatar} alt="user avatar" className='w-full h-full rounded-full' />
                        </motion.div>
                    }
                </div>
            </motion.header>
        </>
    )
}
