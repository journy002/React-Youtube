import React, { useState,useEffect } from 'react';
import styles from './app.module.css'
import VideoList from './component/video_list/Video_list';
import SearchHeader from './component/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBMT38b6CnpiK23akYXQvBfrL5nH10ay7E`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId}) ))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error))
  }


  useEffect(() => {
    const requestOptions = {
      // fetch를 쓸때, 즉 리퀘스트를 할 때 옵션을 전달하는것(method, redirect) 
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBMT38b6CnpiK23akYXQvBfrL5nH10ay7E",
      requestOptions
    )

      .then(response => response.json()) // respone(반응)을 텍스트로 변환시킨다 라는 의미(처음에 가져왔을때) response.text -> response.json 으로 바꿔 주는게 더 편함
      .then(result => setVideos(result.items)) // 변환된 텍스트를 콘솔에 출력하고
      .catch(error => console.log('error', error)); // 만약 에러가 발생하면 에러를 출력
  },[]);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <h1><VideoList videos={videos} /></h1>
    </div>
  );
}

export default App;
