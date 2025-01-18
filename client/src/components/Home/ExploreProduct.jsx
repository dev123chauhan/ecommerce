import  { useState, useEffect } from 'react';
import { Skeleton, Card } from 'antd';
import PropTypes from "prop-types";
import {
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
} from "lucide-react";
import { exploreProducts } from '../../Products';
const ProductCardSkeleton = () => (
  <Card
    className="rounded-lg shadow-md overflow-hidden"
    cover={
      <Skeleton.Image 
        active 
        style={{ 
          width: '100%', 
          height: '192px',  // Matches h-48 in original
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }} 
      />
    }
  >
    <Skeleton 
      active 
      title={{ width: '60%' }} 
      paragraph={{ 
        rows: 2, 
        style: { marginTop: '16px' } 
      }} 
    />
  </Card>
);

const ProductCard = ({ product, loading = false }) => {
  if (loading) {
    return <ProductCardSkeleton />;
  }

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        <div className="absolute top-2 right-2 space-y-2">
          <button className="p-1.5 rounded-full shadow-md">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-full shadow-md">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-red-500 font-bold mr-2">${product.price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < product.rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500 text-xs ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        Add To Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    addToCart: PropTypes.bool,
    isNew: PropTypes.bool,
    colors: PropTypes.arrayOf(PropTypes.string),
  }),
  loading: PropTypes.bool
};

const ExploreProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState([]);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(exploreProducts.length / itemsPerPage);

  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    const timer = setTimeout(() => {
      const indexOfLastProduct = currentPage * itemsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
      const productsToShow = exploreProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      setCurrentProducts(productsToShow);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // Change page
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="mb-4 sm:mb-0">
          <div className="bg-red-500 text-white py-1 px-3 rounded-full inline-block text-sm mb-2">
            Our Products
          </div>
          <h2 className="text-2xl font-bold">Explore Our Products</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded-full transition-colors duration-200 ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={goToPrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className={`p-2 rounded-full transition-colors duration-200 ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? [...Array(itemsPerPage)].map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
          : currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default ExploreProduct;