import React from 'react';
import styles from './Thumbnail.module.css';
import he from 'he';

export default function Thumbnail({videoInfo}) {
    const title = he.decode(videoInfo.snippet.title) ;
    const truncatedTitle = truncateTitle(title, 50);

    const time = new Date(videoInfo.snippet.publishTime) ;
    const format_time = formatTimeAgo(time);
    return (
        <div className={styles.cont}key={videoInfo.etag}>
                         <img className={styles.img} src={videoInfo.snippet.thumbnails.medium.url}/> 
                         <p>{truncatedTitle}<br/>
                            <span>{videoInfo.snippet.channelTitle}</span><br/>
                             <span>{format_time}</span>
        </p>
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