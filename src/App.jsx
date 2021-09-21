import React, { useState,useEffect } from 'react';
import styles from './app.module.css'
import VideoList from './component/video_list/Video_list';
import SearchHeader from './component/search_header/search_header';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube 
    .search(query) //
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
  },[]);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <h1><VideoList videos={videos} /></h1>
    </div>
  );
}

export default App;
