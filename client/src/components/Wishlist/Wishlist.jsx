// import PropTypes from 'prop-types';
// import { ShoppingCart, Trash2 } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '../../slice/WishlistSlice';
// import { allProducts } from '../../Products';
// import laptop from "../../assets/laptop.png"
// import monitor from "../../assets/monitor.png"

// const ProductCard = ({ product, isWishlist, onRemove }) => (
//   <div className="rounded-lg shadow-md overflow-hidden">
//     <div className="relative">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
//       {product.discount && (
//         <span className="absolute top-2 left-2 bg-red-500 text-white  px-2 py-1 text-xs font-bold rounded">
//           {product.discount}
//         </span>
//       )}
//       {isWishlist && (
//         <button
//           className="absolute top-2 right-2 p-1  rounded-full shadow-md"
//           onClick={() => onRemove(product.id)}
//         >
//           <Trash2 className="w-4 h-4" />
//         </button>
//       )}
//     </div>
//     <div className="p-4">
//       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-red-500 font-bold">${product.price}</span>
//         {product.originalPrice && (
//           <span className="text-gray-500 line-through">${product.originalPrice}</span>
//         )}
//       </div>
//       <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors">
//         <ShoppingCart className="w-4 h-4 mr-2" />
//         Add To Cart
//       </button>
//     </div>
//   </div>
// );

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     originalPrice: PropTypes.number,
//     discount: PropTypes.string,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   isWishlist: PropTypes.bool.isRequired,
//   onRemove: PropTypes.func,
// };

// const ProductGrid = ({ title, products, isWishlist, onRemoveItem }) => (
//   <div className="mb-8">
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="text-2xl font-bold">{title} ({products.length})</h2>
//       {isWishlist && products.length > 0 && (
//         <button className="px-4 py-2  border border-black rounded-md">
//           Move All To Bag
//         </button>
//       )}
//     </div>
//     {isWishlist && products.length === 0 ? (
//       <div className="text-center py-8 text-gray-500">
//         No items in wishlist. Add items from Flash Sale!
//       </div>
//     ) : (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             isWishlist={isWishlist}
//             onRemove={onRemoveItem}
//           />
//         ))}
//       </div>
//     )}
//   </div>
// );

// ProductGrid.propTypes = {
//   title: PropTypes.string.isRequired,
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       originalPrice: PropTypes.number,
//       discount: PropTypes.string,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   isWishlist: PropTypes.bool.isRequired,
//   onRemoveItem: PropTypes.func,
// };

// const Wishlist = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.wishlist.favorites);

//   // Get all products from FlashSale

//   // Filter products that are in favorites
//   const wishlistProducts = allProducts.filter(product => favorites[product.id]);

//   const recommendedProducts = [
//     {
//       id: 5,
//       name: "ASUS FHD Gaming Laptop",
//       price: 960,
//       originalPrice: 1160,
//       discount: "-35%",
//       image: monitor, // Use appropriate image
//     },
//     {
//       id: 6,
//       name: "IPS LCD Gaming Monitor",
//       price: 1160,
//       image: laptop,
//     },
//     // ... other recommended products
//   ];

//   const handleRemoveFromWishlist = (productId) => {
//     dispatch(toggleFavorite(productId));
//   };

//   return (

//     <div className='dark:bg-gray-900 dark:text-white duration-300 transition-colors'>
//     <div className="container mx-auto px-4 py-8 mt-10 max-w-7xl sm:px-6 lg:px-0">
//       <ProductGrid
//         title="Wishlist"
//         products={wishlistProducts}
//         isWishlist={true}
//         onRemoveItem={handleRemoveFromWishlist}
//       />
//       <ProductGrid
//         title="Just For You"
//         products={recommendedProducts}
//         isWishlist={false}
//       />
//     </div>
//     </div>
//   );
// };

// export default Wishlist;

// import { X } from "lucide-react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchWishlist, removeFromWishlist } from "../../slice/WishlistSlice";
// import { toast } from "sonner";
// import EmptyCartItem from "../Cart/EmptyCartItem";
// const Wishlist = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { items, loading } = useSelector((state) => state.wishlist);

