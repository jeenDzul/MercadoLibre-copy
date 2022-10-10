import ProductEntityProps from 'models/entity/product.entity.model';
import React from 'react';
import ProductCard from '../ProductCard';
import styles from './styles.module.scss';

interface ListElementsInterface {
    products?: ProductEntityProps[],
    onClick?: (id?: string) => void,
}
const ListElements = ({ products = [], onClick }: ListElementsInterface) => {
    return (<div className={styles.listResults}>{products.map((product) => (
        <ProductCard key={product.id}
            onClick={() => onClick(product.id)}
            product={product}
        />
    ))}</div>);
}

export default ListElements;