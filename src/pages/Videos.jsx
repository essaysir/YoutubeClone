import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../components/common/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
export default function Videos() {
    const {searchName} = useParams();
    //  { 괄호를 쳐야 하는 거 중요!! } => 괄호가 없이 해당 변수를 부르면 
    // 아예 안되는 것이 아니라 Not Found 로 가게 된다. 

    // 처음에는 생각을 잘못했던 부분 => 이를 context 를 통해서 넘기려고만 생각했다.
    // useParam 을 이용하면 쉽게 넘길 수 있었다
    
    // const [ videoInfos , setVideoInfos] = useState([]);
    // useQuery 를 쓸 것이다.
    
    // 삼항연산자 ? => searchName ? '참인경우' : '거짓인 경우' => 다음과 같이 쓰고, 
    // 위에서는 '' 공백인 경우는 거짓인 경우에 해당된다. 
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data:videos , } = useQuery(['videos',searchName] ,
        ()=> youtube.search(searchName),
        {staleTime: 1000*60*1},     
        );
    // fetch 방식 => fetch 의 단점은 javascript native 함수지만, 
    //  400 번대로 응답해도 이를 에러를 처리하지 않고, res 로 넘겨준다. 따라서, 이를 res 에서 
    // 내가 직접 처리해주어야한다. but , axios는 400번대 응답코드를 알아서 에러로 처리해준다.
    // async ()=> {return fetch(`/videos/${searchName ? 'search' : 'popular'}.json`)
    // .then(res => res.json())
    // .then(data => data.items)
    
    // useQuery 는 두가지 param 을 가지는 데, 첫번 쨰는 캐쉬 키 와
    // 두 번째는 어떻게 data 를 가져오는 가이다. 

    return (
        <>
            {/* <div>videos</div> */}
            {isLoading && <p>Loading</p>}
            {error && <p>Something is Wrong</p>}
            {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                {videos.map((video)=> (
                    <VideoCard key={video.id} video={video}/>
                ))}
                </ul>}
        </>
        
    );
}

