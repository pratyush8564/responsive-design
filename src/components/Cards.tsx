import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 lg:flex-row lg:justify-evenly lg:gap-8">
      <div className="swiper-slide group mb-8 lg:mb-0">
        <figure className="rounded-[.4rem] mb-6">
          <img className="rounded-[.4rem]" src="/pd7.jpg" alt="image" />
          <a
            className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0 0.25rem 0.75rem rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
            href="./assets/img/photos/pd7-full.jpg"
            data-glightbox=""
            data-gallery="projects-group"
          >
            <i className="uil uil-focus-add before:content-['\eb22']"></i>
          </a>
        </figure>
        <div className="project-details flex justify-center flex-col">
          <div className="post-header">
            <h2 className="post-title h3">
              <a
                href="./single-project.html"
                className="text-[#343f52] hover:text-[#3f78e0]"
              >
                Cras Fermentum Sem
              </a>
            </h2>
            <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
              Stationary
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide group mb-8 lg:mb-0">
        <figure className="rounded-[.4rem] mb-6">
          <img
            className="rounded-[.4rem]"
            src="pd8.jpg"
            srcSet="./assets/img/photos/pd8@2x.jpg 2x"
            alt="image"
          />
          <a
            className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0 0.25rem 0.75rem rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
            href="./assets/img/photos/pd8-full.jpg"
            data-glightbox=""
            data-gallery="projects-group"
          >
            <i className="uil uil-focus-add before:content-['\eb22']"></i>
          </a>
        </figure>
        <div className="project-details flex justify-center flex-col">
          <div className="post-header">
            <h2 className="post-title h3">
              <a
                href="./single-project2.html"
                className="text-[#343f52] hover:text-[#3f78e0]"
              >
                Mollis Ipsum Mattis
              </a>
            </h2>
            <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
              Magazine, Book
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide group">
        <figure className="rounded-[.4rem] mb-6">
          <img className="rounded-[.4rem]" src="pd9.jpg" alt="image" />
          <a
            className="item-link absolute  h-[2.2rem]  transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0 0.25rem 0.75rem rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
            href="./assets/img/photos/pd9-full.jpg"
            data-glightbox=""
            data-gallery="projects-group"
          >
            <i className="uil uil-focus-add before:content-['\\eb22']"></i>
          </a>
        </figure>
        <div className="project-details flex justify-center flex-col">
          <div className="post-header">
            <h2 className="post-title h3">
              <a
                href="./single-project3.html"
                className="text-[#343f52] hover:text-[#3f78e0]"
              >
                Ipsum Ultricies Cursus
              </a>
            </h2>
            <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
              Packaging
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
