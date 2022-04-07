import React from 'react'

// local images from img directorie
import Bike from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import Homecart from './HomeCart';

// data for each cart (array of objects)
import { cartData } from '../data/homecartData';

export default function Maincontainer() {
    
    return (
        <main className='section grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 sm:mt-5 md:h-[calc(100vh-7rem)] md:items-center'>
            {/* left side - main text content */}
            <section className=''>
                {/* bike delivery label */}
                <div className='w-fit py-1 px-2 rounded-full bg-orange-100 flex items-center gap-2'>
                    <p className='text-orange-600 font-semibold text-[.6rem] pl-1'>Bike Delivery</p>
                    <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                        <img src={Bike} alt="bike label" className='bg-cover' />
                    </div>
                </div>

                {/* main text */}
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold my-5 sm:my-8 tracking-tight leading-tight'>
                    The Fastest Delivery in 
                    <span className='text-orange-600'>Your City</span>
                </h1>

                <p className='text-stone-400 text-left text-sm tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis officia quia in nesciunt consequuntur porro expedita molestiae dignissimos, explicabo totam earum quos consectetur cupiditate doloribus quae quasi tenetur commodi.</p>

                <button 
                    className='my-6 px-4 py-2 bg-orange-500 border border-transparent
                                outline-none text-white rounded-md hover:bg-transparent
                                hover:border-orange-500 hover:text-orange-600 transition-all duration-300'
                >
                    Order Now
                </button>

            </section>
            
            {/* right side */}
            <section className='w-full h-full relative flex justify-center items-start lg:items-center py-8 lg:py-0'>
                <img src={HeroBg} alt="hero background" className='absolute right-0 bottom-0 top-0 w-full md:w-3/4 -z-20' />
                {/* cart items */}
                <div className='h-3/4 w-4/6 grid grid-cols-1 lg:grid-cols-2 justify-center gap-3'>
                    {cartData.map(item => <Homecart key={item.id}  name={item.name} image={item.imageSrc} categorie={item.categorie} price={item.price}/>) }
                </div>
            </section>
        </main>
    )
}
