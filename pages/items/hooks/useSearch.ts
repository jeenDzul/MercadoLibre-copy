import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import createProductsAdapter from 'adapters/fetch.product.adapter';
import useLoadFetch from 'hooks/useLoadFetch';
import { createListProduct } from 'redux/states/products';
import { AppStoreInterface } from 'redux/store';
import { fetchProducts } from 'services/public-service';


const useSearch = (param) => {
    const { loading, callEndpoint } = useLoadFetch();
    const productsState = useSelector((store: AppStoreInterface) => store.products);
    const dispatch = useDispatch();

    const fetch = useCallback(async () => {
        const response = await callEndpoint(fetchProducts(param));
        dispatch(createListProduct(createProductsAdapter(response)));
    }, [param, dispatch]);


    useEffect(() => {
        if (!param) {
            return
        }
        fetch();
    }, [param, fetch])

    return {
        loading,
        data: productsState,
    }
}

export default useSearch