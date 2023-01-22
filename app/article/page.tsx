import React from 'react'
import { notFound } from "next/navigation"
import LiveTimeStamp from '../LiveTimeStamp';



type Props = {
  searchParams?: Article;
};



function ArticlePage({ searchParams }: Props) {


  if (searchParams && Object.entries(searchParams).length === 0 || !searchParams) {
    return notFound();
  }


  const article: Article = searchParams;


  return (
    <article>

      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-0'>

        {
          article.image && (

            <img className='h-50 max-w-md mx-auto 
            md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'  src={article.image} alt={article.title}></img>
          )
        }
        <div className='px-10'>

        <h1 className='px-0 headerTitle no-underline pb-2'>      {article.title}  </h1>
      
           
        

        <div className='flex space-x-4 divide-x-2'>
        <h2 className='font-bold'>
          By: {article.author || "Unknown"} 
        </h2>
        <h2 className='font-bold pl-4'>
          Source: {article.source || "Unknown"}
        </h2>
        <p className='pl-4'>{
        
        
        <LiveTimeStamp time={article.published_at}></LiveTimeStamp>}
        
        </p>

        </div>



          <p className='pt-4'>{article.description}</p>
        </div>

      </section>

    </article>
  )
}

export default ArticlePage