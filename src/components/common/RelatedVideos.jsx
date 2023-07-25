import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from 'react-query';
import VideoCard  from './VideoCard';

export default function RelatedVideos({id,name}) {
    const {youtube} = useYoutubeApi();
    const { isLoading ,error , data:videos} = useQuery( ['related', id] , ()=>
        youtube.releatedVideos(id)); 
    return (
        <>
            {isLoading && <p>Loading</p>}
            {error && <p>Something is Wrong</p>}
            {videos && <ul className=''>
                {videos.map((video)=> (
                    <VideoCard key={video.id} video={video}/>
                ))}
                </ul>}       
        </>
    );
}

