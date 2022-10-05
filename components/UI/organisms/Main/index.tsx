import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar';

interface HomeInterface {
    searchvalue?: string;
    children?: React.ReactNode;
}

const Main = ({
    searchvalue = '',
    children,
}: HomeInterface) => {
    const [valueToSearch, setValueToSearch] = useState(searchvalue);
    const route = useRouter();

    useEffect(() => {
        if (!searchvalue) {
            return;
        }
        setValueToSearch(searchvalue);
    }, [searchvalue]);

    const onSubmit = () => {
        if (searchvalue == valueToSearch) {
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