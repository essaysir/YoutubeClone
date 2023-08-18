import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from 'react-query';
import VideoCard  from './VideoCard';

export default function RelatedVideos({title}) {
    const {youtube} = useYoutubeApi();
    const { isLoading ,error , data:videos} = useQuery( ['related', title] , ()=>
        youtube.releatedVideos(title) ,
        {staleTime: 1000*60*5} , 
        ); 
    return (
        <>
            {isLoading && <p>Loading</p>}
            {error && <p>Something is Wrong</p>}
            {videos && <ul className=''>
                {videos.map((video)=> (
                    <VideoCard key={video.id} video={video} type='list'/> 
                ))}
                </ul>}       
        </>
    );
}

