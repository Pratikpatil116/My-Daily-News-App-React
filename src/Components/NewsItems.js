import React, { Component } from 'react'

export class NewsItems extends Component {


    render() {
        let { title, description, imgurl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imgurl ? "https://cdn.vox-cdn.com/thumbor/NuhYBzBmFyxaWvdZbGq55UbMjwc=/0x81:1600x919/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22819524/windows11stock.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="badge bg-danger">{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text" className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</p>

                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
