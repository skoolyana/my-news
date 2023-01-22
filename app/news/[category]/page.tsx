import React from 'react'
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../../NewsList';
import response from '../../../responseEntertainment.json'
import { categories } from '../../../constants';



type Props = {
    params: {category:Category};
}


async function NewsCategoryPage({params: {category}} : Props) {

     //  fetch the news data



  const news:NewsResponse =  response || await fetchNews("entertainment");
    


  return (
    <div>
    <h1  className='headerTitle'> 
    
   {category}
    
    </h1>
  <NewsList news={news}></NewsList>
</div>
  )
}

export default NewsCategoryPage

export async function generateStaticParams() {
    return categories.map(category => (
        {
            category: category
        }
    ))
}

