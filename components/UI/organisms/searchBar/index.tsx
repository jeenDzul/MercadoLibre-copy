/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

interface SearchBarInterface {
    value?: string;
    onSubmit?: (value?: string) => void;
    onChange?: (value?: string) => void;
}
const SearchBar = ({ value, onSubmit, onChange }: SearchBarInterface) => {
    return (
        <div className={styles.header}>
            <div className={styles.containerInput}>
                <div className={styles.containerLogo}>
                    <Link href={'/'}>
                        <img
                            alt="Icono Mercado Libre"
                            title="Mercado Libre"
                            src="/assets/Logo_ML.png"
                            srcSet="
                            /assets/Logo_ML.png 500w,
                            /assets/Logo_ML@2x.png 100w,
                            "
                            width={56}
                            height="100%"
                        />
                    </Link>
                </div>
                <input
                    data-testid="input-search"
                    className={styles.input}
                    type="text"
                    value={value}
                    placeholder='Nunca dejes de buscar'
                    onChange={(e) => { onChange(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter' && onSubmit) {
                            onSubmit(value);
                        }
                    }}
                />
                <div data-testid="handle-search" className={styles.containerIcon} onClick={() => onSubmit(value)}>
                    <img
                        width={18}
                        height={18}
                        alt="search product"
                        title="search product"
                        src="/assets/ic_Search@2x.png"
                        srcSet="/assets/ic_Search.png 500w"
                    />
                </div>
            </div>
        </div>);
}

export default SearchBar;