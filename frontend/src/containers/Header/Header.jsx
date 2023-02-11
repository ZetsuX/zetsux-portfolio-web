import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Yo! My name is</p>
              <h1 className="head-text">Kevin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
              <p className="p-text">Undergraduate Informatics Student</p>
              <p className="p-text">Aspiring Programmer / Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.1 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Profile Img" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="Profile Circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.node, images.api].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="Circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');