const categories = {
  "Gaming Controllers": [
    "Wireless Controllers",
    "Wired Controllers",
    "Racing Wheels",
    "Flight Sticks",
    "Fight Sticks",
    "Nintendo Controllers",
    "Xbox Controllers",
    "PlayStation Controllers",
  ],
  Keyboards: [
    "Mechanical Keyboards",
    "Membrane Keyboards",
    "Wireless Keyboards",
    "Gaming Keyboards",
    "Ergonomic Keyboards",
    "Mini Keyboards",
    "Keyboard Accessories",
  ],
  "Mice & Pointing": [
    "Gaming Mice",
    "Wireless Mice",
    "Ergonomic Mice",
    "Trackballs",
    "Vertical Mice",
    "Mouse Bundles",
    "Precision Mice",
  ],
  "Monitors & Displays": [
    "Gaming Monitors",
    "Ultra-wide Monitors",
    "4K Monitors",
    "Curved Monitors",
    "Portable Monitors",
    "Professional Monitors",
    "Monitor Arms",
    "Monitor Accessories",
  ],
  "Audio Equipment": [
    "Gaming Headsets",
    "Wireless Headphones",
    "Earbuds",
    "Speakers",
    "Microphones",
    "Sound Cards",
    "Audio Interfaces",
    "DACs & Amplifiers",
  ],
  "Gaming Furniture": [
    "Gaming Chairs",
    "Gaming Desks",
    "Monitor Stands",
    "Cable Management",
    "Desk Mats",
    "Footrests",
    "Storage Solutions",
    "RGB Lighting",
  ],
  "PC Components": [
    "Graphics Cards",
    "Processors",
    "Motherboards",
    "RAM",
    "Storage Drives",
    "Power Supplies",
    "PC Cases",
    "Cooling Systems",
  ],
  Networking: [
    "Gaming Routers",
    "Network Cards",
    "WiFi Adapters",
    "Network Cables",
    "Switches",
    "Powerline Adapters",
    "Network Tools",
  ],
  "Streaming Equipment": [
    "Capture Cards",
    "Stream Decks",
    "Webcams",
    "Green Screens",
    "Studio Lighting",
    "Stream Controllers",
    "Recording Equipment",
  ],
  "Gaming Accessories": [
    "Mouse Pads",
    "Wrist Rests",
    "Controller Skins",
    "Gaming Glasses",
    "Console Stands",
    "Carrying Cases",
    "Screen Protectors",
  ],
  "Virtual Reality": [
    "VR Headsets",
    "VR Controllers",
    "Base Stations",
    "VR Accessories",
    "VR Cables",
    "VR Face Covers",
    "VR Storage",
  ],
  "Console Gaming": [
    "PlayStation",
    "Xbox",
    "Nintendo",
    "Retro Gaming",
    "Console Accessories",
    "Digital Cards",
    "Gaming Subscriptions",
  ],
  "Mobile Gaming": [
    "Phone Controllers",
    "Tablet Controllers",
    "Mobile Cooling",
    "Power Banks",
    "Gaming Phones",
    "Mobile Accessories",
    "Bluetooth Adapters",
  ],
  "Software & Services": [
    "Gaming Software",
    "Antivirus",
    "Game Keys",
    "Gift Cards",
    "Design Software",
    "Productivity Apps",
    "Cloud Storage",
  ],
};

