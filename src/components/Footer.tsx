import React from "react";

const Footer = () => {
    return (
      <footer className="bg-white mt-32 flex justify-center">
        <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="relative bg-full bg-cover bg-center bg-no-repeat bg-scroll bg-opacity-30 mb-18" style={{ backgroundImage: "url('bg16.png')" }}>
            <div className="card-body p-10 xl:p-14">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xs leading-snug uppercase text-white mb-3 mt-4">Join Our Community</h2>
                <h3 className="text-4xl leading-tight font-semibold mb-8 xl:px-8 lg:px-8 text-white">
                  We are <span className="relative after:absolute after:z-[-1] after:block after:bg-bottom after:bg-no-repeat after:w-full after:h-[0.3em] after:-translate-x-2/4 after:left-2/4 yellow">trusted</span> by over 5000+ clients.<br/> Join them now and grow your business.
                </h3>
                <a href="#" className="bg-white p-2 mb-8 rounded">Get Started</a>
              </div>
            </div>
          </div>
  
          <div className="flex flex-wrap mt-16">
            <div className="w-full md:w-4/12 xl:w-3/12 px-3 mb-12 md:mb-0">
              <div className="widget text-center">
                <img src="/logo-dark.png" srcSet="./assets/img/logo-dark@2x.png 2x" alt="logo" className="mb-4 mx-auto" />
                <p className="mb-4 text-[#60697b] hover:text-[#60697b]">&copy; 2024 Sandbox. <br className="hidden xl:block lg:block text-[#60697b] hover:text-[#60697b]" />All rights reserved.</p>
                <nav className="nav social flex justify-center">
                  <a href="#" className="text-[#5daed5] hover:text-[#5daed5] text-lg mx-2"><i className="uil uil-twitter"></i></a>
                  <a href="#" className="text-[#4470cf] hover:text-[#4470cf] text-lg mx-2"><i className="uil uil-facebook-f"></i></a>
                  <a href="#" className="text-[#e94d88] hover:text-[#e94d88] text-lg mx-2"><i className="uil uil-dribbble"></i></a>
                  <a href="#" className="text-[#d53581] hover:text-[#d53581] text-lg mx-2"><i className="uil uil-instagram"></i></a>
                  <a href="#" className="text-[#c8312b] hover:text-[#c8312b] text-lg mx-2"><i className="uil uil-youtube"></i></a>
                </nav>
              </div>
            </div>
  
            <div className="w-full md:w-4/12 xl:w-3/12 px-3 mb-12 md:mb-0">
              <div className="widget text-center">
                <h4 className="mb-3 text-lg leading-[1.45]">Get in Touch</h4>
                <address className="block mb-4 not-italic leading-normal text-[#60697b] hover:text-[#605dba]">Moonshine St. 14/05 Light City, London, United Kingdom</address>
                <a href="mailto:first.last@email.com" className="text-[#60697b] hover:text-[#60697b]">info@email.com</a><br /><span className="text-[#60697b] hover:text-[#60697b]">00 (123) 456 78 90</span>
              </div>
            </div>
  
            <div className="w-full md:w-4/12 xl:w-3/12 px-3 mb-12 md:mb-0">
              <div className="widget text-center">
                <h4 className="mb-3 text-lg leading-[1.45]">Learn More</h4>
                <ul className="pl-0 list-none mb-0">
                  <li><a href="#" className="text-[#60697b] hover:text-[#605dba]">About Us</a></li>
                  <li className="mt-1"><a href="#" className="text-[#60697b] hover:text-[#605dba]">Our Story</a></li>
                  <li className="mt-1"><a href="#" className="text-[#60697b] hover:text-[#605dba]">Projects</a></li>
                  <li className="mt-1"><a href="#" className="text-[#60697b] hover:text-[#605dba]">Terms of Use</a></li>
                  <li className="mt-1"><a href="#" className="text-[#60697b] hover:text-[#605dba]">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
  
            <div className="w-full md:w-4/12 xl:w-3/12 px-3 mb-12 md:mb-0">
              <div className="widget text-center">
                <h4 className="mb-3 text-lg leading-[1.45]">Our Newsletter</h4>
                <p className="mb-5 text-[#60697b] hover:text-[#605dba]">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>
                <div id="mc_embed_signup2" className="flex justify-center">
  <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden dark-fields">
    <div id="mc_embed_signup_scroll2" className="w-full px-4 py-3 flex items-center">
      <input
        type="email"
        name="EMAIL"
        id="mce-EMAIL2"
        placeholder="Email Address"
        className="required form-input block w-full px-3 py-2 text-sm text-[#60697b] placeholder-[#959ca9] bg-[#fefefe] border border-[rgba(8,60,130,0.07)] rounded-[0.4rem] focus:outline-none focus:ring-2 focus:ring-[#a07cc5] focus:border-transparent"
      />
      <input
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe2"
        value="Join"
        className="btn btn-violet text-white bg-[#a07cc5] border-[#a07cc5] hover:bg-[#8e63b5] focus:ring-2 focus:ring-[#a07cc5] focus:ring-opacity-50 active:bg-[#6f4a85] disabled:bg-[#a07cc5] disabled:cursor-not-allowed disabled:hover:bg-[#a07cc5] px-4 py-2 text-sm font-medium rounded-md"
      />
    </div>
    <div id="mce-responses2" className="mt-2 px-4">
      <div id="mce-error-response2" className="response hidden"></div>
      <div id="mce-success-response2" className="response hidden"></div>
    </div>
    <div className="sr-only">
      <input
        type="text"
        name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
        value=""
        aria-hidden="true"
      />
    </div>
  </form>
</div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  