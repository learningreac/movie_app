import React, { useState } from 'react';
import {PageHeader, Input, Button } from 'antd';
import {useMovie} from '../MovieProvider';

const SearchInputBox = ( ) => {
    const [searchText, setText] = useState(null);
    const{ setSearchText } = useMovie();

    const submit = e => {
        e.preventDefault();
        setSearchText(searchText);
    };

    return (
        <div className='ant-page' >
            <PageHeader title="Movie Database" />
            <div className='ant-page-body'>
                <ul className='action'>
                    <li className='action-item'>
                        <Input 
                            style={{width:500}}
                            size='large'
                            placeholder='Movie Name'
                            value={searchText}
                            onChange = {e => setText(e.target.value)}
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