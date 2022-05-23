const products = require('./product.model');

module.exports = {
    Query: {
        products: () => {
            console.log('product resolver');
            return products.getAllProducts();
        },
        productsByRange : (_,args) => {
            console.log('product by range resolver');
            return products.getByRange(args.min,args.max);
        },
        productById : (_,args) => {
            console.log('product by id resolver');
            return products.getById(args.id);
        }

    },
    Mutation:{
        addNewProduct: (_,args) => {
            console.log('mutation add new product');
            return products.addNewProduct(args.id,args.description,args.price,args.reviews)

        },
        addReviewToProduct: (_,args) => {
            console.log('add new review to product');
            return products.addNewReviewToProduct(args.productId,args.rating,args.comment)
        }
    }
}