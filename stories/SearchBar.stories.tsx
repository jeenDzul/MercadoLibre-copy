import React from 'react';
import SearchBar from '../components/UI/organisms/SearchBar';

export default {
    title: 'Components/Organisms/SearchBar',
    component: SearchBar,
    argTypes: { onClick: { action: 'clicked' } },
};
export const SearchBarView = (args) => (
    <div >
        <SearchBar />
    </div>
);





