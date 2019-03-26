
export const productService = () => {
    const getProduct = () => {
        return fetch(`https://ecomm-db.herokuapp.com/products`)
    };

    return{
        getProduct: getProduct,
    };
};