import React from 'react';
import './Icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { icons } from '../Config/ThemeManager';

function Icons({ site, url }) {

  const GetIcon = () => {

    let icon = null
    switch (site.toLowerCase()) {
      case "twitter":
        icon = <FontAwesomeIcon icon={faTwitter} color={icons.color} size={icons.size} />
        break;
      case "facebook":
        icon = <FontAwesomeIcon icon={faFacebook} color={icons.color} size={icons.size} />
        break;
      case "instagram":
        icon = <FontAwesomeIcon icon={faInstagram} color={icons.color} size={icons.size} />
        break;
      case "linkedin":
        icon = <FontAwesomeIcon icon={faLinkedin} color={icons.color} size={icons.size} />
        break;
      case "tiktok":
        icon = <FontAwesomeIcon icon={faTiktok} color={icons.color} size={icons.size} />
        break;
      case "email":
        icon = <FontAwesomeIcon icon={faEnvelope} color={icons.color} size={icons.size} />
        break;

      default:
        console.error("site not found: " + site)
        icon = <FontAwesomeIcon icon={faTimesCircle} color={icons.color} size={icons.size} />
        break;
    }
    return (
      <a
        className='Contact-Icons'
        href={(site.toLowerCase() !== "email") ? url : "mailto: " + url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  }

  return (
    <div className='Contact-Icons-Container'>
      <GetIcon />
    </div>
  );
}

export default Icons;