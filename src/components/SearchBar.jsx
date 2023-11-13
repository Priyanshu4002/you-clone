import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper ,IconButton  } from '@mui/material';
import img1 from './search.png';

const SearchBar = () => {
    const [searchTerm,setSearchTerm]= useState('');
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return(
        <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            p1: 2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}>
        <input type='text' 
            className='search-bar' 
            value={searchTerm}  placeholder='search...' 
            onChange={(e) =>setSearchTerm(e.target.value)} />
        <IconButton type="submit" sx={{p:'10px' , color:"red"}}>
            <img src={img1} alt="" style={{width:'20px'}}/>
        </IconButton>
    </Paper>
    )
}
export default SearchBar
