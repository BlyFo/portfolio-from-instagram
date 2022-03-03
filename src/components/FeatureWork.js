import React, { useEffect, useState } from 'react';
import './FeatureWork.css'
import PostList from './PostList';
import { customFeaturePosts } from '../Config/Posts';
import { GetPostInformation } from '../Services/Endpoints';

function FeatureWork({ posts, doneGetingProfile, amount }) {

  const [doneCustomPosts, setDoneCustomPosts] = useState(false);
  const [useCustomPost, setUseCustomPost] = useState(0);
  const [customPost, setCustomPost] = useState('');

  async function GetCustomPosts() {
    if (!doneGetingProfile || customFeaturePosts.length === 0) {
      if (customFeaturePosts.length === 0) setUseCustomPost(-1);
      return null;
    }
    setDoneCustomPosts(true);
    let result = [];

    for (let i = 0; i < customFeaturePosts.length; i++) {

      const postInfo = await GetPostInformation(customFeaturePosts[i]);

      if (postInfo === -1) break;

      let mediaType = '';
      let mediaId = '';
      let thumbnail = '';
      let videoUrl = '';
      let mediaDisplay = '';
      let children = '';

      //in case there is an error with the information obtained
      try {
        mediaType = postInfo.graphql.shortcode_media.__typename;
        mediaId = postInfo.graphql.shortcode_media.id;
      } catch {
        break;
      }

      switch (mediaType) {
        case "GraphVideo":
          videoUrl = postInfo.graphql.shortcode_media.video_url;
          thumbnail = postInfo.graphql.shortcode_media.thumbnail_src;
          break;

        case "GraphImage":
          thumbnail = postInfo.graphql.shortcode_media.display_resources[0].src;
          mediaDisplay = postInfo.graphql.shortcode_media.display_url;
          break;

        case "GraphSidecar":
          thumbnail = postInfo.graphql.shortcode_media.display_resources[0].src;
          children = postInfo.graphql.shortcode_media.edge_sidecar_to_children;
          break;

        default:
          console.log("Unknow media type: " + mediaType);
          break;
      }
      result.push(
        {
          node: {
            __typename: mediaType,
            id: mediaId,
            thumbnail_src: thumbnail,
            edge_sidecar_to_children: children,
            display_url: mediaDisplay,
            video_url: videoUrl,
            //i was lazy to fix this part sorry...
            edge_liked_by: {
              count: 0
            }
          }
        }
      );
    };

    let customPostList = {
      count: 0,
      edges: result,
      page_info: 0
    };

    //if a problem happens they will not be the same size, in that case not use the custom posts.
    if (result.length === customFeaturePosts.length) {
      setCustomPost(customPostList);
      setUseCustomPost(1);
    } else {
      setUseCustomPost(-1);
    }
  }

  useEffect(() => {
    if (!doneCustomPosts) {
      GetCustomPosts();
    }
  }, [doneGetingProfile])

  function comparePosts(postA, postB) {

    if (postA.node.edge_liked_by.count < postB.node.edge_liked_by.count) {
      return 1;
    }
    return -1;
  }

  function ShowFeatureWork() {

    let postToShow;

    switch (useCustomPost) {

      case 1: //there are custom post to show and they are ready
        postToShow = (
          <PostList
            posts={customPost}
            doneGetingProfile={doneGetingProfile}
            feature={true}
          />
        );
        break;

      case 0: //there are custom post to show but they aren't ready to show
        postToShow = (
          <div></div>
        );
        break;

      case -1: //no custom post or there was an error getting the information
        if (doneGetingProfile) {
          let postList = [...posts.edges.slice(0, amount)];
          let BestPosts = { ...posts };
          postList.sort(comparePosts);
          BestPosts.edges = postList.slice(0, 3);

          postToShow = (
            <PostList
              posts={BestPosts}
              doneGetingProfile={doneGetingProfile}
              feature={true}
            />
          );
        } else {
          postToShow = (
            <div></div>
          );
        }
        break;
    }
    return postToShow;
  }

  return (
    <div className='FeatureWork'>
      <p className='FeatureWork-Tittle'> Feature Work</p>
      <div className='FeatureWork-Content'>
        {
          <ShowFeatureWork />
        }
      </div>
    </div>
  );
}

export default FeatureWork;