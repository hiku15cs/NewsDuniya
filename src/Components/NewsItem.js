import React from 'react'

function NewsItem(props) {
    const { title, description, urlToImage, newsurl, author, updatedTime, source } = props;
    // const date = new Date(updatedTime);
    return (
        <div>
            <div className="card  my-2" >
                <img src={urlToImage ? urlToImage : 'https://www.hindustantimes.com/ht-img/img/2023/05/28/1600x900/ip_1685290757710_1685290770924.jpg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span class="badge text-bg-secondary">{source}</span>
                    <h5 className="card-title">{title ? title.slice(0, 60) + '...' : ''}</h5>
                    <p className="card-text">{description ? description.slice(0, 85) : ''}</p>
                    <p class="card-text"><small class="text-body-secondary">{author ? author : 'Unknown'}</small></p>
                    <p class="card-text"><small class="text-body-secondary">{updatedTime?updatedTime.split('T').join(' ').split('Z').join():''}</small></p>
                    <a href={newsurl} className="btn btn-primary">See More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
