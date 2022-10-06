import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar';

interface HomeInterface {
    searchValue?: string;
    children?: React.ReactNode;
}

const Main = ({
    searchValue = '',
    children,
}: HomeInterface) => {
    const [valueToSearch, setValueToSearch] = useState(searchValue);
    const route = useRouter();

    useEffect(() => {
        if (!searchValue) {
            return;
        }
        setValueToSearch(searchValue);
    }, [searchValue]);

    const onSubmit = () => {
        if (searchValue == valueToSearch) {
            return;
        }
        route.push(`/items?search=${valueToSearch}`);
    }


    return (
        <>
            <main>
                <SearchBar
                    value={valueToSearch}
                    onSubmit={onSubmit}
                    onChange={setValueToSearch}
                />
                {children}
            </main>
        </>
    );
}

export default Main;