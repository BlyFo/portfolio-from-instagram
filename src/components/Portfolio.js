import React, { useEffect, useState } from 'react';
import { GetUserInfo } from '../Services/Endpoints';

import PersonalInfo from './PersonalInfo';
import FeatureWork from './FeatureWork';
import AllWork from './AllWork';
import { ColorPalette } from '../Config/ThemeManager';
import PostFilter from '../Helpers/PostFilter';

import './Portfolio.css';

function Portfolio() {

  const [profileInfo, SetProfileInfo] = useState('');
  const [posts, setPosts] = useState('');
  const [done, setDone] = useState(false);

  async function GetProfile() {
    if (!done) {
      const userInfo = await GetUserInfo();
      SetProfileInfo(userInfo);

      setPosts(PostFilter({ ...userInfo.edge_owner_to_timeline_media }));
      setDone(true);
      console.log("done getting information")
    }
  }

  useEffect(() => {
    GetProfile();
  }, [])

  return (
    <div className='Background' style={{ backgroundColor: ColorPalette.background }}>
      <div className='Resume'>
        <PersonalInfo profileInfo={profileInfo} />
        {/* just scan the first 12 post to get the ones with more likes */}
        {/* in case of wnating more is more recomended to just add custom feature posts*/}
        <FeatureWork posts={posts} doneGetingProfile={done} amount={12} />
        <AllWork posts={posts} profileInfo={profileInfo} doneGetingProfile={done} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default Portfolio;