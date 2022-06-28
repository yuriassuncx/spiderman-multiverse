import { gql, useQuery } from "@apollo/client"
import { Section } from "../components/Section";

const GET_VIDEOS_QUERY = gql`
    query MyQuery {
        videos(where: {tags: "Tobey"}) {
            id
            title
            slug
            description
            tags
            thumbnail {
            url
            }
        }
    }
`

interface Video {
    genre: string;
    id: string;
    title: string;
    description: string;
    slug: string;
    tags: 'Tom' | 'Tobey' | 'Andrew';
    thumbnail: {
        url: string;
    }
    mp4: {
        url: string;
    }
    image1: {
        url: string;
    }
    image2: {
        url: string;
    }
    image3: {
        url: string;
    }
    image4: {
        url: string;
    }
}

export function Tobey() {
    const { data } = useQuery<{ videos: Video[] }>(GET_VIDEOS_QUERY);
    const videos = data?.videos

    return (
        <div>
            <Section genre={'Tobey Maguire'} videos={videos?.filter((video) => video.tags.includes('Tobey'))} />
        </div>
    );
}