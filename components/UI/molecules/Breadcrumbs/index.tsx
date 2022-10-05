import React from "react";
import styles from "./styles.module.scss";

const Breadcrumbs = ({ categories = [] }) => {

    return (
        <ul className={styles.wrapperBreadcrumbs}>
            {categories.map((category) => (<li key={category}>{category}</li>))}
        </ul>);

}

export default Breadcrumbs;