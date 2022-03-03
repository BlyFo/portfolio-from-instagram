import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import { GetPosts } from '../Services/Endpoints';
import PostFilter from '../Helpers/PostFilter';

function AllWork({ posts, profileInfo, doneGetingProfile, setPosts }) {

  const [loading, setLoading] = useState(false);

  async function AddMorePosts() {

    // only run the code if: 
    if (!doneGetingProfile) return null;
    // there is information to work with,

    if (loading) return null;
    // is not loadign more information,

    if (!posts.page_info.has_next_page) return null;
    // there are more post to load.

    setLoading(true);

    const newPosts = await GetPosts(profileInfo.id, posts.page_info.end_cursor, 24);
    console.log(newPosts);

    if (newPosts === -1) {
      //in case there was a problem with the endpoint
      console.log('error getting more posts')
      setLoading(false);
      return null;
    }

    let newPostList = [...posts.edges];
    newPosts.edges.forEach(newPost => {
      newPostList.push(newPost);
    });

    setPosts(
      PostFilter({
        count: posts.count,
        edges: newPostList,
        page_info: newPosts.page_info
      })
    );
    setLoading(false);
  }

  return (
    <div style={{ marginTop: '100px', marginBottom: '20px' }}>
      <PostList posts={posts} doneGetingProfile={doneGetingProfile} loading={loading} addMorePosts={() => AddMorePosts()} />
    </div>
  );
}

export default AllWork;