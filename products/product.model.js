products = [
    {
        id: 'blackPant',
        description: 'Black Pant',
        price: 34.1,
        reviews: []
    },
    {
        id: 'bluePant',
        description: 'Blue Pant',
        price: 2.1,
        reviews: []

    },
    {
        id: 'brownPant',
        description: 'Brown Pant',
        price: 42.1,
        reviews: []

    }
]

exports.getAllProducts = function () {
    return products;
}

exports.getByRange = function (minVal, maxVal) {
    return products.filter((item) => item.price >= minVal && item.price <= maxVal);
}

exports.getById = function (id) {
    //  console.log(id);
    [product] = products.filter((item) => item.id === id);
    // console.log(product);
    return product;
}

exports.addNewProduct = function (id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []

    }
    // console.log(newProduct);

    products.push(newProduct)

    return newProduct;
}

exports.addNewReviewToProduct = function(productId,rating,comment){
    const newReview = {
        productId,
        rating,
        comment
    }
    // console.log(newReview);

    const product = products.find((item) => item.id === productId);
    if (product) {
        product.reviews.push(newReview);
        console.log(product);
    
        return newReview;      
    }
  
    

}