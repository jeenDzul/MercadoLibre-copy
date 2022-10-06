/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ProductDetailEntity from "../../../../models/entity/product.detail.entity.model";
import Button from "../../atoms/Button";
import styles from './styles.module.scss';

interface ProductInformationInterface {
    product?: ProductDetailEntity
}

const ProductInformation = ({ product }: ProductInformationInterface) => {
    return (
        <div data-testid="product-detail">
            <div className={styles.containerDescription}>
                <div className={styles.containerImg}>
                    <img src={product?.image} />
                </div>
                <div>
                    <span className={styles.labelInformation}>{product?.soldQuantity}</span>
                    <h2 className={styles.labelProduct}>{product?.title}</h2>
                    <span className={styles.labelPrice}>
                        {`$ ${product?.amount}`}
                        <span className={styles.labelPriceMin}>{
                            product?.decimal ? product?.decimal : '00'
                        }</span>
                    </span>
                    <div className={styles.containerButton}>
                        <Button>Comprar</Button>
                    </div>
                </div>
            </div>
            <div className={styles.containerDescription}>
                <div>
                    <h2 className={styles.labelTitle}>Descriptión del producto</h2>
                    <article>
                        <p className={styles.productDescription}>{
                            product?.description
                        }</p>
                    </article>
                </div>
            </div>
        </div>
    );

}

export default ProductInformation;