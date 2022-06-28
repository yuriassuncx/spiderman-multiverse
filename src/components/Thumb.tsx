interface ThumbProps {
    thumbnail: {
        url: string
    }
}

export function Thumb({thumbnail}: ThumbProps) {
    return (
        <img src={thumbnail.url} className='flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300' />
    );
}