const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    price: {
      type: Number,
      required: [true, '{PATH} is required.'],
      min:[1,"at least 1 dollar!"],
    },
    description: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
      },
  },
  { timestamps: true } // createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Product = mongoose.model('Product', ProductSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Product: Product };