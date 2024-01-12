import BrandItem from "./BrandItem/BrandItem";
import "./Brand.css";

function Brand() {
  return (
    <>
      <section className="brands">
        <div className="container">
          <ul className="brand-list">
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Brand;
