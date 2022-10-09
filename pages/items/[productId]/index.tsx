import { useRouter } from 'next/router';
import React from 'react';
import Template from "components/template/Template";
import Breadcrumbs from 'components/UI/molecules/Breadcrumbs';
import Main from 'components/UI/organisms/Main';
import ProductInformation from 'components/UI/organisms/ProductInformation';
import useProductDetail from './hooks/useProductDetail';
import SquareLoader from 'components/UI/atoms/SquareLoader';

interface QueryInterface {
    productId?: string;
}



const ProductDetail = () => {
    const router = useRouter();
    const { productId }: QueryInterface = router.query;
    const { loading, data } = useProductDetail(productId);

    return (
        <Main>
            {loading && <SquareLoader />}
            {!loading && <Template header={(<Breadcrumbs categories={data.categories} />)}>
                <ProductInformation product={data.product} onClick={(productId) => alert(productId)} />
            </Template>}
        </Main>
    );

};



export default ProductDetail;