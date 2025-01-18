// const express = require('express');
// const router = express.Router();
// const productController = require('../controllers/productController');

// router.get('/', productController.getAllProducts);
// router.post('/', productController.createProduct);

// module.exports = router;


// const express = require('express');
// const { getFlashSaleProducts, addProduct } = require('../controllers/productController');

// const router = express.Router();

// router.get('/flash-sale', getFlashSaleProducts);
// router.post('/products', addProduct);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/productController');

// Middleware for admin protection (to be implemented)
// const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProducts)
  .post(createProduct); // add protect, admin middleware later

router.route('/:id')
  .get(getProductById)
  .put(updateProduct) // add protect, admin middleware later
  .delete(deleteProduct); // add protect, admin middleware later

module.exports = router;