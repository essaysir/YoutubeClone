import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
//import FakeYoutubeClient from '../api/fakeyoutubeClient';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient(); // mock 데이터를 통한 방법
const client = new YoutubeClient();
const youtube =  new Youtube(client);// new FakeYoutube();

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
} 

export function useYoutubeApi(){
    return useContext(YoutubeApiContext);
}