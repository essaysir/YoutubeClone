import React, { useEffect, useState } from 'react';
import axios from 'axios' ;

export default function Main() {
    const [ videoInfos , setVideoInfo] = useState([]);
    
    // 1번 fetch 를 통해서 불러오기 
    // useEffect(()=>{
    //     fetch('data/list.json')
    //     .then( res => res.json())
    //     .then(data=>{
    //         // console.log('데이터를 받아옴');
    //         // console.log(data);
    //         setVideoInfo(data.items);
    //     });
    // },[]);

    // // 2번 axios 로 불러오기
    useEffect(()=>{
        axios.get('data/list.json')
        .then((Response)=>{
            console.log(Response.data);
            setVideoInfo(Response.data.items);
        })
        .catch((Error)=>{console.log(Error)});
    },[]);

    
    return (
        <div>
            <ul>
                {videoInfos.map((videoInfo)=>(
                    <li key={videoInfo.etag}>
                        <img src={videoInfo.snippet.thumbnails.medium.url}/> 
                        <p>{videoInfo.snippet.title}</p> 
                    </li>
                ))}

            </ul>
        </div>
    );
}

