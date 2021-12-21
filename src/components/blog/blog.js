import './blog.css';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import BlogContainer from '../blogContainer/blogContainer';

function Blog(){
    
    const {search}=useLocation();
    const query= new URLSearchParams(search);
    console.log(query.get('anime'));

    const [searchParams,setSearchParams] =useState('');
    
    const HandleSearchInput= (event)=>{          
        setSearchParams(event.target.value);
    } 


    return(

        <div className='main-screen'>
            
            <SearchBar
               HandleSearchInput={HandleSearchInput}
            />
            
            <BlogContainer/>

        </div>
    )
}

export default Blog;