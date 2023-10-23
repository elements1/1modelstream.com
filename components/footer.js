export default function Footer() {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className="w-full 2xl:max-w-screen-2xl m-auto">
        <div className="grid grid-cols-1">
          <div className="flex flex-col lg:flex-row m-4 sm:m-8 lg:m-[7vw] leading-normal">
            <div className="w-full lg:w-[21vw] mr-0 lg:mr-16">
              <img
                src="/assets/png/logo-dark.png"
                alt="logo"
                className="w-[60] lg:w-[12vw] h-auto"
              ></img>
              <p>
                We are passionate about empowering models and artists by
                providing them with a dedicated space to monetize their digital
                art through non-fungible tokens (NFTs). Our mission is to foster
                creativity, encourage innovation, and connect collectors with
                exceptional talent from around the world.
              </p>
            </div>

            <div className="flex-grow flex flex-col md:flex-row mt-0 md:mt-8">
              <div className="grow leading-8 my-8 md:my-0">
                <h1 className="text-2xl leading-10">Explore</h1>
                <p>Services</p>
                <p>Packages</p>
                <p>Telemedicine</p>
                <p>Community</p>
              </div>

              <div className="grow leading-8">
                <h1 className="text-2xl leading-10">About us</h1>
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
              </div>

              <div className="grow leading-8 my-8 md:my-0">
                <h1 className="text-2xl leading-10">Terms and Conditions</h1>
                <p>Privacy</p>
                <p>Safety</p>
                <p>Terms of use</p>
              </div>

              <div className="flex flex-row">
                <img
                  src="/assets/svg/footer-helper.svg"
                  alt="footer-helper"
                  className="w-[2rem] h-[2rem] mt-2"
                ></img>
                <div className="flex-grow flex flex-col ml-4">
                  <p>Help center</p>
                  <p>We are here</p>
                  <p>for you!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mx-4 mb-2 sm:mx-8 sm:mb-4 lg:mx-[6vw] lg:mb-[3vw]">
            <p className="flex-none">
              © 2021 model Stream. All rights reserved.
            </p>
            <p className="flex-none mx-0 lg:mx-8">Privacy policy</p>
            <p className="flex-grow">Terms & Conditions</p>
            <p className="flex-none">model Stream.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
