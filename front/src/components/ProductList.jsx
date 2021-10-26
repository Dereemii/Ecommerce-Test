import { useEffect } from "react";

//redux
import { fetchAllProducts } from '../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {

    //calling products slice
    const { list: products } = useSelector(state => state.products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <>
            <div>
                {
                    products.map((product, index) => (
                        <div key={index}>
                            <div className="card">
                                <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
                                <div className="cardBody">
                                    <h5 className="cardBody_name">
                                        {product.name}
                                    </h5>
                                    <p className="cardBody_description">
                                        {product.description}
                                    </p>
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