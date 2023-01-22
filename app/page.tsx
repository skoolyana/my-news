import React from 'react'
import { categories } from '../constants'; 
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import response from '../response.json'


async function Homepage() {

  //  fetch the news data

  const news:NewsResponse =  response || await fetchNews(categories.join(","));
 
  // set Timeout for 3 seconds

  //await new Promise ((resolve) => setTimeout(resolve,3000));
 
  return (
    <div>
      
      {/* NewsList News */}

      <NewsList  news={news}></NewsList>
      
      
      </div>
  )
}

export default Homepage