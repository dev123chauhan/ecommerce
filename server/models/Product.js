const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  discount: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  category: { type: String },
  flashSale: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);


// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please add a product name'],
//     trim: true
//   },
//   image: {
//     type: String,
//     required: [true, 'Please add a product image']
//   },
//   discount: {
//     type: String,
//     default: '0%'
//   },
//   price: {
//     type: Number,
//     required: [true, 'Please add a product price'],
//     min: [0, 'Price cannot be negative']
//   },
//   originalPrice: {
//     type: Number,
//     required: [true, 'Please add an original price']
//   },
//   rating: {
//     type: Number,
//     min: 0,
//     max: 5,
//     default: 0
//   },
//   reviews: {
//     type: Number,
//     default: 0
//   },
//   category: {
//     type: String,
//     enum: ['Gaming', 'Electronics', 'Accessories'],
//     required: [true, 'Please specify a category']
//   },
//   stock: {
//     type: Number,
//     default: 0
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Product', ProductSchema);