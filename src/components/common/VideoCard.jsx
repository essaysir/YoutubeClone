import React from 'react';
import { formatAgo } from '../../util/date';
import { Navigate, useNavigate } from 'react-router-dom';



export default function VideoCard({video}) {
    const {title,  publishedAt , thumbnails, channelTitle} = video.snippet ;
    // 특정 url 로 이동해야하는 STEP 
    // 1. useNavigate() 정의  2. navigate('url') 실행 
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/videos/watch/${video.id}` , {state: {video}});
    };
    return (
        <li>
            <img className='w-full cursor-pointer' onClick={handleClick} src={thumbnails.medium.url} alt={title} />
            <div>
                <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                <p className='text-sm opacity-80'>{channelTitle}</p>
                <p className='text-sm opacity-80'>{formatAgo(publishedAt,'ko')}</p>
            </div>
        </li>
    );
}

