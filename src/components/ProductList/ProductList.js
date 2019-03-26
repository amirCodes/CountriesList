import React from "react";
class ProductList extends React.Component {


    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }

    render() {
        const { error, loading, products } = this.props;
        console.log(error,loading,products)
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        if(!products){
            return (
                <ul>
                    {products.map(product =>
                        <li key={product.id}>{product.name}</li>
                    )}
                </ul>
            );
        }
        else {
            return " no data"
        }
    }
}

export default ProductList;