import React, { useState,useEffect, useCallback } from 'react';
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

  // useCallback은 메모리에 계속 보관이 되기 때문에 많은 영향을 줄 수 있다. 그러므로 조심해서 사용하는게 좋다.
  const search = useCallback( query => {
      setSelectedVideo(null);
      youtube 
      .search(query) //
      .then(videos => setVideos(videos));
    },[youtube]);

  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
  },[youtube]);


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
