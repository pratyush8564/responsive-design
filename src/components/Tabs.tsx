import Link from 'next/link';
import React from 'react';

const Tabs = () => {
  return (
    <div className=" py-12 container mx-auto mt-16  ">
      <ul className="flex justify-center items-center xl:flex-row lg:flex-row flex-col">
        {/* Tab 1 */}
        <li className="mb-5 xl:mb-0 lg:mb-0">
          <Link href="#tab2-1" passHref legacyBehavior >
            <a className="flex flex-row items-center p-4  hover:bg-gray-100 rounded-lg">
              <div className="w-14 h-14 mr-4 text-[#fab758]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255.98" className="w-full h-full">
                  <circle className="fill-primary" cx="58.67" cy="149.31" r="32"></circle>
                  <path className="fill-primary" d="M88 202.65H29.33A29.36 29.36 0 000 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16A29.36 29.36 0 0088 202.65z"></path>
                  <circle className="fill-primary" cx="197.33" cy="149.31" r="32"></circle>
                  <path className="fill-primary" d="M226.67 202.65H168A29.36 29.36 0 00138.67 232v16a8 8 0 008 8H248a8 8 0 008-8v-16a29.36 29.36 0 00-29.33-29.35z"></path>
                  <path className="fill-secondary" d="M149.76 108.48v7.68A11.9 11.9 0 01137.81 128h-19.63c-5.76 0-12-4.27-12-13.76v-5.76zM176 47.68a47.26 47.26 0 01-17.6 36.91 22.89 22.89 0 00-8.32 13.23H106a20 20 0 00-7.79-12.69A47.13 47.13 0 0180 46.73C80.53 21.34 101.76.33 127.25 0a47.34 47.34 0 0134.56 13.88A46.82 46.82 0 01176 47.68z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">Collect Ideas</h4>
                <p className="text-gray-600">Duis mollis commodo luctus cursus commodo tortor mauris.</p>
              </div>
            </a>
          </Link>
        </li>
        
        {/* Tab 2 */}
        <li className="mb-5 xl:mb-0 lg:mb-0">
          <Link href="#tab2-2" passHref legacyBehavior>
            <a className="flex flex-row items-center p-4  hover:bg-gray-100 rounded-lg">
              <div className="w-14 h-14 mr-4 text-[#45c4a0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
                  <path className="fill-primary" d="M123.22 148.5A8 8 0 00116 144H19.36a8 8 0 00-8 8c0 57.34 46.94 104 104.66 104a104.67 104.67 0 0045.45-10.29 8 8 0 003.76-10.71z"></path>
                  <path className="fill-secondary" d="M152 19a8 8 0 00-8 8v95.39a7.93 7.93 0 00.8 3.49l41.73 85.95a8 8 0 0010.65 3.73c36.29-17.48 58.82-53.19 58.82-93.19C256 65.36 209.34 19 152 19z"></path>
                  <path className="fill-primary" d="M112 104V8a8 8 0 00-8-8A104.13 104.13 0 000 104a8 8 0 008 8h96a8 8 0 008-8z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">Data Analysis</h4>
                <p className="text-gray-600">Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
              </div>
            </a>
          </Link>
        </li>
        
        {/* Tab 3 */}
        <li className="mb-5 xl:mb-0 lg:mb-0">
          <Link href="#tab2-3" passHref legacyBehavior>
            <a className="flex flex-row items-center p-4  hover:bg-gray-100 rounded-lg">
              <div className="w-14 h-14 mr-4 text-[#e2626b]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full">
                  <path className="fill-secondary" d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"></path>
                  <path className="fill-primary" d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">Finalize Product</h4>
                <p className="text-gray-600">Vestibulum ligula porta felis maecenas faucibus mollis.</p>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
