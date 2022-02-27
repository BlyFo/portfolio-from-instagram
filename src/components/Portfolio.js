import React, { useEffect, useState } from 'react';
import { contactInformation, customBio, customName } from '../Config/PersonalInfo';
import { showSinglePosts, showSydeCardsPosts } from '../Config/Posts';
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

  function DisplayPosts() {
    if (!done) return null;

    return (
      posts.edges.map((post, index) => {
        let showPost = false;
        let postMedia = ''
        switch (post.node.__typename) {
          case "GraphSidecar":
            if (showSydeCardsPosts['image'] && showSydeCardsPosts['video']) {
              showPost = true;
              postMedia = post.node.edge_sidecar_to_children.edges
            }
            break;

          case "GraphImage":
            if (showSinglePosts['image']) {
              showPost = true;
              postMedia = post.node
            }
            break;

          case "GraphVideo":
            if (showSinglePosts['video']) {
              showPost = true;
              postMedia = post.node
            }
            break;

          default:
            console.log("Unknow Post Type: " + post.node.__typename);
            break;
        }
        if (showPost) {
          return (
            <button className='Instagram-Post-Button'
              onClick={() => {
                setPostType(post.node.__typename);
                setPostContent(postMedia);
                SetShowModalPictures(true);
              }}
              key={"post " + index}
            >
              <img className='Instagram-Post'
                crossOrigin="anonymous"
                src={post.node.thumbnail_src}
                alt="new"
              />
            </button>
          );
        }
      })
    )
  };

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
          <DisplayPosts />
        </div>
      </div>
      {/* if the component <ModalShowPostContent ... /> is rendered from the start it ocasionate problems with the UseEffect in the component*/}
      {/* it only needs to be render when necesary (not using css with display: none;) */}
      {(showModalPictures) ? <ModalShowPostContent
        show={showModalPictures}
        close={() => SetShowModalPictures()}
        postContent={postContent}
        postType={postType}
      /> : null}
    </div>
  );
}

export default Portfolio;