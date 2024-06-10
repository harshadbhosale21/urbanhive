import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
},
    { timestamps: true }
);

const Products = mongoose.model('Products', ProductSchema);
export default Products;