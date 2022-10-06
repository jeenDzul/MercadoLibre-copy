import ProductIProps from 'models/entity/product.entity.model';
import React from 'react';
import ProductCard from '../ProductCard';
import styles from './styles.module.scss';

interface ListElementsInterface {
    products?: ProductIProps[],
    onClick?: (id?: string) => void,
}

const ListElements = ({ products = [], onClick }: ListElementsInterface) => {

    return (<div className={styles.listResults}>{products.map((product) => (
        <ProductCard key={product.id}
            onClick={() => onClick(product.id)}
            title={product.title}
            amount={`${product.amount}`}
            decimal={`${product.decimal}`}
            currency={product.currency}
            picture={product.image}
            cityName={product.cityName}
            freeShipping={product.freeShipping}
        />
    ))}</div>);


}

export default ListElements;