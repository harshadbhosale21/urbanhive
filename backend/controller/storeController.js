import axios from "axios";
import Products from "../model/storeModel.js";


export const initialzeProducts = async (req, res) => {
    try {
        const url = 'https://fakestoreapi.com/products';
        const response = await axios.get(url);
        const data = response.data;

        await Products.deleteMany({});

        const productData = await Products.insertMany(data.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            description: item.description,
            image: item.image,
            rating: {
                rate: item.rating.rate,
                count: item.rating.count
            }
        })));

        res.status(200).json({
            message: "Successfully initialized Data",
            productData
        })


    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error initializing Data'
        })
    }
}

export const postProducts = async (req, res) => {
    try {

        const { title, price, category, description, image, rating: { rate, count } } = req.body;
        if (!title && !price && !category && !description && !image && !rating) {
            res.status(400).json({ message: 'No field should be empty' })
        }

        const product = new Products({
            title,
            price,
            category,
            description,
            image,
            rating: { rate, count }
        });

        await product.save();

        res.status(201).json({
            message: 'Successfully Posted Item',
            product
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error posting Data',
        })
    }
}

export const getProducts = async (req, res) => {
    try {

        const query = {};

        if (req.query.category) {
            query.category = req.query.category
        }

        if (req.query.minPrice && req.query.maxPrice) {
            query.price = {
                $gte: parseFloat(req.query.minPrice),
                $lte: parseFloat(req.query.maxPrice)
            }
        }

        const data = await Products.find(query);

        res.status(200).json({
            message: 'Successfully Fetched Products',
            data
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error Fetching Products",
        })
    }
}

export const getSingleProduct = async (req, res) => {
    try {

        const product = await Products.findById(req.params.id);

        if (!product) {
            res.status(400).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Successfully fetched product',
            product
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })

    }
}

export const getSpecificProducts = async (req, res) => {
    try {

        const { names } = req.query;
        const nameArray = names ? names.split(',') : [];

        let query = {};
        if (nameArray.length > 0) {
            query = { title: { $in: nameArray } };
        };

        const products = await Products.find(query);

        res.status(200).json({
            data: products
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })

    }
}