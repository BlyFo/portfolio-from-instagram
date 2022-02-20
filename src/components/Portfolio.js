import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { GetUsers, GetUserInfo, GetUserImage } from '../Services/Endpoints';
import { contactInformation, customBio, customName } from '../Config/PersonalInfo';
import Icons from './Icons';

function Portfolio(props) {
  const [info, SetInfo] = useState('');
  const [algo, SetAlgo] = useState('');

  async function Salem() {
    const esto = await GetUsers();
    SetInfo(esto[0]);
    const esto2 = await GetUserInfo();
    SetAlgo(esto2);
    //GetUserImage()
  }

  useEffect(() => {
    Salem();
  }, [])

  return (
    <div className='Background'>
      <div className='Resume'>
        <div className='Personal-Inf'>
          <div className='Avatar'>
            {
              <img className='Avatar-Image'
                crossOrigin="anonymous"
                src={algo.profile_pic_url_hd}
                alt="new"
              />}
          </div>
          <div className='Personal-Inf-Text'>
            <div className='Bio'>
              <p className='Bio-Tittle'> {(customName === '') ? algo.full_name : customName} </p>
              <p className='Bio-Text' > {(customBio === '') ? algo.biography : customBio}</p>
            </div>
            <div className='Contact'>
              {contactInformation.map((site) => (
                <Icons site={site.page} url={site.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;