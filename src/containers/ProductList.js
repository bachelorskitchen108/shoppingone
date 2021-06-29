import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    //Create a Fuction For Featching for the Products

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    };
    //Calling the FetchFunction inside the useEffect Hook
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("products : ", products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductList;
