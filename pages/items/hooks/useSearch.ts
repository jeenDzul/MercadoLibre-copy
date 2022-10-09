import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import createProductsAdapter from 'adapters/fetch.product.adapter';
import useLoadFetch from 'hooks/useLoadFetch';
import { createListProduct } from 'redux/states/products';
import { AppStoreInterface } from 'redux/store';
import { fetchProducts } from 'services/public-service';
import { useAsync } from 'hooks/useAsync';


const useSearch = (param) => {
    const { loading, callEndpoint } = useLoadFetch();
    const productsState = useSelector((store: AppStoreInterface) => store.products);
    const dispatch = useDispatch();

    const getProductsByParams = async () => await callEndpoint(fetchProducts(param));

    const adapterResultSearch = (data: any) => {
        dispatch(createListProduct(createProductsAdapter(data)));
    }

    useAsync(() => {
        if (!param) {
            return;
        }
        return getProductsByParams()
    }, adapterResultSearch, () => { }, [param]);

    return {
        loading,
        data: productsState,
    }
}

export default useSearch