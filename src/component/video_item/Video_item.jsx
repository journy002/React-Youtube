import React from 'react';
import styles from './video_item.module.css'


// {video: {snippet}} =》 원래 {video}였던걸 video안에 snippet을 받아올거다 라는 의미로 사용가능
// 위처럼 비디오 안에 스닙쳇을 쓴다 설정해주면 props를 사용할때 snippet부터 써주면 오케이!
const VideoItem = ({video: {snippet}}) => 
<li className={styles.container}>
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

export default VideoItem;