import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    let date = new Date(publishedAt);

    return (
      <>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://c.ndtvimg.com/2022-08/muvr4tq_rupee-generic-reuters_625x300_05_August_22.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>
              {source}
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "unknown" : author} on {date.toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
