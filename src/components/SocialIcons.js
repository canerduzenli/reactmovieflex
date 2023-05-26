import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      <div className='container S-icon'>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://www.github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
