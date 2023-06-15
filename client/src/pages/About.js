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
import { useNavigate } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/new-page/Footer";
// import "./footer.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Autoplay } from "swiper";
import Reviews from "../components/new-page/Reviews";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Category from "../components/new-page/Category";
import Product from "../components/new-page/Product";
import Features from "../components/new-page/Features";
import Banner from "../components/new-page/Banner";
const About = () => {
  // const facebookUrl = "https://www.facebook.com/your-profile";
  // const twitterUrl = "https://www.twitter.com/your-profile";
  // const linkedinUrl = "https://www.linkedin.com/in/your-profile";
  // const youtubeUrl = "https://www.youtube.com/";
  // const navigate = useNavigate();
  SwiperCore.use([Autoplay]);
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
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Banner />
      <Features />
      <Product />
      <Category />
      <div className="">
        <Reviews />
      </div>
      <Footer />
    </Layout>
  );
};

export default About;

// import React from "react";
// import Layout from "../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../components/About.css";
// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
// import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { BsLaptop } from "react-icons/bs";
// import { TbTruckDelivery } from "react-icons/tb";
// import { RxLapTimer } from "react-icons/rx";
// import { FaRegHandshake } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { BiShoppingBag } from "react-icons/bi";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhone,
//   faShoppingBasket,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// // import "./footer.css";

// import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

// const About = () => {
//   const facebookUrl = "https://www.facebook.com/your-profile";
//   const twitterUrl = "https://www.twitter.com/your-profile";
//   const linkedinUrl = "https://www.linkedin.com/in/your-profile";
//   const youtubeUrl = "https://www.youtube.com/";
//   const navigate = useNavigate();
//   return (
//     <Layout title={"About us - Ary Store"}>
//       <div className="row contactus mt-5 about-background">
//         <div className="col-md-12">
//           <div className="slider">
//             <div className="slide"></div>
//             <div className="slide"></div>
//             <div className="slide"></div>
//             <div className="slide"></div>
//             <div className="slide"></div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <button className="mores btn">
//             <h1>
//               <Link
//                 to="/home"
//                 style={{ color: "white", justifyContent: "center" }}
//               >
//                 <FiArrowRight size="3em" />
//                 <span
//                   className="btn-text"
//                   style={{ fontWeight: "bold", margin: "0cm" }}
//                 >
//                   Let's Join
//                 </span>
//               </Link>
//             </h1>
//           </button>
//         </div>
//         <div className="col-md-10  ">
//           <div className="d-flex flex-wrap flex-row ">
//             {/* --------------bottle-------- */}
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/s.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/moon.webp"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/d.webp"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card">
//                 <img
//                   src="/images/bottle.webp"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/clothe.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/food.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "350px",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/img.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "350px",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/t1.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card">
//                 <img
//                   src="/images/b.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/pot.webp"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/camera.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             <div className="card m-3 " style={{ width: "8cm", height: "8cm" }}>
//               <div className="card" style={{ width: "8cm", height: "8cm" }}>
//                 <img
//                   src="/images/kitchen.jpeg"
//                   alt="Our Story"
//                   className="card-img-top"
//                   style={{
//                     height: "100cm",
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     borderRadius: "10px",
//                   }}
//                 />
//               </div>{" "}
//             </div>
//             {/* ----------------------------------------------- */}
//           </div>
//         </div>{" "}
//         <div className="row">
//           <div className="col-md-12 ">
//             <div className="row">
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p className="text-justify mt-2">
//                     Welcome to Ary-store, the exclusive online platform designed
//                     to revolutionize the way you experience shopping within our
//                     college campus. We specialize in converting offline systems
//                     into seamless online solutions, ensuring quick and efficient
//                     deliveries right to your doorstep.Whether you need
//                     textbooks, course materials, electronics, or any other
//                     essential items, we bring them to you with unparalleled
//                     speed and efficiency.
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p className="text-justify mt-2">
//                     With our emphasis on swift deliveries, you can say goodbye
//                     to long wait times. We understand the importance of
//                     efficiency in a busy academic environmimport Reviews from '../components/new-page/Reviews';

