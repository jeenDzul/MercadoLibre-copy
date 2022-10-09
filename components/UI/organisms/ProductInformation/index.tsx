/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ProductDetailEntity from "../../../../models/entity/product.detail.entity.model";
import Button from "../../atoms/Button";
import styles from './styles.module.scss';

interface ProductInformationInterface {
    product?: ProductDetailEntity,
    onClick?: (productId?: string) => void,
}

const ProductInformation = ({ product, onClick }: ProductInformationInterface) => {
    return (
        <div data-testid="product-detail">
            <div className={styles.containerDescription}>
                <div className={styles.containerImg}>
                    <img src={product?.picture} />
                </div>
                <div>
                    <span className={styles.labelInformation}>{`${product?.condition} - ${product?.soldQuantity} sold`}</span>
                    <h2 className={styles.labelProduct}>{product?.title}</h2>
                    <span className={styles.labelPrice}>
                        {`$ ${product?.priceAmount}`}
                        <span className={styles.labelPriceMin}>{
                            product?.priceDecimals ? product?.priceDecimals : '00'
                        }</span>
                    </span>
                    <div className={styles.containerButton}>
                        <Button onClick={() => onClick(product?.id)}>Comprar</Button>
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