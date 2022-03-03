import React, { useState, useEffect } from 'react';
import { GetVideo } from '../Services/Endpoints';
import './DisplayMediaPostByType.css'
import './Loader.css'

function DisplayMediaPostByType({ media, filter }) {
  let content = null;
  //let videoSource = null;
  const [asyncContent, setAsyncContent] = useState('')

  useEffect(() => {
    const fetchContent = async () => {
      switch (media.__typename) {
        case "GraphVideo":
          let contentFetched = await GetVideo(media.video_url);
          setAsyncContent(contentFetched);
          break;

        default:
          break;
      }
    }
    fetchContent()
  }, [])


  switch (media.__typename) {
    case "GraphImage":
      //incase filter is not send as a aparameter
      if (filter === undefined || filter['image']) {
        content = (
          <img
            className='postMedia-Img'
            crossOrigin="anonymous"
            src={media.display_url}
            alt="new"
          />
        )
      }
      break;
    case "GraphVideo":
      //incase filter is not send as a aparameter
      if (filter === undefined || filter['video']) {
        content = (asyncContent !== '') ? (
          //when the video is loaded
          <video className='postMedia-Video' crossOrigin="anonymous" controls autoPlay>
            <source src={asyncContent} type="video/mp4" />
            This browser doesn't support video tag.
          </video>
        ) : ( //while loading the video url
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
      }
      break;

    default:
      console.log("Unknow media: " + media.__typename)
      break;
  }
  return content;
}

export default DisplayMediaPostByType;