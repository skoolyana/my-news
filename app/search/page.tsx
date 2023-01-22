import React from 'react'
import fetchNews from '../../lib/fetchNews';
import NewsList from '../NewsList';
import { categories } from '../../constants'; 
import response from '../../responseSearch.json'


type Props = {
    searchParams?: {term:string};
  };
  

async function SearchPage({searchParams}:Props) {
  
    //const news : NewsResponse = await fetchNews("general",searchParams?.term,true);
  
    const news : NewsResponse = response || await fetchNews(categories.join(","));
  
  
    return (
    <div>
        <h1  className='headerTitle p-4'> 
        
        Search Results For: {searchParams?.term}
        
        </h1>
      <NewsList news={news}></NewsList>
    </div>
  )
}

export default SearchPage