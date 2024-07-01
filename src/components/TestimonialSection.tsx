import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="flex flex-wrap mx-10">
      {/* Image Column */}
      <div className="lg:w-6/12 xl:w-6/12 w-full flex-0-auto max-w-full bg-cover bg-center bg-no-repeat relative rounded-t-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-bl-[0.4rem] md:min-h-[25rem] sm:min-h-[25rem] xsm:min-h-[25rem] flex justify-center items-center" style={{ backgroundImage: 'url("/tm2.jpg")', minHeight: '25rem' }}>
        {/* Placeholder content or alternative text if necessary */}
        {/* <p>Image Placeholder or Alt Text</p> */}
      </div>
      {/* Testimonial Content Column */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-0-auto max-w-full">
        <div className="p-10 md:p-3rem lg:p-[4.5rem 4rem] xl:p-[4.5rem 4rem]">
          <div className="swiper-container mb-6">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div className="swiper-wrapper" aria-live="off">
                <div className="swiper-slide text-center swiper-slide-active md:mt-0">
                  <span className="ratings inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five mt-16 mb-3"></span>
                  <blockquote className="border-0 text-lg text-center mb-6">
                    <p>“Vivamus sagittis lacus vel augue laoreet rutrum <br/>faucibus dolor auctor. Vestibulum ligula porta felis <br/>euismod semper. Cras justo odio.”</p>
                  </blockquote>
                  <div className="flex items-center justify-center text-center">
                    <div className="info">
                      <h5 className="mb-1 text-sm font-semibold leading-[1.5]">Coriss Ambady</h5>
                      <p className="mb-0 text-xs">Financial Analyst</p>
                    </div>
                  </div>
                </div>
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            <div className="swiper-controls">
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
