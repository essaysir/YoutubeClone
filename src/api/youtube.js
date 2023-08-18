export default class Youtube {
    
    constructor(apiClient){
        this.apiClient = apiClient ;
    }
    async search(searchName){
        return searchName ? this.#searchBySearchName(searchName) : this.#mostPopular();
    }

    async channelImgUrl(id){
        return this.apiClient
        .channels({params: {part : 'snippet' , id }})
        .then((res)=> res.data.items[0].snippet.thumbnails.default.url)
    }
    
    async releatedVideos(title){
        return this.apiClient.search({
            params:{
                part:'snippet' ,
                maxResults : 10 ,
                type : 'video',
                q: title
            },
        })
        .then((res)=> res.data.items.map((item)=>({...item , id:item.id.videoId})));
        
    }
    // # 은 해당 클래스안에서만 쓸 수 있는 private 함수를 의미한다.
    async #searchBySearchName(searchName){
        return this.apiClient
        .search({
            params : {
                part : 'snippet' , 
                maxResults : 25, 
                type :'video',
                q : searchName
            },
        }) 
        .then((res)=> res.data.items) 
        .then((items)=> items.map((item)=>({...item , id:item.id.videoId})));
    }

    async #mostPopular(){
        return this.apiClient
        .videos({
            params : {
                part:'snippet' ,
                maxResults: 25,
                chart:'mostPopular',
            },
        })            
        .then((res)=>res.data.items);
    }
}

