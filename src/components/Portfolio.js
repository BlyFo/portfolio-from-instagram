import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { GetUsers, GetUserInfo, GetUserImage } from '../Services/Endpoints';

function Portfolio(props) {
  const [info, SetInfo] = useState('');
  const [algo, SetAlgo] = useState('');

  const contact = [
    { page: "Instagram", url: "https://www.instagram.com/natalyvalencia.v/" },
    { page: "Twitter", url: "https://twitter.com/natalyvalencia4" },
    { page: "Facebook", url: "https://www.facebook.com/NatalyValencia.V" },
    { page: "TikTok", url: "https://www.tiktok.com/@natalyvalencia.v" },
    { page: "Linkedin", url: "https://www.linkedin.com/in/nataly-valencia-3b5149189/" },
  ]

  async function Salem() {
    const esto = await GetUsers();
    SetInfo(esto[0])
    const esto2 = await GetUserInfo();
    SetAlgo(esto2)
    //GetUserImage()
  }

  useEffect(() => {
    Salem();
  }, [])

  return (
    <div className='Background'>
      <div className='Personal-Inf'>
        <div className='Avatar'>
          {
            <img className='Avatar-Image'
              crossOrigin="anonymous" //src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              src={algo.profile_pic_url_hd}
              alt="new"
            />}
        </div>
        <div className='Personal-Inf-Text'>
          <div className='Bio'>
            <h6 style={{ margin: 0 }}> {algo.full_name} </h6>
            <p> {algo.biography}</p>
          </div>
          <div className='Contact'>
            {contact.map((site) => (
              <p className='Contact-Links' key={site.page}>{site.page}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;