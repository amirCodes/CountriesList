import { connect } from 'react-redux';
import ProductList from './ProductList';
import { fetchProducts } from "../../actions/productActions";

const mapStateToProps = (state) => {
    return{
        products: state.products.items || [],
        loading: state.products.loading,
        error: state.products.error
    }
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);

