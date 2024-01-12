import Reviews from "../reviews/reviews";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./ProductDetails.css";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductTabs from "./ProductTabs/ProductTabs";
function ProductDetails() {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <BreadCrumb />

            <div className="single-content">
              <main className="site-main">
                <ProductGallery />
                <ProductInfo />
              </main>
            </div>
            <ProductTabs />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
