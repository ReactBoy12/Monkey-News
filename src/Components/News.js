import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

   
    constructor() {
        super();
        console.log("this is news item constructor..");

        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f8be59f629b44be97f3bf0921aa6507&page=1&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
         this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }

    handleNextClick=async ()=>{
        console.log("next")
        if(this.state.page+1>=Math.ceil(this.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f8be59f629b44be97f3bf0921aa6507&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({
            page:this.state.page+1,
            articles: parseData.articles
        }
        )
    }
    }

    handlePrevClick=async()=>{
        console.log("previous")
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f8be59f629b44be97f3bf0921aa6507&page=${this.state.page -1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({
            page:this.state.page-1,
            articles: parseData.articles
        }
        )
    }

    render() {
        console.log("render")
        return (
            <>
                <div className="container my-3">
                    <h2>News Monkey - HeadLines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-4"  key={element.url}>
                                    <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News