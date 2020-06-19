import React, { useState } from 'react';
import {Paper, TextField} from '@material-ui/core';


const SearchBar = (props) => {
    const [searchTerm ,setSearchTerm] = useState('');
    let handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    let handleSubmit = (e) => {
        console.log(searchTerm);
        const { onFormSubmit } = props;
        onFormSubmit(searchTerm);
        e.preventDefault();
    }
    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default SearchBar;
