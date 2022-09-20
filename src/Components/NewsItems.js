import React, { Component } from 'react'

export class NewsItems extends Component {

    

    render() {
        let {title, description, imageUrl, newsId} = this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail/" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems