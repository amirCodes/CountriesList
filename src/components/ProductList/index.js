import { connect } from 'react-redux';
import ProductList from './ProductList';
import { fetchProducts } from "../../actions/productActions";

const mapStateToProps = (state) => {
    return{
        products: state.productReducer.products || [],
        loading: state.productReducer.loading,
        error: state.productReducer.error
    }
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);

