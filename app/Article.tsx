import React from 'react'
import LiveTimeStamp from './LiveTimeStamp';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};



function Article({ article }: Props) {

  var  description = article.description;
  description = description.replaceAll("#"," ");

  article.description = description;
  console.log(description);

  return(



  <article className='bg-slate-100 
  dark:bg-slate-800 flex flex-col 
  rounded-lg shadow-lg hover:scale-105 
  hover:shadow-xl hover:bg-slate-200 
  transition-all duration-200 ease-out'> 
    
    {article.image && (
      
      <img src={article.image}
      alt={article.image}
      className="h-56 w-full object-cover shadow-md rounded-t-lg"></img>
    )}

    <div className='flex-1 flex flex-col'>
        <div className='flex-1 flex flex-col p-5'>
            <h2 className='font-serif font-bold'>{article.title}</h2>
            <section className='flex-1 mt-2'>
            <p className=' line-clamp-3'>
                {description}
            </p>

            </section>
        
            <footer className='text-xs text-right ml-auto 
            flex space-x-1 pt-5 italic text-gray-400'>
                <p>{article.source}</p>
                <p> <LiveTimeStamp time={article.published_at}></LiveTimeStamp></p>
                
            </footer>        
        
        
        </div>

        {/* Read More Button */}

       <ReadMoreButton article={article}></ReadMoreButton> 

    </div>

  </article>
  );
}

export default Article