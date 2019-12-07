import React from 'react';
import '../search-box/search.style.css'

export const SearchBox = ({placeholder,handleChange}) =>( 
    <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />
);