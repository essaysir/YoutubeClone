import axios from 'axios';
export default class FakeYoutube {
    constructor(){

    }
    async search(searchName){
        return searchName ? this.#searchBySearchName(searchName) : this.#mostPopular();
    }
    // # 은 해당 클래스안에서만 쓸 수 있는 private 함수를 의미한다.
    async #searchBySearchName(searchName){
        return axios 
            .get(`/videos/search.json`)
            .then((res)=> res.data.items) 
            .then((items)=> items.map((item)=>({...item , id:item.id.videoId})));
    }

    async #mostPopular(){
        return axios
            .get(`/videos/popular.json`)
            .then((res)=>res.data.items);
    }
}

