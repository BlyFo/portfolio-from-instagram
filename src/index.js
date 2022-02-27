import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Portfolio from './components/Portfolio'
//import Test from './components/Test'

ReactDOM.render(
  <React.StrictMode>
    {
      //<Test />
    }
    {
      <Portfolio />
    }
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
//7515213976%3AWvUsmarQ06xBGY%3A22
https://github.com/mineur/instagram-parser/blob/master/docs/setup.md#how-to-get-your-query-hash-old-query-id

"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir=%TMP%\temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials

npm i --save react-native-svg # **
npm i -S @fortawesome/free-regular-svg-icons
npm i -S @fortawesome/free-solid-svg-icons
npm i -S @fortawesome/react-fontawesome
npm i -S @fortawesome/free-brands-svg-icons
path-browserify
*/

/*
query_hash:8c2a529969ee035a5063f2fc8602a0fd
id=331401923
*/