import { Link } from "react-router-dom";
import { Thumb } from "./Thumb";

interface SectionProps {
    genre: string;
    videos?: Array<{
        id: string
        thumbnail: {
            url: string
        }
        slug: string
    }>;
}

export function Section({genre, videos}: SectionProps) {
    return (
        <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto'>
            <h3 className='font-semibold'>{genre}</h3>
            <div className='flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2'>
                {videos?.map((video) => (
                    <Link key={video?.id} to={`/video/${video?.slug}`}>
                        <Thumb thumbnail={video?.thumbnail} />
                    </Link>
                ))}
            </div>
        </div>
    );
}