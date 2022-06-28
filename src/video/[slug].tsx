import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router-dom"

import Exclude from '/src/assets/Exclude.png'

const GET_VIDEO_BY_SLUG_QUERY = gql`
    query GetVideoBySlug ($slug: String) {
        video(where: {slug: $slug}) {
            title
            id
            description
            image1 {
                url
            }
            image2 {
                url
            }
            image3 {
                url
            }
            image4 {
                url
            }
            mp4 {
                url
            }
        }
    }
`

interface GetVideoBySlugResponse {
    video?: {
        title: string;
        id: string;
        description: string;
        image1?: {
            url: string;
        }
        image2?: {
            url: string;
        }
        image3?: {
            url: string;
        }
        image4?: {
            url: string
        }
        mp4?: {
            url: string;
        }
    }
}

export function Video() {
    const [watching, setWatching] = useState(false);
    const { slug } = useParams<{ slug: string }>()

    const { data } = useQuery<GetVideoBySlugResponse>(GET_VIDEO_BY_SLUG_QUERY, {
        variables: {
            slug: slug
        }
    });

    return (
        <>
            <div className="md:flex h-full flex-nowrap flex-row">   
                <div className='hidden w-24 h-screen fixed left-0 top-0 z-10 lg:flex justify-center items-center'>
                    <nav className='h-[80vh] flex justify-center items-center w-full relative before:absolute before:top-0 before:w-1 before:h-full before:bg-white before:z-0'>
                        <div className='absolute top-[-20px]'>
                            <img src={Exclude} alt='Spider' />
                        </div>
                        <ul className='space-y-12 z-10'>
                            <li><a href='/tobey' className='btn-rounded active:bg-white active:text-black'>01</a></li>
                            <li><a href='/andrew' className='btn-rounded active:bg-white active:text-black'>02</a></li>
                            <li><a href='/tom' className='btn-rounded active:bg-white active:text-black'>03</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="h-full w-full md:pl-[130px]">
                    <div className="h-[80vh] flex flex-col justify-start">
                        <div>
                            <img src={data?.video?.image1?.url} alt='Spiderman Image' className='mt-[50px] ml-0 mb-[30px]' />
                        </div>

                        <div className="bg-black bg-opacity-50 md:max-w-[50%] p-5 rounded-2xl">
                            <div className="mb-5">
                                <ul className="flex flex-row gap-6">
                                    <li className="bg-[#B9001F] text-white text-sm md:text-base font-bold px-2 py-1 rounded-full uppercase cursor-pointer">{data?.video?.title}</li>
                                </ul>
                            </div>
                            <div className="text-white leading-6">
                                <p><strong>Sinopse:</strong>&nbsp;{data?.video?.description}</p>
                            </div>
                        </div>

                        <div className="pt-14 ml-24 md:ml-0">
                            <a className="flex rounded-lg">
                                <div className="flex space-x-2 border-0 border-solid border-white bg-black rounded-full px-2 py-2 text-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <button onClick={() => { watching ? setWatching(false) : setWatching(true) }} className='text-base text-red-500 font-bold'>Assistir ao Filme</button>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="pt-16 md:mt-9 ml-14 md:h-[20vh] md:pt-0 md:ml-0 xl:mt-0 flex flex-col justify-end">
                        <div className="md:p-5">
                            <ul className="md:flex flex-row">
                                <li className="pt-4 md:pt-0 ml-[25px]">
                                    <a>
                                        <img src={data?.video?.image2?.url} alt="Spider-2" className="brand" />
                                    </a>
                                </li>
                                <li className="pt-4 md:pt-0 ml-[25px]">
                                    <a>
                                        <img src={data?.video?.image3?.url} alt="Spider-3" className="brand" />
                                    </a>
                                </li>
                                <li className="pt-4 md:pt-0 ml-[25px]">
                                    <a>
                                        <img src={data?.video?.image4?.url} alt="Spider-4" className="brand" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {watching && (
                <video width="100%" controls className="pt-10 z-50 md:absolute">
                    <source src={data?.video?.mp4?.url} type="video/mp4" />
                </video>
            )}
        </>
    )
}