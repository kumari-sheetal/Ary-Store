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
import "../components/About.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
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
        <div className="col-md-2">
          <button className="more btn">
            <h1>
              <Link
                to="/home"
                style={{ color: "white", justifyContent: "center" }}
              >
                <FiArrowRight size="3em" />
                <span
                  className="btn-text"
                  // style={{ fontSize: "80px" }}
                >
                  Let's Join
                </span>
              </Link>
            </h1>
          </button>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="box " style={{ height: "10cm", width: "11.5cm" }}>
                <div className="img">
                  <img
                    src="/images/ary2.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "550px",
                      minWidth: "400px",
                      minHeight: "350px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="box  "
                style={{ height: "10cm", width: "11.5cm" }}
              >
                <div className="img">
                  <img
                    src="/images/ary1.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "550px",
                      minWidth: "400px",
                      minHeight: "350px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="box  "
                style={{ height: "10cm", width: "11.5cm" }}
              >
                <div className="img">
                  <img
                    src="/images/ary4.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "550px",
                      minWidth: "400px",
                      minHeight: "350px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div
                className="box  "
                style={{ height: "10cm", width: "11.5cm" }}
              >
                <div className="img">
                  <img
                    src="/images/ary5.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "550px",
                      minWidth: "400px",
                      minHeight: "350px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card">
                      <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus officiis obcaecati esse tempore unde ratione,
                        eveniet mollitia, perferendis eius temporibus dicta
                        blanditiis doloremque explicabo quasi sunt vero optio
                        cum aperiam vel consectetur! Laborum enim accusantium
                        atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-3">
                    <div className="card">
                      <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus officiis obcaecati esse tempore unde ratione,
                        eveniet mollitia, perferendis eius temporibus dicta
                        blanditiis doloremque explicabo quasi sunt vero optio
                        cum aperiam vel consectetur! Laborum enim accusantium
                        atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-3">
                    <div className="card">
                      <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus officiis obcaecati esse tempore unde ratione,
                        eveniet mollitia, perferendis eius temporibus dicta
                        blanditiis doloremque explicabo quasi sunt vero optio
                        cum aperiam vel consectetur! Laborum enim accusantium
                        atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-3">
                    <div className="card">
                      <p className="text-justify mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus officiis obcaecati esse tempore unde ratione,
                        eveniet mollitia, perferendis eius temporibus dicta
                        blanditiis doloremque explicabo quasi sunt vero optio
                        cum aperiam vel consectetur! Laborum enim accusantium
                        atque, excepturi sapiente amet! Tenetur ducimus aut
                        commodi illum quidem neque tempora nam.
                      </p>
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
            {/* <div className="col-md-2">
              <div
                className="box  "
                style={{ height: "10cm", width: "11.5cm" }}
              >
                <div className="img">
                  <img
                    src="/images/ary7.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "550px",
                      minWidth: "400px",
                      minHeight: "350px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <img
                  src="/images/ary1.jpg"
                  alt="Second Card"
                  style={{ width: "100%", height: "10cm" }}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card  " style={{ height: "10cm", width: "11.5cm" }}>
              <div className="card">
                <img
                  src="/images/ary4.jpg"
                  alt="Our Story"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "550px",
                    minWidth: "400px",
                    minHeight: "350px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ height: "10cm", width: "11.5cm" }}>
              <div className="card">
                <img
                  src="/images/ary6.jpg"
                  alt="Our Story"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "550px",
                    minWidth: "400px",
                    minHeight: "350px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ height: "10cm", width: "11.5cm" }}>
              <div className="card">
                <img
                  src="/images/ary3.jpg"
                  alt="Our Story"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "550px",
                    minWidth: "400px",
                    minHeight: "350px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ height: "10cm", width: "11.5cm" }}>
              <div className="card">
                <img
                  src="/images/ary6.jpg"
                  alt="Our Story"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "550px",
                    minWidth: "400px",
                    minHeight: "350px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officiis obcaecati esse tempore unde ratione,
                    eveniet mollitia, perferendis eius temporibus dicta
                    blanditiis doloremque explicabo quasi sunt vero optio cum
                    aperiam vel consectetur! Laborum enim accusantium atque,
                    excepturi sapiente amet! Tenetur ducimus aut commodi illum
                    quidem neque tempora nam.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officiis obcaecati esse tempore unde ratione,
                    eveniet mollitia, perferendis eius temporibus dicta
                    blanditiis doloremque explicabo quasi sunt vero optio cum
                    aperiam vel consectetur! Laborum enim accusantium atque,
                    excepturi sapiente amet! Tenetur ducimus aut commodi illum
                    quidem neque tempora nam.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officiis obcaecati esse tempore unde ratione,
                    eveniet mollitia, perferendis eius temporibus dicta
                    blanditiis doloremque explicabo quasi sunt vero optio cum
                    aperiam vel consectetur! Laborum enim accusantium atque,
                    excepturi sapiente amet! Tenetur ducimus aut commodi illum
                    quidem neque tempora nam.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officiis obcaecati esse tempore unde ratione,
                    eveniet mollitia, perferendis eius temporibus dicta
                    blanditiis doloremque explicabo quasi sunt vero optio cum
                    aperiam vel consectetur! Laborum enim accusantium atque,
                    excepturi sapiente amet! Tenetur ducimus aut commodi illum
                    quidem neque tempora nam.
                  </p>
                </div>{" "}
              </div>
            </div>
            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
            <h1
              className="bod p-2 mt-5"
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
