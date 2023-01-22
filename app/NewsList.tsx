import React from 'react';
import Article from './Article';

type Props = {
     
    news : NewsResponse
}

function NewsList({news}: Props) {
  return (
 
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1 space-y-1'>

    {news.data.map((article) => (

      <Article key={article.title} article={article}></Article>

    ))}    
          
    </main>
  );
}

export default NewsList;
