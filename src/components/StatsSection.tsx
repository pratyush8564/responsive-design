import React from 'react';

const StatsSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-16 bg-[rgba(246,247,249,1)] pt-16 pb-16'>
      {/* Left Column */}
      <div className='md:w-1/2 w-full px-4 md:px-0'>
        <p className='text-sm text-[#aab0bc] uppercase text-center md:text-left md:ml-8'>Save Time and Money</p>
        <p className='text-3xl font-semibold text-[calc(1.335rem + 1.02vw)] mt-4 leading-tight text-center md:text-left md:ml-8'>
          Save your time and money by<br/>
          choosing our <span className='underline'>professional</span><br/>
          team.
        </p>
      </div>
      {/* Right Column */}
      <div className='flex flex-col md:flex-row items-center justify-center mt-8 md:mt-0 md:w-1/2'>
        {/* Progress Bar 1 */}
        <div className='flex flex-col items-center md:items-start w-full md:w-auto px-4 mb-8 md:mb-0'>
        <div className='text-center'>
         <svg viewBox="0 0 100 50"><path d="M 50,50 m -47,0 a 47,47 0 1 1 94,0" stroke="#eee" stroke-width="6" fill-opacity="0"></path><path d="M 50,50 m -47,0 a 47,47 0 1 1 94,0" stroke="#555" stroke-width="6" fill-opacity="0" style={{ strokeDasharray: '147.708, 147.708', strokeDashoffset: '7.3854' }}></path></svg>
         <p className='fw-bold font-semibold text-4xl relative bottom-9'>95%</p>
          <h4 className='mb-0 text-center md:text-left relative bottom-5'>Customer Satisfaction</h4>
          </div>
        </div>
        {/* Progress Bar 2 */}
        <div className='flex flex-col items-center md:items-start w-full md:w-auto px-4'>
            <div className='text-center'>
        <svg viewBox="0 0 100 50" ><path d="M 50,50 m -47,0 a 47,47 0 1 1 94,0" stroke="#eee" stroke-width="6" fill-opacity="0"></path><path d="M 50,50 m -47,0 a 47,47 0 1 1 94,0" stroke="#555" stroke-width="6" fill-opacity="0" style={{strokeDasharray: '147.708, 147.708', strokeDashoffset: '29.5416'}}></path></svg>
        <p className='fw-bold font-semibold text-4xl relative bottom-9'>80%</p>
          <h4 className='mb-0 text-center md:text-left relative bottom-4'>Increased Revenue</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;


