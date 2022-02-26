import React, { useEffect, useState } from 'react';
import { contactInformation, customBio, customName } from '../Config/PersonalInfo';
import { GetUserInfo } from '../Services/Endpoints';
import ModalShowPostContent from './ModalShowPostContent';
import Icons from './Icons';
import './Portfolio.css';

function Portfolio(props) {
  const [profileInfo, SetProfileInfo] = useState('');
  const [posts, setPosts] = useState('');
  const [postContent, setPostContent] = useState(false);
  const [postType, setPostType] = useState(false);
  const [done, setDone] = useState(false);
  const [showModalPictures, SetShowModalPictures] = useState(false);



  async function Salem() {
    if (!done) {
      //const esto = await GetUsers();
      //SetInfo(esto[0]);
      const userInfo = await GetUserInfo();
      SetProfileInfo(userInfo);
      setPosts(userInfo.edge_owner_to_timeline_media);
      //console.log(userInfo.edge_owner_to_timeline_media)
      setDone(true);
      console.log("done getting information")
      //GetUserImage()
    }
  }

  useEffect(() => {
    Salem();
  }, [])

  function SetModalContent(post) {

    setPostType(post.__typename);

    //sidecards => "GraphSidecar"
    //sinble video => "GraphVideo"
    //single picture => "GraphImage"

    switch (post.__typename) {
      case "GraphSidecar":
        setPostContent(post.edge_sidecar_to_children.edges);
        break;

      case "GraphImage":
        setPostContent(post);
        break;
      case "GraphVideo":
        setPostContent(post);
        break;

      default:
        console.log("Unknow Post Type: " + post.__typename);
        break;
    }

    SetShowModalPictures(true);
  }

  return (
    <div className='Background'>
      <div className='Resume'>
        <div className='Personal-Inf'>
          <div className='Avatar'>
            {
              <img className='Avatar-Image'
                crossOrigin="anonymous"
                src={profileInfo.profile_pic_url_hd}
                alt="new"
              />}
          </div>
          <div className='Personal-Inf-Text'>
            <div className='Bio'>
              <p className='Bio-Tittle'> {(customName === '') ? profileInfo.full_name : customName} </p>
              <p className='Bio-Text' > {(customBio === '') ? profileInfo.biography : customBio}</p>
            </div>
            <div className='Contact'>
              {contactInformation.map((site) => (
                <Icons site={site.page} url={site.url} key={site.page} />
              ))}
            </div>
          </div>
        </div>
        <div className='FeatureWork'>
          <p className='FeatureWork-Tittle'> Feature Work</p>
          <div className='FeatureWork-Content'>
            <p className='FeatureWork-Tittle'> Feature Work</p>
            <p className='FeatureWork-Tittle'> Feature Work</p>
            <p className='FeatureWork-Tittle'> Feature Work</p>
          </div>
        </div>
        <div className='Work'>
          {(done) ? (
            posts.edges.map((post, index) => {
              return (
                <button className='Instagram-Post-Button'
                  onClick={() => SetModalContent(post.node)}
                  key={"post " + index}
                >
                  <img className='Instagram-Post'
                    crossOrigin="anonymous"
                    src={post.node.thumbnail_src}
                    alt="new"
                  />
                </button>
              )
            })) : null}
        </div>
      </div>
      <ModalShowPostContent
        show={showModalPictures}
        close={() => SetShowModalPictures()}
        postContent={postContent}
        postType={postType}
      />
    </div>
  );
}

export default Portfolio;