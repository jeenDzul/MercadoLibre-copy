import React from 'react';
import Template from "components/template/Template";
import Breadcrumbs from 'components/UI/molecules/Breadcrumbs';
import Main from 'components/UI/organisms/Main';
import ProductInformation from 'components/UI/organisms/ProductInformation';
import { fetchProductDetail } from 'services/public-service';
import createProductAdapter from 'adapters/fetch.product.detail.adapter';
import Error from 'next/error';

const ProductDetail = ({ data, errorCode }) => {
    console.log(errorCode)

    if (errorCode) {
        return <Error statusCode={errorCode} />
    }
    return (
        <Main>
            <Template header={(<Breadcrumbs categories={data.categories} />)}>
                <ProductInformation product={data.product} onClick={(productId) => alert(productId)} />
            </Template>
        </Main>
    );
};

export async function getServerSideProps(context) {
    const data = await fetchProductDetail(context.query.productId).call.catch((e) => e.response);
    let productDetail;
    if (data) {
        productDetail = createProductAdapter(data);
    }
    return {
        props: {
            data: productDetail || null, errorCode: data.status === 200 ? false : data.status,
        },
    }
}

export default ProductDetail;