import bgTobey from '/src/assets/bg-3.png'
import imgTobey from '/src/assets/Group-9.png'

import bgAndrew from '/src/assets/image 64.png'
import imgAndrew from '/src/assets/Group-10.png'

import bgTom from '/src/assets/bg-4.png'
import imgTom from '/src/assets/image-12.png'

import { Link } from 'react-router-dom'

export function Cards() {
    return (
        <div className='relative flex-col md:flex items-center justify-evenly mt-16'>
            <div className='flex-row md:flex md:space-x-8 md:mx-40 md:my-0 mx-10 my-10'>
                <Link to='/tobey' className='border-[0.5rem] border-solid border-white w-full h-full md:w-[calc(100% / 3 - 8%)] md:h-[70vh] relative border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-rose-500 duration-500'>
                    <img src={bgTobey} alt='Background Tobey' className='card opacity-90' />
                    <img src={imgTobey} alt='Spider Tobey' className='card-img' />
                    <h2 className='card-title'>Tobey Maguire</h2>
                </Link>
                <Link to='/andrew' className='border-[0.5rem] border-solid border-white w-full h-full md:w-[calc(100% / 3 - 8%)] md:h-[70vh] relative border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-rose-500 duration-500'>
                    <img src={bgAndrew} alt='Background Andrew' className='card opacity-90' />
                    <img src={imgAndrew} alt='Spider Andrew' className='card-img' />
                    <h2 className='card-title'>Andrew Garfield</h2>
                </Link>
                <Link to='/tom' className='border-[0.5rem] border-solid border-white w-full h-full md:w-[calc(100% / 3 - 8%)] md:h-[70vh] relative border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-400 hover:to-rose-500 duration-500'>
                    <img src={bgTom} alt='Background Tom' className='card opacity-90' />
                    <img src={imgTom} alt='Spider Tom' className='card-img' />
                    <h2 className='card-title'>Tom Holland</h2>
                </Link>
            </div>

            <div className='hidden relative lg:flex justify-center items-center mt-12 space-x-16'>
                <div className='controller-button'>
                    01
                </div>

                <div className='controller-button'>
                    02
                </div>

                <div className='controller-button'>
                    03
                </div>
                <div className='controller-line'></div>
            </div>
        </div>
    );
}