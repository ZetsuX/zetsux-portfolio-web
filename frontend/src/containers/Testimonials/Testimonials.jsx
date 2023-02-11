import React, { useState, useEffect } from 'react';
import './Testimonials.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tQuery = '*[_type == "testimonials"]';

    client.fetch(tQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const curTesti = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text" style={{ marginBottom: 30 }}>Some <span>Testimonials</span> & <span>Comments</span> About Me</h2>

      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(curTesti.imageurl)} alt="Testimonial" />

            <div className="app__testimonial-content">
              <p className="p-text">{curTesti.feedback}</p>
              <div>
                <h4 className="bold-text">{curTesti.name}</h4>
                <h5 className="p-text">{curTesti.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'), 
  'testimonials',
  "app__primarybg"
);