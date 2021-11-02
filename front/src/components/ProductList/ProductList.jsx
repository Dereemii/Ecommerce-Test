import { useEffect } from "react";

//redux
import { fetchAllProducts } from '../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

//Styles

import './ProductList.css';

const ProductList = () => {

    //calling products slice
    const { list: products } = useSelector(state => state.products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <>
            <div className="productListContainer">
                {
                    products.map((product, index) => (
                        <div className="cardList" key={index}>
                            <div className="card">
                                <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
                                <div className="cardBody">
                                    <h5 className="cardBody_name">
                                        {product.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ProductList;