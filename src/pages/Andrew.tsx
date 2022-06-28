import { gql, useQuery } from "@apollo/client"
import { Section } from "../components/Section";

const GET_VIDEOS_QUERY = gql`
    query MyQuery {
        videos(where: {tags: "Andrew"}) {
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


export function Andrew() {
    const { data } = useQuery<{ videos: Video[] }>(GET_VIDEOS_QUERY);
    const videos = data?.videos

    return (
        <Section genre={'Andrew Garfield'} videos={videos?.filter((video) => video.tags.includes('Andrew'))} />
    );
}