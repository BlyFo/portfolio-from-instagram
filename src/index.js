import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Portfolio from './components/Portfolio'

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
https://cming0721.medium.com/instagram-feeds-with-instagram-api-part-2-basic-display-api-with-react-f0c6dfcc576c
https://tools.codeofaninja.com/find-instagram-user-id
https://www.instagram.com/natalyvalencia.v/?hl=es
https://www.instagram.com/natalyvalencia.v/?__a=1

"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir=%TMP%\temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials

*/