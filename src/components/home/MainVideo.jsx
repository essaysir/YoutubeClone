import  { useEffect, useState } from 'react';
import axios from 'axios' ;
import styles from './MainVideo.module.css';
import Thumbnail from '../common/Thumbnail';
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
    // 하하하 
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
        <div className={styles.container}>
                
                {videoInfos.map((videoInfo)=>(
                    // <div key={videoInfo.etag}>
                    //     <img className={styles.img} src={videoInfo.snippet.thumbnails.medium.url}/> 
                    //     <p>{videoInfo.snippet.title}<br/>
                    //         <span>{videoInfo.snippet.channelTitle}</span><br/>
                    //         <span>{videoInfo.snippet.publishTime}</span>
                    //     </p> 

                    // </div>
                    <Thumbnail key={videoInfo.etag} videoInfo={videoInfo} />
                ))}

            
        </div>
    );
}