//                     logistics team works tirelessly to ensure your orders are
//                     processed and dispatched in the shortest possible time
//                     frame. Trust us to deliver your purchases promptly, allowing
//                     you to focus on your studies and campus life.
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p className="text-justify mt-2">
//                     Our website provides an intuitive and user-friendly
//                     interface, making it easy for you to navigate and explore
//                     our vast product catalog. Browse through a diverse range of
//                     items, read detailed descriptions, and benefit from valuable
//                     customer reviews to make informed purchasing decisions. Our
//                     support team is always ready to assist you, providing prompt
//                     responses to any queries or concerns you may have.
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p className="text-justify mt-2">
//                     Join our growing community of campus shoppers and embrace
//                     the future of convenient and efficient shopping with
//                     Ary-Store. We are here to make your life easier by
//                     converting offline systems into online solutions, delivering
//                     your desired products in record time.Thank you for choosing
//                     ary-Store as your trusted partner in online shopping and
//                     digital transformation. Together, let's embrace the future
//                     of convenience.
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p
//                     className="about  text-justify mt-2"
//                     style={{
//                       fontWeight: "bold",
//                     }}
//                   >
//                     "Our mission is to bridge the gap between offline and
//                     online, creating a campus community empowered by digital
//                     convenience."
//                     <BsLaptop size={"2rem"} color="black" />
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p
//                     className="about  text-justify mt-2"
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     "We bring the speed of online shopping right to your campus
//                     doorstep". <TbTruckDelivery size={"2rem"} color="black" />
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5">
//                 <div className="card">
//                   <p
//                     className="about text-justify mt-2"
//                     style={{
//                       fontWeight: "bold",
//                     }}
//                   >
//                     "Transforming campus shopping experience, one swift delivery
//                     at a time." <RxLapTimer size={"2rem"} color="black" />
//                   </p>
//                 </div>{" "}
//               </div>
//               <div className="col-md-3 mt-5 ">
//                 <div className="card">
//                   <p
//                     className="about text-justify mt-2"
//                     style={{
//                       fontWeight: "bold",
//                     }}
//                   >
//                     "From offline to online, we are your trusted partner in
//                     digital transformation within our campus walls."
//                     <FaRegHandshake size={"2rem"} color="black" />
//                   </p>
//                 </div>{" "}
//               </div>
//             </div>
//           </div>
//           <h1
//             className="bod p-2 mt-5"
//             style={{
//               textAlign: "center",
//               backgroundColor: "rgb(95, 93, 91)",
//               color: "rgb(254, 186, 48)",
//             }}
//           >
//             CONTACT US
//           </h1>
//           <p className="text-center mt-2">
//             Any queries or information about our products, feel free to call
//             anytime. We are available 24/7.
//           </p>
//           <div className="text-center">
//             <p className="mt-3">
//               <BiMailSend className="contact-icon" /> : www.help@arystore.com
//             </p>
//             <p className="call mt-3">
//               <BiPhoneCall className="contact-icon" /> : 012-3456789
//             </p>

//             <p className="mt-3">
//               <BiSupport className="contact-icon" /> : 1800-0000-0000 (toll
//               free)
//             </p>

//             <div className="footer-icons">
//               <a
//                 href={facebookUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer-icon"
//               >
//                 <FaFacebook size={38} />
//                 <span
//                   className="footer-icon-label"
//                   style={{ fontWeight: "bold", color: "black" }}
//                 ></span>
//               </a>

