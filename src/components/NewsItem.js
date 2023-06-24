import React, { Component } from 'react'

export class NewsItem extends Component {



  render() {
    let {title,description,imageUrl,newsUrl,author, date,source}= this.props;
    return (
      <div className='my-3'>
        
        <div className="card">
        <img src={!imageUrl ? "data:image/png;base64,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": imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span className="badge badge-pill badge-info">{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className="text-muted">by {!author ? 'unknown':author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
