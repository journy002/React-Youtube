import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      title="youtube video player"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    {/* pre 태그는 텍스트가 연결되어 있으면 원래 공간을 넘어 가서 사이즈가 계속 길어진다 그럴땐 css white-space: pre-wrap으로 해결이 가능하다. */}
    <pre className={styles.description} > {snippet.description} </pre>
  </section>
);

export default VideoDetail;
