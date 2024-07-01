import Link from 'next/link';

const DataAnalysisSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Image Section */}
      <div className="xl:w-6/12 lg:w-6/12 w-full px-4 xl:px-10 lg:px-6 mt-10 md:mt-0 order-2 flex justify-center">
        <figure className="rounded-lg shadow-lg">
          <img className="rounded-lg" src="/se6.jpg" alt="image" />
        </figure>
      </div>
      
      {/* Content Section */}
      <div className="xl:w-6/12 lg:w-6/12 w-full px-4 xl:px-10 lg:px-6 mt-10 md:mt-0 order-1 text-center lg:text-left">
        <h2 className="mb-3 text-xl font-semibold">Data Analysis</h2>
        <p className="mb-4">Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.</p>
        <ul className="pl-0 list-none">
          <li className="relative pl-6 mt-2">
            <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem]"></i>
            Aenean eu leo quam. Pellentesque ornare.
          </li>
          <li className="relative pl-6 mt-2">
            <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-normal text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem]"></i>
            Nullam quis risus eget urna mollis ornare.
          </li>
          <li className="relative pl-6 mt-2">
            <i className="uil uil-check absolute left-0 w-4 h-4  text-[0.8rem] leading-none tracking-normal text-center flex items-center justify-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem]"></i>
            Donec id elit non mi porta gravida at eget.
          </li>
        </ul>
        <div className="text-center lg:text-left mt-8">
          <Link href="#" passHref legacyBehavior>
            <button className="p-2 rounded-md text-sm text-white bg-[#a07cc5] border-[#a07cc5]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisSection;
