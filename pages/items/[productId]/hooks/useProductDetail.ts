import { useCallback, useEffect, useState } from "react";
import createProductAdapter, { ProductDetailInterface } from "../../../../adapters/fetch.product.detail.adapter";
import useLoadFetch from "../../../../hooks/useLoadFetch";
import { fetchProductDetail } from "../../../../services/public-service";

const useProductDetail = (productId) => {

    const { loading, callEndpoint } = useLoadFetch();
    const [productDetailEntity, setProductDetailEntity] = useState<ProductDetailInterface>({});

    const fetch = useCallback(async () => {
        const response = await callEndpoint(fetchProductDetail(productId));
        const detailEntity = createProductAdapter(response);
        setProductDetailEntity(detailEntity);
    }, [productId]);


    useEffect(() => {
        if (!productId) {
            return
        }
        fetch();
    }, [productId, fetch])

    return {
        loading,
        data: productDetailEntity,
    }

}

export default useProductDetail;