//               <a
//                 href={twitterUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer-icon"
//                 style={{ margin: "40px", color: "#1DA1F2" }}
//               >
//                 <FaTwitter size={38} />
//                 <span
//                   className="footer-icon-label"
//                   style={{ fontWeight: "bold", color: "black" }}
//                 ></span>
//               </a>
//               <a
//                 href={linkedinUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer-icon"
//               >
//                 <FaLinkedin size={38} />
//                 <span
//                   className="footer-icon-label"
//                   style={{ fontWeight: "bold", color: "black" }}
//                 ></span>
//               </a>
//               <a
//                 href={youtubeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer-icon"
//                 style={{ margin: "40px", color: "red" }}
//               >
//                 <FaYoutube size={38} />
//                 <span
//                   className="footer-icon-label"
//                   style={{ fontWeight: "bold", color: "black" }}
//                 ></span>
//               </a>
//             </div>
//             <section className="blogs" id="blogs">
//               <h1 className="heading">
//                 our <span>blogs</span>
//               </h1>
//               <div className="box-container">
//                 <div className="box">
//                   <img src="images/apple.jpeg" alt="" />
//                   <div className="content">
//                     <div className="icons">
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faUser} />
//                         </i>
//                         by user
//                       </a>
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faCalendar} />
//                         </i>
//                         1st May, 2021
//                       </a>
//                     </div>
//                     <h3>Fresh And Organic Vegetables And Fruits</h3>
//                     <p>
//                       Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
//                       Veniam, Expedita.
//                     </p>
//                     <a href="/" className="btn">
//                       read more
//                     </a>
//                   </div>
//                 </div>
//                 <div className="box">
//                   <img src="image/blog-2.jpg" alt="" />
//                   <div className="content">
//                     <div className="icons">
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faUser} />
//                         </i>
//                         by user
//                       </a>
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faCalendar} />
//                         </i>
//                         1st May, 2021
//                       </a>
//                     </div>
//                     <h3>Fresh And Organic Vegetables And Fruits</h3>
//                     <p>
//                       Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
//                       Veniam, Expedita.
//                     </p>
//                     <a href="/" className="btn">
//                       read more
//                     </a>
//                   </div>
//                 </div>
//                 <div className="box">
//                   <img src="image/blog-3.jpg" alt="" />
//                   <div className="content">
//                     <div className="icons">
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faUser} />
//                         </i>
//                         by user
//                       </a>
//                       <a href="/">
//                         <i>
//                           <FontAwesomeIcon icon={faCalendar} />
//                         </i>
//                         1st May, 2021
//                       </a>
//                     </div>
//                     <h3>Fresh And Organic Vegetables And Fruits</h3>
//                     <p>
//                       Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
//                       Veniam, Expedita.
//                     </p>
//                     <a href="/" className="btn">
//                       read more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>{" "}
//         </div>{" "}
//         <footer className="footer mt-5" id="footer">
//           <div className="box-container">
//             <div className="bod">
//               <FontAwesomeIcon icon={["fas", "faUser"]} />
//               <h3>
//                 <BiShoppingBag size={"3rem"} />
//                 <b>
//                   <span className="brand">Ary-</span>
//                   <span className="brandname">Store</span>
//                 </b>
//               </h3>
//               <p>
//                 Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
//                 Laudantium?
//               </p>
//               <div className="share">
//                 <a href="https://www.facebook.com/your-profile">
//                   <i>
//                     <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
//                   </i>
//                 </a>
//                 <a href="https://www.twitter.com/your-profile">
//                   <i>
//                     <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
//                   </i>
//                 </a>
//                 <a href="https://www.linkedin.com/in/your-profile">
//                   <i>
//                     <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
//                   </i>
//                 </a>
//                 <a href="https://www.youtube.com/">
//                   <i>
//                     <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
//                   </i>
//                 </a>
//               </div>
//             </div>
//             <div className="bod">
//               <h3>
//                 <b>
//                   <span className="brand">Contact</span>
//                   <span className="brandname">-Info</span>
//                 </b>
//               </h3>
//               <a href="/" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faPhone} />
//                 </i>
//                 +123 456 7890
//               </a>
//               <a href="/" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faPhone} />
//                 </i>
//                 +111 222 3333
//               </a>
//               <a href="/" className="links" id="emailLink">
//                 <i>
//                   <FontAwesomeIcon icon={faEnvelope} />
//                 </i>
//                 example@example.com
//               </a>
//               <a href="/" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faMapMarkerAlt} />
//                 </i>
//                 Pernambuco, Brazil
//               </a>
//             </div>
//             <div className="bod">
//               <h3>
//                 <b>
//                   <span className="brand">Quick</span>
//                   <span className="brandname">-Info</span>
//                 </b>
//               </h3>
//               <a href="#home" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Home
//               </a>
//               <a href="#features" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Features
//               </a>
//               <a href="#products" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Products
//               </a>
//               <a href="#categories" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Categories
//               </a>
//               <a href="#reviews" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Reviews
//               </a>
//               <a href="#blogs" className="links">
//                 <i>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </i>
//                 Blogs
//               </a>
//             </div>
//           </div>
//           <div className="credits">
//             <p>
//               Created By <span>Sheetal Rana</span> | All Rights Reserved
//             </p>
//           </div>
//         </footer>
//       </div>
//     </Layout>
//   );
// };

// export default About;
