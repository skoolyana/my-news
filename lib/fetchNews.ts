import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";


const fetchNews = async  (

    category?: Category | string,
 
    keywords?: string,

    isDynamic?:boolean
) => 

{



    // GraphQL Query

    const query = gql `

    query MyQuery (

        $access_key: String!, 
        $categories: String!, 
        $keywords: String

    ) {

        myQuery(
            
            access_key: $access_key
            categories: "entertainment"
            countries: "in"
            sort: "published_desc"
            keywords: $keywords

            ) {

            data {
                author
                category
                image
                description
                country
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }


        }

    }
`;

    // Fetch function with Next.js 13 caching

    const res = await fetch ('https://wandlitz.stepzen.net/api/sunny-rocky/__graphql',{


        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? {revalidate: 0} : {revalidate:20},
        headers: {
            "Content-Type": "application/json",
             Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,

        },
        body:JSON.stringify(
        {
            query,
            variables: {

                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },

        }),
        });

        console.log(
            "LOADING New Data from API For Category >>>",
            category,
            keywords
        );


            // Sort function by images vs not images

        const newsResponse = await res.json();

    
    // return result

    const news = sortNewsByImage(newsResponse.data.myQuery);

    return news;
}

export default fetchNews;