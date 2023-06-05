// import React from "react";
// import Layout from "../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const About = () => {
//   return (
//     <Layout title={"About us - Ary Store"}>
//       <div className="row contactus mt-5">
//         <div className="col-md-6 mt-5">
//           <Carousel
//             autoPlay
//             infiniteLoop
//             interval={2000}
//             style={{ backgroundImage: "100%" }}
//           >
//             <div>
//               <img
//                 src="/images/ary1.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//                 style={{ backgroundSize: "cover" }}
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary2.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary3.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary4.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary5.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary6.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary7.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//             <div>
//               <img
//                 src="/images/ary8.jpg"
//                 alt="carousel-img"
//                 className="carousel-image"
//               />
//             </div>
//           </Carousel>
//         </div>
//         <div className="col-md-8">
//           <p className="text-justify mt-2">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//             officiis obcaecati esse tempore unde ratione, eveniet mollitia,
//             perferendis eius temporibus dicta blanditiis doloremque explicabo
//             quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
//             accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
//             commodi illum quidem neque tempora nam.
//           </p>
//           <div className="col-md-12">
//             <h1
//               className="bod bg p-2 "
//               style={{
//                 textAlign: "center",
//                 backgroundColor: "rgb(95, 93, 91)",
//                 color: "rgb(254, 186, 48)",
//               }}
//             >
//               CONTACT US
//             </h1>
//             <p className="text-justify mt-2">
//               Any queries or information about our products, feel free to call
//               anytime. We are available 24/7.
//             </p>
//             <p className="mt-3">
//               <BiMailSend className="contact-icon" /> : www.help@arystore.com
//             </p>
//             <p className="mt-3">
//               <BiPhoneCall className="contact-icon" /> : 012-3456789
//             </p>
//             <p className="mt-3">
//               <BiSupport className="contact-icon" /> : 1800-0000-0000 (toll
//               free)
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default About;
import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  return (
    <Layout title={"About us - Ary Store"}>
      <div className="row contactus mt-5 about-background">
        <div className="col-md-12">
          <div className="slider">
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
          </div>
        </div>
        <div className="">
          <div className="col-md-12">
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
            <h1
              className="bod p-2"
              style={{
                textAlign: "center",
                backgroundColor: "rgb(95, 93, 91)",
                color: "rgb(254, 186, 48)",
              }}
            >
              CONTACT US
            </h1>
            <p className="text-center mt-2">
              Any queries or information about our products, feel free to call
              anytime. We are available 24/7.
            </p>
            <div className="text-center">
              <p className="mt-3">
                <BiMailSend className="contact-icon" /> : www.help@arystore.com
              </p>
              <p className="call mt-3">
                <BiPhoneCall className="contact-icon" /> : 012-3456789
              </p>
              <p className="mt-3">
                <BiSupport className="contact-icon" /> : 1800-0000-0000 (toll
                free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
