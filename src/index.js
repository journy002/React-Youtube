import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Youtube from './service/youtube';

// env를 사용해서 key가 노출되지 않게 해준다.
// REACT_APP_YOUTUBE_API_KEY 다음 내가 사용하고 싶은 key값을 넣어준 다음 사용
// env는 깃에 올라가면 안된다. gitignore 에 env를 적어서 깃에 올라가지 않게 한다.
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