// Expanded product data
const products = [
  {
    id: 1,
    name: "Pro Gaming Controller",
    price: 59.99,
    discountPercentage: 15,
    rating: 4.5,
    category: "Gaming Controllers",
    subCategory: "Wireless Controllers",
    image: gamepad,
  },
  // ... Add more products matching new categories ...
  {
    id: 2,
    name: "RGB Mechanical Keyboard",
    price: 149.99,
    discountPercentage: 20,
    rating: 4.8,
    category: "Keyboards",
    subCategory: "Mechanical Keyboards",
    image: keyboard,
  },
  {
    id: 3,
    name: '32" Curved Gaming Monitor',
    price: 399.99,
    discountPercentage: 10,
    rating: 4.7,
    category: "Monitors & Displays",
    subCategory: "Curved Monitors",
    image: monitor,
  },
  {
    id: 4,
    name: "RTX 4070 Graphics Card",
    price: 599.99,
    discountPercentage: 5,
    rating: 4.9,
    category: "PC Components",
    subCategory: "Graphics Cards",
    image: graphiccard,
  },
  {
    id: 5,
    name: "Streaming Microphone Kit",
    price: 199.99,
    discountPercentage: 15,
    rating: 4.6,
    category: "Streaming Equipment",
    subCategory: "Recording Equipment",
    image: microphone,
  },
  {
    id: 6,
    name: "VR Headset Pro",
    price: 499.99,
    discountPercentage: 12,
    rating: 4.8,
    category: "Virtual Reality",
    subCategory: "VR Headsets",
    image: vrheadset,
  },
  {
    id: 7,
    name: "Gaming Router AX6000",
    price: 299.99,
    discountPercentage: 8,
    rating: 4.5,
    category: "Networking",
    subCategory: "Gaming Routers",
    image: gamingrouter,
  },
  {
    id: 8,
    name: "Mobile Gaming Controller",
    price: 79.99,
    discountPercentage: 25,
    rating: 4.4,
    category: "Mobile Gaming",
    subCategory: "Phone Controllers",
    image: gamingcontroller,
  },
  {
    id: 9,
    name: "Gaming Chair Deluxe",
    price: 299.99,
    discountPercentage: 18,
    rating: 4.7,
    category: "Gaming Furniture",
    subCategory: "Gaming Chairs",
    image: gamingchair,
  },
  {
    id: 10,
    name: "Wireless Gaming Headset",
    price: 159.99,
    discountPercentage: 20,
    rating: 4.6,
    category: "Audio Equipment",
    subCategory: "Gaming Headsets",
    image: gamingset,
  },
  {
    id: 11,
    name: "Capture Card 4K60",
    price: 249.99,
    discountPercentage: 15,
    rating: 4.8,
    category: "Streaming Equipment",
    subCategory: "Capture Cards",
    image: capturecard,
  },
  {
    id: 12,
    name: "RGB Mouse Pad XL",
    price: 29.99,
    discountPercentage: 10,
    rating: 4.5,
    category: "Gaming Accessories",
    subCategory: "Mouse Pads",
    image: mousepad,
  },
];
import noproductfound from "../../assets/Not found.mp4";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import mousepad from "../../assets/mousepad.webp";
import CropText from "../CropText/CropText";
import { Skeleton } from "antd";
import gamepad from "../../assets/gamepad.png";
import keyboard from "../../assets/keyboard.png";
import monitor from "../../assets/monitor.png";
import graphiccard from "../../assets/graphic card.webp";
import microphone from "../../assets/microphone.webp";
import vrheadset from "../../assets/vrheadset.webp";
import gamingrouter from "../../assets/gamingrouter.png";
import gamingcontroller from "../../assets/gamingcontroller.webp";
import gamingchair from "../../assets/gamingchair.webp";
import gamingset from "../../assets/gamingheadset.webp";
import capturecard from "../../assets/Capture Card 4K60.png";
const ProductCardSkeleton = () => (
  <div className="rounded-xl shadow-sm overflow-hidden">
    <div className="relative h-48 flex items-center justify-center p-4">
      <Skeleton.Image active className="!w-full !h-40 sm:!h-48 mb-4" />
    </div>
    <div className="p-5">
      <Skeleton
        active
        title={{ width: "60%" }}
        paragraph={{
          rows: 3,
          style: { marginTop: "16px" },
        }}
      />
      <Skeleton.Button
        active
        block
        style={{ marginTop: "16px", height: "40px" }}
      />
    </div>
  </div>
);
const ProductList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // All the existing handler functions remain the same
  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        const newCategories = prev.filter((c) => c !== category);
        setSelectedSubCategories((prev) =>
          prev.filter((sc) => !categories[category].includes(sc))
        );
        return newCategories;
      } else {
        return [...prev, category];
      }
    });
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prev) => {
      if (prev.includes(subCategory)) {
        return prev.filter((sc) => sc !== subCategory);
      } else {
        return [...prev, subCategory];
      }
    });
  };

 

  // Helper function to render star rating
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
          />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354V3.21z"
          />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    }

    return stars;
  };
  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      const filtered = products.filter((product) => {
        const matchesSearch =
          searchTerm === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.subCategory.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          (selectedCategories.length === 0 &&
            selectedSubCategories.length === 0) ||
          selectedCategories.includes(product.category) ||
          selectedSubCategories.includes(product.subCategory);

        return matchesSearch && matchesCategory;
      });

      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000); // Simulated 1-second loading time

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategories, selectedSubCategories]);
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="min-h-screen  banner">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Enhanced Category Filter Sidebar */}
            <div className="md:w-1/4 lg:w-1/4">
              <div className="rounded-xl shadow-sm p-6 sticky top-8">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div className="divide-y divide-gray-100">
                  {Object.entries(categories).map(
                    ([category, subCategories]) => (
                      <div key={category} className="py-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                              className="w-4 h-4 rounded accent-black"
                            />
                            <label
                              htmlFor={category}
                              className="font-medium cursor-pointer"
                            >
                              {category}
                            </label>
                          </div>
                          <button
                            onClick={() => toggleCategory(category)}
                            className="p-1  rounded-full transition-colors"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                expandedCategories.includes(category)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>
                        {expandedCategories.includes(category) && (
                          <div className="ml-7 mt-2 space-y-2">
                            {subCategories.map((subCategory) => (
                              <div
                                key={subCategory}
                                className="flex items-center"
                              >
                                <input
                                  type="checkbox"
                                  id={subCategory}
                                  checked={selectedSubCategories.includes(
                                    subCategory
                                  )}
                                  onChange={() =>
                                    handleSubCategoryChange(subCategory)
                                  }
                                  className="w-4 h-4 mr-3 rounded border-gray-300 focus:ring-black"
                                />
                                <label
                                  htmlFor={subCategory}
                                  className="text-sm cursor-pointer"
                                >
                                  {subCategory}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="md:w-3/4 lg:w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                  ? [...Array(9)].map((_, index) => (
                      <ProductCardSkeleton key={index} />
                    ))
                  : filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48 flex items-center justify-center p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <div className="text-sm mb-2">
                            <CropText
                              text={`${product.category} • ${product.subCategory}`}
                              length={30}
                            />
                          </div>
                          <h3 className="text-lg font-semibold mb-3">
                            {product.name}
                          </h3>
                          <div className="flex items-center mb-3">
                            <span className="text-2xl font-bold mr-2">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="text-gray-500 line-through text-sm mr-2">
                              $
                              {(
                                product.price /
                                (1 - product.discountPercentage / 100)
                              ).toFixed(2)}
                            </span>
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                              {product.discountPercentage}% off
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-yellow-400 mb-2">
                              {renderStarRating(product.rating)}
                              <span className="ml-2 text-sm font-medium text-gray-600">
                                {product.rating.toFixed(1)}
                              </span>
                            </div>
                          </div>
                          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
              </div>
              {!loading && filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-40 px-4 bg-gray-50 rounded-lg shadow-sm">
                    <video
                              src={noproductfound}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full max-w-md mx-auto"
                            />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
