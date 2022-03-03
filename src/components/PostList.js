import React, { useState, useRef, useCallback } from 'react';
import ModalShowPostContent from './ModalShowPostContent';
import { showSinglePosts, showSydeCardsPosts } from '../Config/Posts';
import { ColorPalette, workSize } from '../Config/ThemeManager';

import './PostList.css'
import '../Helpers/Loader.css'

function PostList({ posts, doneGetingProfile, feature, loading, addMorePosts }) {

  const [postContent, setPostContent] = useState(false);
  const [postType, setPostType] = useState(false);

  const [showModalPosts, SetShowModalPosts] = useState(false);

  const observer = useRef();
  const lastPostElementRef = useCallback(node => {

    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (addMorePosts !== undefined) {
          addMorePosts();
        }
      }
    })

    if (node) observer.current.observe(node)

  }, [loading])


  function DisplayPosts() {

    if (!doneGetingProfile) return null;

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
          const size = (feature === true) ? workSize.featureWork : workSize.normalwork;
          return (
            <button className='Instagram-Post-Button'
              style={{ backgroundColor: ColorPalette.background, border: 'red' }}
              onClick={() => {
                setPostType(post.node.__typename);
                setPostContent(postMedia);
                SetShowModalPosts(true);
              }}
              key={"post " + index}
            >
              <img className='Instagram-Post'
                style={{
                  border: `1px solid ${ColorPalette.shadow}`,
                  boxShadow: `${ColorPalette.shadow} 0px 2px 8px 0px`,
                  height: `${size}px`,
                  width: `${size}px`,
                }}
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

  const LoadingAnimation = () => {

    if (loading === undefined) return <div></div>;

    if (loading) {
      return <div className="lds-spinner" style={{ position: 'relative', top: 0, left: '50%', transform: 'translate(-50%, 0%)', marginTop: '30px' }}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    }

    return <div></div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='Work'>
        <DisplayPosts />
      </div>
      <LoadingAnimation />
      {/* invisible div at the end of the posts to make the infinity scroll work */}
      <div ref={lastPostElementRef}></div>
      {/* if the component <ModalShowPostContent ... /> is rendered from the start it ocasionate problems with the UseEffect in the component*/}
      {/* it only needs to be render when necesary (not using css with display: none;) */}
      {(showModalPosts) ? <ModalShowPostContent
        show={showModalPosts}
        close={() => SetShowModalPosts()}
        postContent={postContent}
        postType={postType}
      /> : null}
    </div>
  );
}

export default PostList;