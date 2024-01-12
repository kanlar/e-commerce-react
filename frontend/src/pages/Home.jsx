import Blog from "../components/Blog/Blog";
import Brand from "../components/Brands/Brand";
import Campaings from "../components/Campaings/Campaings";
import CampaingsSingle from "../components/CampaingsSingle/CampaingsSingle";
import Categories from "../components/Category/Categories";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <Product />
      <Campaings />
      <Product />
      <Blog />
      <Brand />
      <CampaingsSingle />
    </>
  );
}

export default Home;
