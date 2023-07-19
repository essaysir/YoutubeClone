import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function Videos() {
    const {searchName} = useParams();
    //  { 괄호를 쳐야 하는 거 중요!! } => 괄호가 없이 해당 변수를 부르면 
    // 아예 안되는 것이 아니라 Not Found 로 가게 된다. 

    // 처음에는 생각을 잘못했던 부분 => 이를 context 를 통해서 넘기려고만 생각했다.
    // useParam 을 이용하면 쉽게 넘길 수 있었다
    const [ videoInfos , setVideoInfos] = useState([]);
    
    // 어떻게 해당 데이터를 가져올 것인가 ?
    

    return (
        <div>
            Videos : 

            {videoInfos.map((videoInfo) => (
            <p key={videoInfo.snippet.etag}>{videoInfo.snippet.title}</p>
            ))}
        </div>
        
    );
}

