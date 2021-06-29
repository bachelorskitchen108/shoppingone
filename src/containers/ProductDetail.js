import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts, removeSelectedProduct } from "../redux/actions/productActions";
import axios from "axios";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { image, title, category } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log("productId : ", productId);
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Error in ProductDeatil : ", err);
        });
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui palceholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={category} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
