import React, { useEffect, useState } from 'react';
import {PageHeader, Input, Button } from 'antd';

const SearchInputBox = ({onNewSearch}) => {
    const [searchText, setSearchText] = useState(null);

    const submit = e => {
        e.preventDefault();
        onNewSearch(searchText);
    };

    return (
        <div className='ant-page'>
            <PageHeader title="Movie Database" />
            <div className='ant-page-body'>
                <ul className='action'>
                    <li className='action-item'>
                        <Input 
                            style={{width:500}}
                            size='large'
                            placeholder='Movie Name'
                            value={searchText}
                            onChange = {e => setSearchText(e.target.value)}
                        /> 
                    </li>
                    <li className='action-item'>
                        <Button type='primary' size='large' onClick={submit} >
                            Search
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default SearchInputBox;