import React from "react";
import Cards from "../../components/Cards";
import DataAnalysisSection from "../../components/DataAnalysisSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/ServiceCard";
import Solutions from "../../components/Solutions";
import StatsSection from "../../components/StatsSection";
import Tabs from "../../components/Tabs";
import TestimonialSection from "../../components/TestimonialSection";

const page = () => {
  return (
    <div className="bg-white h-full">
      <section
        className="wrapper bg-fixed bg-no-repeat bg-center-center bg-cover relative z-0 before:block before:absolute before:z-10 before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-b from-[rgba(30,34,40,0.3)] to-transparent"
        style={{ backgroundImage: `url('/bg16.png')` }}
      >
        <Navbar />
        <div className="text-center text-white mt-16 px-4">
    <p className="text-5xl font-semibold">
        We bring solutions <br /> to make life <span className="underline" style={{ textDecoration: 'underline', textDecorationColor: 'yellow' }}>easier</span>
    </p>
    <p className="text-xl mt-4">
        We are a creative company that focuses on long <br /> term relationships with customers.
    </p>
    <div className="flex justify-center items-center mt-8">
        <button className="bg-white text-black p-3 rounded-md m-1 text-sm flex mb-32">
            Read More   
        </button>
    </div>
</div>

        <div className="overflow-hidden">
          <div
            className="divider text-white mx-auto"
            style={{ maxWidth: "1440px" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <Services />
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#aab0bc] text-sm mt-8">WHY CHOOSE SANDBOX?</p>
        <p className="text-[2.1rem] mt-4 font-semibold">
          Here are a few <span className="underline" style={{ textDecoration: 'underline', textDecorationColor: 'yellow' }}>reasons</span> why our
          <br /> customers choose Sandbox.
        </p>
      </div>
      <Tabs />;
      <DataAnalysisSection />
      <StatsSection />
      <TestimonialSection />
      <p className="text-sm text-center uppercase text-[#aab0bc] mt-8 md:mt-24">
  Latest Projects
</p>
<p className="text-4xl mt-2 md:mt-4 text-center">
  Check out some of our awesome projects <br />
  with <span className="underline" style={{ textDecoration: 'underline', textDecorationColor: 'yellow' }}>creative</span> ideas and great
  design.
</p>

     <Cards/>
      <Solutions />
      <Footer />
    </div>
  );
};

export default page;
