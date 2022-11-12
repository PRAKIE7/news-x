import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let {title, description, imgURL, newsURL, author, date, source} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <div style={{
                        display:'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imgURL? imgURL:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsURL} target="_blank" className="btn-sm btn btn-primary">Read More</a>
                            <p className="card-text"><small className="text-muted">By {author? author:"anonymous"} on {new Date(date).toGMTString()}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}
