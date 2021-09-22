import axios from 'axios';

// App.jsx에 네트워크 통신 코드가 있으면 좋지 않기 때문에 따로 자바스크립트 클래스를 통해 네트워크 통신을 위한 코드를 만들어준다.
class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {key: key},
        });
    }

    async mostPopular() {
        
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        });
        return response.data.items;

    // --------------- JSON으로 변환해주지 않고 API가져오기 ----------------------
    // fetch를 하고 then then then 하면 최종적으로 promise가 만들어 지고 promise를 리턴한다
    //    const response = await fetch(
    //         `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //         this.getRequestOptions
    //     );
    //     const result = await response.json();
    //     return result.items; // 변환된 텍스트를 콘솔에 출력하고
    }

    async search(query) {

        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));


        // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
        // const result = await response.json();
        // return result.items.map(item => ({ ...item, id: item.id.videoId }));
        // .then(items => setVideos(items))
        // .catch(error => console.log('error', error))
    }
}

export default Youtube;