import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner'
function News(props) {

    const [data, setData] = useState(['']);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(false);
    let [page, setPage] = useState(1);
    const { pageSize, country, category } = props;
    const newsUrlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=48ca16ed860549daa2044f07986e9764&pageSize=${pageSize}`

    async function getnewsData(url) {
        setLoading(true);
        let fetchdata = axios.get(url);
        await fetchdata.then((result) => {
            console.log(result.data);
            setData(result.data.articles);
            setTotalData(result.data.totalResults);
            setLoading(false);
        }).catch((err) => document.write(err))
    }

    useEffect(() => {
        getnewsData(newsUrlAPI+`&page=${page}`);
        // console.log(newsUrlAPI + `&page=${page}`);
    }, [page, newsUrlAPI])

    function prevPageHandler() {
        console.log("Previous Click");
        setPage(page - 1);
    }

    function nextPageHandler() {
        console.log("Next Click");
        setPage(page + 1);
    }

    return (
        <div className='container my-3'>
            <h2 className='text-center'>News Duniya -- Top Headlines</h2>
            <div className="row center-block" >
                {loading ? <Spinner /> : data.map((ele) => {
                    return <div className='col-md-4' key={ele.url}>
                        <NewsItem newsurl={ele.url} target="_blank" title={ele.title} description={ele.description}
                            urlToImage={ele.urlToImage} author={ele.author} updatedTime={ele.publishedAt} 
                            source={ele.source?.name}
                             />
                    </div>
                })}
            </div>
            <div className='page my-3'>
                <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={prevPageHandler}>&laquo; Prev</button>

                <button disabled={page >= Math.ceil(totalData / pageSize)} type="button" className="btn btn-primary" onClick={() => nextPageHandler()}>Next &raquo;</button>

            </div>
        </div>
    )
}

export default News
