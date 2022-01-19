import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {setProducts} from "../redux/actions/product.actions"
import "../App.css"
import ProductComponent from './productComponent';
import axios from "axios";

function ProductsListing() {
    const products = useSelector(state => state);
    const dispach=useDispatch()
    const fetchProducts= async ()=>
    {
        const response= await axios.get("https://fakestoreapi.com/products").catch(err=>console.log(err));
        dispach(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return (
        <div className='ui grid container space'>
            <ProductComponent/>
        </div>
    )
}

export default ProductsListing
