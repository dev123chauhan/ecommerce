import CategoryList from "./CategoryList";
import ProductSlider from "./ProductSlider";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row banner">
      <CategoryList />

      <ProductSlider />
    </div>
  );
};

export default Banner;

