import { useState } from "react";
import createProductAdapter, { ProductDetailInterface } from "adapters/fetch.product.detail.adapter";
import useLoadFetch from "hooks/useLoadFetch";
import { fetchProductDetail } from "services/public-service";
import { useAsync } from "hooks/useAsync";

const useProductDetail = (productId) => {

    const { loading, callEndpoint } = useLoadFetch();
    const [productDetailEntity, setProductDetailEntity] = useState<ProductDetailInterface>({});
    const getProductDetail = async () => await callEndpoint(fetchProductDetail(productId));

    const adapterResult = (data: any) => {
        const detailEntity = createProductAdapter(data);
        console.log(detailEntity);
        setProductDetailEntity({ ...detailEntity, /*categories*/ });
    }
    useAsync(() => {
        if (!productId) {
            return;
        }
        return getProductDetail()
    }, adapterResult, () => { }, [productId]);
    return {
        loading,
        data: productDetailEntity,
    }
}

export default useProductDetail;



