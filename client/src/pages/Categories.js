import React from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  const categoryImages = [
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAhF45IrOCyXGAa49jHORnVj-6RhZM5HTcmrRPnybn-Gr2V4tYvCu8XUe0FAYTioZf1oPoj3Z8-BRnuN7tdIKVfA9iw_toO6UGNdHKm-4&usqp=CAE",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIK1frnwFqCTbgimi-2tip_SOI0wWdn8blww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H69U4s2eq51Ye-CZ9pwhh3kTlHYIzJEHnQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hAA2aW3CZDB89_pGbKEwnglqjgFrEXPXC1pRneXA_grB3SztYbBmluCm9h1r0T2Rg2U&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2CK-lL98uGRPELzoAxDHA_uA9KP5_7quyA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6s1ys-BwDSibEZZhTryEQ8reJGwDVFcQ8Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBhLYksv8jfTyAWkXhVnehFWlmZO9ba5pprp_BhfznY_Tc3jwwBam6q6LSXwLV9GWBwk&usqp=CAU",
    "https://i.pinimg.com/736x/d1/e5/14/d1e51469ac90e84667f8dee571c41556.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIAJU9yyN0Beq8iRmun1B0XEIf_OTm3d4Ww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuN0nSQ76E5SmsxTHnV82i6kPVBKCHaI-WuH_jH1M7GYoc7axI6GiuYbsEE49a-vFxm8&usqp=CAU",
  ];

  return (
    <Layout title={"All Categories"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          {categories.map((c, index) => (
            <div className="col-md-3 mt-5 mb-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="category-link">
                <div className="category-card">
                  <img
                    src={categoryImages[index]}
                    alt={c.name}
                    className="category-image"
                  />
                </div>
                <span className="category-name">{c.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
