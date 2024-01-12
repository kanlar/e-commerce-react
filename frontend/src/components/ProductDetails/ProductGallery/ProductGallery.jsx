import { useState } from "react";
import ProductThumb from "./ProductThumb/ProductThumb";
import ProductDatas from "../../../data.json";
import "./ProductGallery.css";

function ProductGallery() {
  const [activeImg, setActiveImg] = useState(ProductDatas[0].img.thumbs[0]);
  return (
    <>
      <div className="product-gallery">
        <div className="single-image-wrapper">
          <img src={`/${activeImg}`} id="single-image" alt="" />
        </div>
        <ol
          className="gallery-thumbs glide__slides"
          style={{
            transition: "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
            width: "294.6px",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          {ProductDatas[0].img.thumbs.map((itemImg, index) => (
            <ProductThumb
              itemImg={itemImg}
              key={index}
              setActiveImg={setActiveImg}
              activeImg={activeImg}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default ProductGallery;
