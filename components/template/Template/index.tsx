import React from "react";
import styles from "./styles.module.scss";

const Template = ({ header, children }) => {
    return (<div className={styles.container}>
        {header && (<div className={styles.containerHeader}>{header}</div>)}
        <div className={styles.group}>
            {children}
        </div>
    </div>);
}

export default Template;