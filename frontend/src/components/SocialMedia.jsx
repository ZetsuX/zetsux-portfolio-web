import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">
            <div>
                <BsLinkedin />
            </div>
        </a>
        
        <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
            <div>
                <BsGithub />
            </div>
        </a>
        
        <a href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <div>
                <BsInstagram />
            </div>
        </a>
    </div>
  )
}

export default SocialMedia