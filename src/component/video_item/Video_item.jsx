import React, { memo } from 'react';
import styles from './video_item.module.css'


// {video: {snippet}} =》 원래 {video}였던걸 video안에 snippet을 받아올거다 라는 의미로 사용가능
// 위처럼 비디오 안에 스닙쳇을 쓴다 설정해주면 props를 사용할때 snippet부터 써주면 오케이!

// props를 받아오는 과정에서 video를 한번 더 받아 오는 이유는
// onVideoClick 함수가 실행 될때 props로 비디오를 받아와야 하는데 {video: {snippet} 같은 경우 비디오에 있는 snippet이 받을 수 있도록 만들었기 때문에 비디오를 받아와야 한다.
// useMemo는 memo라고 해주면 간단하게 사용가능. 비디오 item은 매번 랜더링 될 필요가 없기 때문에 성능최적화를 해주면 좋다.
const VideoItem = memo(
    ({video ,video: {snippet}, onVideoClick, display}) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (    
            <li 
                className={`${styles.container} ${displayType}`} 
                onClick={() => onVideoClick(video)} 
            >
                <div className={styles.video}>
                    <img
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt='video thumnail'
                    />
                    <div className={styles.metadata}>
                        <p className={styles.title} >{snippet.title}</p>
                        <p className={styles.channel} >{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
        );
    }
)
export default VideoItem;