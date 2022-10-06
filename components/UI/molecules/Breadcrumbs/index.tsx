import React from "react";
import styles from "./styles.module.scss";

interface BreadcrumbsInterface {
    categories?: string[]
}

const Breadcrumbs = ({ categories = [] }: BreadcrumbsInterface) => {

    return (
        <ul className={styles.wrapperBreadcrumbs}>
            {categories.map((category) => (<li key={category}>{category}</li>))}
        </ul>);

}

export default Breadcrumbs;