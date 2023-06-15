import React from "react";
import "./Category.css";
const Category = () => {
  return (
    <div>
      <section className="categories" id="categories">
        <h1 className="heading">
          Products <span>Categories</span>
        </h1>
        <div className="box-container">
          <div className="row " style={{ gap: "1cm", width: "100%" }}>
            <div className="box" style={{ background: "white" }}>
              <img src="images/food7.webp" alt="" />
              <h3>vegetables</h3>
              <p>upto 45% off</p>
              <button type="button" className="btn">
                shop now
              </button>
            </div>

            <div className="box" style={{ background: "white" }}>
              <img src="images/camera.jpeg" alt="" />
              <h3>fresh fruits</h3>
              <p>upto 45% off</p>
              <button type="button" className="btn">
                shop now
              </button>
            </div>

            <div className="box" style={{ background: "white" }}>
              <img src="images/h.jpeg" alt="" />
              <h3>dairy products</h3>
              <p>upto 45% off</p>
              <button type="button" className="btn">
                shop now
              </button>
            </div>

            <div className="box" style={{ background: "white" }}>
              <img src="images/images.jpeg" alt="" />
              <h3>freshh meat</h3>
              <p>upto 45% off</p>
              <button type="button" className="btn">
                shop now
              </button>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default Category;
