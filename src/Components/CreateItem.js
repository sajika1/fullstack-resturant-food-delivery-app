import React, { useState } from 'react'

// set animation to sections - format: motion.[section name]
import { motion } from 'framer-motion'

//* COMPONENTS
import Loader from '../Components/Loader';

// data - needed to render option items in category selector
import { categories } from '../data/createpageData';

//* ICONS FROM react-icons
import { MdOutlineSubtitles } from 'react-icons/md';

import { AiOutlineCloudUpload , AiOutlineDollarCircle  } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { RiHospitalLine } from 'react-icons/ri';

export default function Createitem() {

    const cetegories = categories;

    // handle errors
    const [error, setError] = useState(false)
    // uploade image handler
    const [imageAsset, setImageAsset] = useState(false);
    
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [colories, setColories] = useState(null);
    const [price, setPrice] = useState(null);


    const uploadImage = () => {
        return null;
    }

    return (
        <>
            <section className='mx-auto section w-[90%] md:w-[75%] h-[calc(100vh-64px)] 
                                flex items-center justify-center'>
                <div className="border-2 py-4 px-2 md:p-8 border-gray-200 rounded-md w-full">
                    {error ? 
                    <motion.div className="bg-red-400 w-full h-full text-center p-2 rounded-md 
                                        text-gray-700"
                                initial={{opacity:0}} 
                                animate={{opacity:1}}
                                exit={{opacity:0}} 
                                transition={{type:'spring' , duration:.8}}
                    >
                        <h2>Somthing Was Wrong</h2>
                    </motion.div>
                    :
                    <div className='flex flex-col gap-4 w-full'>
                        <div className="border-b-2 p-2 border-gray-200 flex items-center gap-2
                                        focus-within:border-lime-400 transition-all duration-300"
                        >
                            <MdOutlineSubtitles className='text-2xl text-gray-600' />
                            <input 
                                type="text" 
                                placeholder='Give me a Title ... ' 
                                className='w-full h-full bg-transparent outline-none 
                                        border-none text-gray-700 '
                                value={title}
                                onChange={ (e) => setTitle(e.target.value) }
                            />
                        </div>

                        {/* category selector */}
                        <select 
                            name="categories" 
                            id="categories" 
                            className='p-2 bg-transparent border-b-2 outline-none text-gray-600
                                        focus:border-lime-400'
                            onChange={ (e) => setCategory(e.target.value) }
                        >
                            <option value="other">select category</option>
                            { categories && categories.map(item =>
                                 <option key={item.id} value={item.urlParamName}>
                                    {item.name}
                                </option> )
                            }
                        </select>

                         {/* upload image  */}
                        <div 
                            className='w-full h-[225px] md:h-[415px] border-2 border-gray-200 
                                        p-2 rounded-md hover:border-lime-400'
                        >
                            { loading ? <Loader /> : !imageAsset ?
                                (
                                <label 
                                    className='w-full h-full flex flex-col items-center 
                                        justify-center cursor-pointer active:bg-lime-400 
                                        rounded-md transition-all duration-1000 ease-linear'
                                    id='upload-image'
                                >
                                    <AiOutlineCloudUpload className='text-3xl text-gray-600' /> 
                                    <p className='text-xs md:text-sm font-semibold text-gray-600 
                                                mt-1 text-center'
                                    >
                                        Click to Upload Image
                                    </p>
                                    <input 
                                        type="file" 
                                        name='upload-image'
                                        className='w-0 h-0'
                                        onChange={uploadImage}
                                    />
                                </label>
                                ) : 
                                (
                                <div className='w-full h-full relative'>
                                    <img 
                                        src={imageAsset} 
                                        alt="uploaded" 
                                        className='w-full h-full object-cover' 
                                    />
                                    <button className='w-10 h-10 rounded-full bg-red-500 
                                            text-white flex items-center justify-center p-2
                                            cursor-pointer absolute bottom-1 right-1'
                                    > 
                                        <FaTrashAlt />
                                     </button>
                                </div>
                                ) 
                            }
                        </div>

                        {/* calories */}
                        <div className="border-b-2 p-2 border-gray-200 flex items-center gap-2
                                        focus-within:border-lime-400 transition-all duration-300"
                        >
                            <RiHospitalLine className='text-2xl text-gray-600' />
                            <input 
                                type="number" 
                                placeholder='Calories' 
                                className='w-full h-full bg-transparent outline-none 
                                        border-none text-gray-700 '
                                value={colories}
                                onChange={ (e) => setColories(e.target.value) }
                            />
                        </div>

                        {/* price */}
                        <div className="border-b-2 p-2 border-gray-200 flex items-center gap-2
                                        focus-within:border-lime-400 transition-all duration-300"
                        >
                            <AiOutlineDollarCircle className='text-2xl text-gray-600' />
                            <input 
                                type="number" 
                                placeholder='Price ' 
                                className='w-full h-full bg-transparent outline-none 
                                        border-none text-gray-700 '
                                value={price}
                                onChange={ (e) => setPrice(+e.target.value) }
                            />
                        </div>

                        {/* save button */}
                        <button className='bg-lime-400 p-2  rounded-md text-[#f9f9f9]'>Save</button>
                    </div>
                    
                }
                </div>
            </section>
        </>
    )
}
