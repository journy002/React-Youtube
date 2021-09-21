import React, { useState,useEffect } from 'react';
import styles from './app.module.css'
import VideoList from './component/video_list/Video_list';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

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
      <section className={styles.content} >
      {/* 선택된것이 있으면 div안에 내용이 보여지고 없으면 보여지지 않은 조건을 사용해 줘야 하기 때문에 div밖에서 selectedVideo에 대한 조건을 써줘야한다. */}
      {selectedVideo && (
      <div className={styles.detail} >
        {<VideoDetail video={selectedVideo}/>}
      </div>
      )}
      <div className={styles.list} >
        <VideoList 
        videos={videos} 
        onVideoClick={selectVideo} 
        display={selectedVideo ? 'list' : 'grid'} />
      </div>
      </section>
    </div>
  );
}

export default App;
