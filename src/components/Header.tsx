import { Link } from 'react-router-dom';
import Exclude from '/src/assets/Exclude.png'

export function Header() {
    return (
        <div className='flex w-full h-[90px]'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-center'>
                <div className='md:ml-10 md:flex items-center space-x-6 mt-4'>
                    <Link to='/tobey' className='header-link group'>
                        <span className='hidden md:block span'>Tobey Maguire</span>
                    </Link>
                    <Link to='/tom' className='header-link group'>
                        <span className='hidden md:block span'>Tom Holland</span>
                    </Link>
                    <Link to='/movies' className='header-link group'>
                        <img src={Exclude} alt='Spider' className='transform hover:scale-105 transition duration-300' />
                    </Link>
                    <Link to='/andrew' className='header-link group'>
                        <span className='hidden md:block span'>Andrew Garfield</span>
                    </Link>     
                    <a className='header-link group'>
                        <span className='hidden md:block span'>Miles Morales</span>
                    </a>
                </div>
            </div>
        </div>
    );
}