import laptop from "../../assets/laptop.png";
import monitor from "../../assets/monitor.png";
import gamepad from "../../assets/gamepad.png";
import keyboard from "../../assets/keyboard.png";
import { Eye, ShoppingCart } from 'lucide-react';

const ProductRecommendations = () => {
  const products = [
    {
      id: 1,
      name: 'ASUS FHD Gaming Laptop',
      image: laptop,
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 65,
      isNew: false
    },
    {
      id: 2,
      name: 'IPS LCD Gaming Monitor',
      image: monitor,
      price: 1160,
      rating: 5,
      reviews: 65,
      isNew: false
    },
    {
      id: 3,
      name: 'HAVIT HV-G92 Gamepad',
      image: gamepad,
      price: 560,
      rating: 5,
      reviews: 65,
      isNew: true
    },
    {
      id: 4,
      name: 'AK-900 Wired Keyboard',
      image: keyboard,
      price: 200,
      rating: 5,
      reviews: 65,
      isNew: false
    }
  ];

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="text-yellow-400">★</span>
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Just For You</h2>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">See All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-80 hover:opacity-100">
                <Eye className="w-5 h-5" />
              </button>
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                  -{product.discount}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                  NEW
                </span>
              )}
            </div>

            <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-gray-500">({product.reviews})</span>
            </div>

            <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;