//   useEffect(() => {
//     if (user?.id) {
//       dispatch(fetchWishlist(user.id));
//     }
//   }, [dispatch, user]);

//   const handleRemove = async (productId) => {
//     try {
//       await dispatch(removeFromWishlist({
//         userId: user.id,
//         productId
//       })).unwrap();
//       toast.success('Removed from wishlist');
//     } catch (error) {
//       toast.error('Failed to remove item',error);
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="max-w-7xl mx-auto p-4 mt-20">
//       <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
//       {items.length === 0 ? (
//         <div className="text-center py-8" colSpan="4">
//           {/* <p className="text-gray-500">Your wishlist is empty</p> */}
//           <EmptyCartItem />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {items.map((item) => {
//             const product = item.productId; // Product details are now in productId due to population
//             return (
//               <div key={product._id} className="relative bg-white rounded-lg shadow-lg p-4">
//                 <button
//                   onClick={() => handleRemove(product._id)}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X size={20} className="text-gray-500" />
//                 </button>

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-contain mb-4"
//                 />

//                 <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
//                   {product.discount}
//                 </span>

//                 <h3 className="font-semibold mb-2">{product.name}</h3>

//                 <div className="flex items-center mb-2">
//                   <span className="text-red-500 font-bold mr-2">
//                     ${product.price}
//                   </span>
//                   <span className="line-through text-sm">
//                     ${product.originalPrice}
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="flex text-yellow-400">
//                     {Array(5).fill(0).map((_, index) => (
//                       <span
//                         key={index}
//                         className={index < product.rating ? "fill-current" : "stroke-current"}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <span className="ml-2 text-sm">
//                     ({product.reviews})
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;

import React from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist, removeFromWishlist } from "../../slice/WishlistSlice";
import { toast } from "sonner";
import wishlistGif from "../../assets/Wishlist.mp4";
import ProductRecommendations from "./RecommendedProduct";
import { LoaderforData } from "../../utils/Loader";
// import { Ring } from "react-awesome-spinners";
// import Loader from '../../utils/Loader';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, loading } = useSelector((state) => state.wishlist);

  React.useEffect(() => {
    if (user?.id) {
      dispatch(fetchWishlist(user.id));
    }
  }, [dispatch, user]);

  const handleRemove = async (productId) => {
    try {
      await dispatch(
        removeFromWishlist({
          userId: user.id,
          productId,
        })
      ).unwrap();
      toast.success("Removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove item", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoaderforData />
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-1 mt-20">
          <h2 className="text-2xl font-bold">Wishlist</h2>
          <span className="inline-flex items-center justify-center text-2xl font-bold">
           ({items.length})
          </span>
        </div>
        {items.length > 0 && (
          <button className="px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded-lg transition-colors">
            Move All To Bag
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="">
          <video
            src={wishlistGif}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md mx-auto"
          />
          <h1 className="text-center font-bold text-xl">No Product in Wishlist</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => {
            const product = item.productId;
            return (
              <div
                key={product._id}
                className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-transform hover:scale-[1.02]"
              >
                <button
                  onClick={() => handleRemove(product._id)}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <Trash2
                    size={20}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </button>

                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {product.discount}
                  </span>
                </div>

                <h3 className="font-semibold mb-2 line-clamp-2 dark:text-white">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <span className="text-red-500 dark:text-red-400 font-bold mr-2">
                    ${product.price}
                  </span>
                  <span className="line-through text-sm text-gray-500 dark:text-gray-400">
                    ${product.originalPrice}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span
                          key={index}
                          className={
                            index < product.rating
                              ? "fill-current"
                              : "stroke-current"
                          }
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    ({product.reviews})
                  </span>
                </div>
                <button
                      className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                      
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add To Cart
                    </button>
              </div>
            );
          })}
        </div>
      )}
      <ProductRecommendations />
    </div>
    </div>
  );
};

export default Wishlist;
