import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ICONS - use react-icons package
import { VscSignIn } from 'react-icons/vsc';
import { IoCreateOutline , IoExitOutline } from 'react-icons/io5';

//* COMPONENTS AND HELPER FUNCTIONS
import login from '../helper/login';
import signOutAccount from '../helper/signOutAccount';

export default function Avatarmenu({ openMenu , setOpenMenu , handleOpen }) {
    
    const userState = useSelector( state => state.user );
    
    //* ==== close menu when user click outside =======
    //? 1. create ref as menu
    //? 2. check user click when user clicked outside of menu
    //? 3. call a function to chack position - if user click position , outside of menu , set state to false
    //! 1
    const ref = React.createRef();
    //! 3
    const handleClickOutside = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            setOpenMenu(false)
        }
    }
    //! 2
    document.addEventListener('click' , handleClickOutside , true);
    //* ===================================================

    return (
        <>
              {/* AVATAR MENU */}
            <div ref={ref} className={`${openMenu ? 'flex' : 'hidden'} absolute top-12 w-max z-50 
                                bg-slate-50 shadow-sm  
                                rounded-lg right-0 flex-col`}>
                    {/* admin user can be create and push new item to database
                        redirect user to create page  
                    */}
                    {
                        (userState.user && window.location.pathname !== '/create') &&
                            userState.user.email === 'sjdkhedmati1@gmail.com' &&
                                <Link to='/create'
                                        className='flex items-center gap-2 text-xs py-4 px-6 hover:bg-slate-100
                                                    rounded-t-lg transition-all duration-300 ease-linear'
                                        onClick={ () => { handleOpen() }}
                                >
                                    <IoCreateOutline className='text-lg'/>
                                    <span className='self-end'>Create New Item</span>
                                </Link> 
                    }

                    {/* if user not exist (not logged in ) show login button */}
                    {
                        !userState.user &&
                            <div onClick = { () => {
                                handleOpen()
                                login()
                            } }
                            className='flex items-center gap-2 text-xs py-4 px-6 hover:bg-slate-100
                                        rounded-t-lg transition-all duration-300 ease-linear'
                            >
                                <VscSignIn className='text-lg'/> 
                                <span className='self-end'>Sign in</span>
                            </div>         
                    }

                    {/* exit from account */}
                    <div onClick = { () => {
                        handleOpen()
                        signOutAccount()
                    } }
                        className='flex items-center gap-2 text-xs py-4 px-6 hover:bg-slate-100
                                    rounded-b-lg transition-all duration-300 ease-linear'
                    >
                        <IoExitOutline className='text-lg'/> 
                        <span className='self-end'>Exit from Account</span>
                    </div>
            </div>

        </>
    )
}
