import React from 'react';
import { contactInformation, customBio, customName } from '../Config/PersonalInfo';
import Icons from './Icons';
import './PersonalInfo.css'
import { ColorPalette } from '../Config/ThemeManager';

function PersonalInfo({ profileInfo }) {
  return (
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

          <p className='Bio-Tittle'
            style={{ color: ColorPalette.text }}
          >
            {(customName === '') ? profileInfo.full_name : customName}
          </p>

          <p className='Bio-Text'
            style={{ color: ColorPalette.text }}
          >
            {(customBio === '') ? profileInfo.biography : customBio}
          </p>

        </div>
        <div className='Contact'>
          {contactInformation.map((site) => (
            <Icons site={site.page} url={site.url} key={site.page} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;