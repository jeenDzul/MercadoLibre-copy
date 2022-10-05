/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

interface ProductCardInterface {
  title?: string;
  amount?: string;
  decimal?: string;
  currency?: string;
  picture?: string;
  cityName?: string;
  freeShipping?: boolean;
  onClick?: () => void;
}

const ProductCard = ({
  title,
  amount,
  decimal,
  currency,
  picture,
  cityName,
  freeShipping,
  onClick,
}: ProductCardInterface) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="product image"
          title={title}
          src={picture}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.priceContainer}>
          <span>$ </span>
          <span>{`${amount}${decimal ? `.${decimal}` : ''}`}</span>
          {freeShipping && (
            <span className={styles.iconContainer}>
              {freeShipping && (
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
        <h2>{title}</h2>
      </div>
      <div className={styles.aside}>
        <span>{cityName}</span>
      </div>
    </div>
  );
};

export default ProductCard;
