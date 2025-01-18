// const mongoose = require('mongoose');

// const wishlistSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   products: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product'
//   }]
// });

// const Wishlist = mongoose.model('Wishlist', wishlistSchema);
// module.exports = Wishlist;


const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'User'
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'Product'  // References your existing Product model
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);