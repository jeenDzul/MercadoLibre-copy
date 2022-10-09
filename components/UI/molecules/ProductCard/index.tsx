/* eslint-disable @next/next/no-img-element */
import ProductEntityProps from "models/entity/product.entity.model";
import React from "react";
import styles from "./styles.module.scss";

interface ProductCardInterface {
  product?: ProductEntityProps,
  onClick?: () => void;
}

const ProductCard = ({
  product,
  onClick,
}: ProductCardInterface) => {
  return (
    <div data-testid="card" className={styles.cardContainer} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="product image"
          title={product.title}
          src={product.picture}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.priceContainer}>
          <span>$ </span>
          <span>{`${product.priceAmount}${product?.priceDecimals != null ? `.${product.priceDecimals}` : ''}`}</span>
          {product.freeShipping && (
            <span className={styles.iconContainer}>
              {product.freeShipping && (
                <img
                  alt="shipping"
                  title="shipping"
                  src="/assets/ic_shipping.png"
                  srcSet="
                    /assets/ic_shipping@2x.png 500w
                  "
                  width={20}
                  height="100%"
                />
              )}
            </span>
          )}
        </div>
        <h2>{product.title}</h2>
      </div>
      <div className={styles.aside}>
        <span>{product.cityName}</span>
      </div>
    </div>
  );
};

export default ProductCard;
