import React, { useState, useEffect } from 'react';
import './Testimonials.scss';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "brands"]';
    const tQuery = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setBrands(data);
    });

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

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'), 
  'testimonial',
  "app__primarybg"
);