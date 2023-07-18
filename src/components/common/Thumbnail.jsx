import {useEffect, useState} from 'react';
import styles from './Thumbnail.module.css';
import he from 'he';
import axios from 'axios' ;

export default function Thumbnail({videoInfo}) {
    const title = he.decode(videoInfo.snippet.title) ;
    const truncatedTitle = truncateTitle(title, 35);

    const time = new Date(videoInfo.snippet.publishTime) ;
    const format_time = formatTimeAgo(time);
    const [profileImg, setProfileImg] = useState('');
    
    useEffect(()=>{
      let ignore = false ;
      axios.get('data/channel_id.json')
      .then((Response)=>{
          if ( !ignore ){
            // console.log(Response.data);
            const thumbnailUrl = Response.data.items[0].snippet.thumbnails.default.url;
            // console.log(thumbnailUrl);
            setProfileImg(thumbnailUrl);  
          }
      })
      .catch((Error)=>{console.log(Error)});
      return ()=>{
          ignore = true ; 
      };
      },[]);
      
    return (
        <div className={styles.cont}key={videoInfo.etag}>
                         <img className={styles.img} src={videoInfo.snippet.thumbnails.medium.url}/> 
                        <section className={styles.flexsection}>
                          <div className={styles.profileImg}>
                            <img className={styles.thumbnail}src={profileImg} />
                          </div>
                          <div>
                          <p className='mx-2'>{truncatedTitle}<br/>
                              <span className={styles.channel}>{videoInfo.snippet.channelTitle}</span><br/>
                              <span className={styles.channel}>{format_time}</span>
                          </p>
                          </div>
                        </section>
        </div>
    );
}

function truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
}

function formatTimeAgo(date) {
    const now = new Date();
    const diffInMilliseconds = now - date;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
  
    if (diffInMonths > 0) {
      return `${diffInMonths}달 전`;
    } else if (diffInWeeks > 0) {
      return `${diffInWeeks}주일 전`;
    } else if (diffInDays > 0) {
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInMinutes}분 전`;
    }
  }