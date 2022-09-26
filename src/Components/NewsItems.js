import React, { Component } from 'react'

export class NewsItems extends Component {

    

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://c.ndtvimg.com/2022-08/muvr4tq_rupee-generic-reuters_625x300_05_August_22.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems