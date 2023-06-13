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
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { FaRegHandshake } from "react-icons/fa";

const About = () => {
  const facebookUrl = "https://www.facebook.com/your-profile";
  const twitterUrl = "https://www.twitter.com/your-profile";
  const linkedinUrl = "https://www.linkedin.com/in/your-profile";
  const youtubeUrl = "https://www.youtube.com/";
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
        <div className="col-md-4">
          <button className="mores btn">
            <h1>
              <Link
                to="/home"
                style={{ color: "white", justifyContent: "center" }}
              >
                <FiArrowRight size="3em" />
                <span
                  className="btn-text"
                  style={{ fontWeight: "bold", margin: "0cm" }}
                >
                  Let's Join
                </span>
              </Link>
            </h1>
          </button>
        </div>
        <div className="col-md-10  ">
          <div className="d-flex flex-wrap flex-row ">
            {/* <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary1.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary3.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary3.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div> */}
            {/* <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary1.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary3.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary3.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div> */}
            {/* --------------bottle-------- */}
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/s.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/moon.webp"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/d.webp"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card">
                <img
                  src="/images/bottle.webp"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/clothe.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/food.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/img.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/t1.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card">
                <img
                  src="/images/b.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/pot.webp"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/camera.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
              <div className="card" style={{ width: "8cm", height: "8cm" }}>
                <img
                  src="/images/kitchen.jpeg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    height: "100cm",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>{" "}
            </div>
            {/* ----------------------------------------------- */}
            {/* <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary2.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary3.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary4.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <div className="card">
                <img
                  src="/images/ary1.jpg"
                  alt="Our Story"
                  className="card-img-top"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>*/}
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    {/* Welcome to our online store! At AryStore, we are passionate
                    about providing our customers with an exceptional shopping
                    experience. Our goal is to offer a wide range of
                    high-quality products that cater to your diverse needs, all
                    in one convenient place. We are here to make your life
                    easier and more efficient, delivering products to your
                    doorstep in the blink of an eye.Happy Shopping. */}
                    Welcome to Ary-store, the exclusive online platform designed
                    to revolutionize the way you experience shopping within our
                    college campus. We specialize in converting offline systems
                    into seamless online solutions, ensuring quick and efficient
                    deliveries right to your doorstep.Whether you need
                    textbooks, course materials, electronics, or any other
                    essential items, we bring them to you with unparalleled
                    speed and efficiency.
                    {/* Our website is your gateway to a convenient
                    and time-saving shopping experience. By harnessing the power
                    of technology, we have transformed traditional
                    brick-and-mortar processes into a digital realm accessible
                    exclusively within our college campus. Whether you need
                    textbooks, course materials, electronics, or any other
                    essential items, we bring them to you with unparalleled
                    speed and efficiency. */}
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    {/* we understand the importance of adapting traditional systems
                    to the digital era. Our platform serves as a bridge between
                    offline processes and the online world, making it easier
                    than ever to access the services and products you need right
                    from the comfort of your own home ,hostel , college
                    ,hospital , even anywhere in the campus . Happy shopping! */}
                    With our emphasis on swift deliveries, you can say goodbye
                    to long wait times. We understand the importance of
                    efficiency in a busy academic environment, and our dedicated
                    logistics team works tirelessly to ensure your orders are
                    processed and dispatched in the shortest possible time
                    frame. Trust us to deliver your purchases promptly, allowing
                    you to focus on your studies and campus life.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    {/* We take pride in our commitment to efficiency and speed.
                    With our streamlined processes and optimized logistics, we
                    ensure that your orders are fulfilled swiftly, enabling you
                    to receive your items in the shortest possible time frame.
                    Say goodbye to long wait times and hello to a seamless
                    shopping experience. */}
                    Our website provides an intuitive and user-friendly
                    interface, making it easy for you to navigate and explore
                    our vast product catalog. Browse through a diverse range of
                    items, read detailed descriptions, and benefit from valuable
                    customer reviews to make informed purchasing decisions. Our
                    support team is always ready to assist you, providing prompt
                    responses to any queries or concerns you may have.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <div className="card">
                  <p className="text-justify mt-2">
                    {/* Thank you for choosing ary-Store as your trusted partner in
                    online shopping and digital transformation. Together, let's
                    embrace the future of convenience. */}
                    Join our growing community of campus shoppers and embrace
                    the future of convenient and efficient shopping with
                    Ary-Store. We are here to make your life easier by
                    converting offline systems into online solutions, delivering
                    your desired products in record time.Thank you for choosing
                    ary-Store as your trusted partner in online shopping and
                    digital transformation. Together, let's embrace the future
                    of convenience.
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3 mt-5">
                <div className="card">
                  <p
                    className="about  text-justify mt-2"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    "Our mission is to bridge the gap between offline and
                    online, creating a campus community empowered by digital
                    convenience."
                    <BsLaptop size={"2rem"} color="black" />
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3 mt-5">
                <div className="card">
                  <p
                    className="about  text-justify mt-2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    "We bring the speed of online shopping right to your campus
                    doorstep". <TbTruckDelivery size={"2rem"} color="black" />
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3 mt-5">
                <div className="card">
                  <p
                    className="about text-justify mt-2"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {/* "We are committed to transforming your campus shopping
                    experience, one swift delivery at a time." */}
                    "Transforming campus shopping experience, one swift delivery
                    at a time." <RxLapTimer size={"2rem"} color="black" />
                  </p>
                </div>{" "}
              </div>
              <div className="col-md-3 mt-5 ">
                <div className="card">
                  <p
                    className="about text-justify mt-2"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    "From offline to online, we are your trusted partner in
                    digital transformation within our campus walls."
                    <FaRegHandshake size={"2rem"} color="black" />
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
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
            <footer className="">
              <div className="">
                <div className="footer-icons">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                  >
                    <FaFacebook size={38} />
                    <span
                      className="footer-icon-label"
                      style={{ fontWeight: "bold", color: "black" }}
                    >
                      Facebook
                    </span>
                  </a>
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    style={{ margin: "2cm", color: "#1DA1F2" }}
                  >
                    <FaTwitter size={38} />
                    <span
                      className="footer-icon-label"
                      style={{ fontWeight: "bold", color: "black" }}
                    ></span>
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                  >
                    <FaLinkedin size={38} />
                    <span
                      className="footer-icon-label"
                      style={{ fontWeight: "bold", color: "black" }}
                    ></span>
                  </a>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    style={{ margin: "2cm", color: "red" }}
                  >
                    <FaYoutube size={38} />
                    <span
                      className="footer-icon-label"
                      style={{ fontWeight: "bold", color: "black" }}
                    ></span>
                  </a>
                </div>
              </div>
            </footer>
            {/* <div className="row">
              <div className="col-md-2">
                <div className="card">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
              </div>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>{" "} */}
          </div>{" "}
        </div>{" "}
      </div>
    </Layout>
  );
};

export default About;
{
  /* <div className="col-md-10  ">
          <div className="d-flex flex-wrap flex-row ">
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="card m-3 " style={{ width: "18rem" }}>
              <img
                src="/images/ary2.jpg"
                alt="Our Story"
                className="card-img-top"
                style={{
                  maxHeight: "350px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>{" "}
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div
                className="d-flex flex-wrap flex-row justify-content-center align-items-center"
                style={{ height: "10cm" }}
              >
                <div className="img m-3">
                  <img
                    src="/images/ary2.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-3">
              <div
                className="d-flex flex-wrap flex-row justify-content-center align-items-center"
                style={{ height: "10cm" }}
              >
                <div className="img m-3">
                  <img
                    src="/images/ary1.jpg"
                    alt="Our Story"
                    style={{
                      maxHeight: "350px",
                      maxWidth: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div> */
}
{
  /* </div> */
}
