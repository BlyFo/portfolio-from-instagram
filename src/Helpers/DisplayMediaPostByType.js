import React from 'react';
import './DisplayMediaPostByType.css'

function DisplayMediaPostByType({ media, filter }) {
  let content = null;
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
        console.log("entro")
        content = (
          <video crossOrigin="anonymous" controls autoPlay>
            <source src={media.video_url} />
            This browser doesn't support video tag.
          </video>
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