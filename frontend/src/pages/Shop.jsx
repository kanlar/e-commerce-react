import CampaingsSingle from "../components/CampaingsSingle/CampaingsSingle";
import Categories from "../components/Category/Categories";
import Product from "../components/Product/Product";

function Shop() {
  return (
    <>
      <Categories />
      <Product />
      <CampaingsSingle />
      <Product />
    </>
  );
}

export default Shop;
