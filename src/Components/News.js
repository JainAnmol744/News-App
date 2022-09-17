import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import Spiner from "./Spiner";

export class News extends Component {

  static defaultProps= {
    country: 'in',
    category: 'entertainment'
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344bc8391c4540acbe5f7dc3572f6587&page=1&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults, loading: false})
  }

  handlePrevClick = async ()=>{
    
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344bc8391c4540acbe5f7dc3572f6587&page=${this.state.page-1}&pageSize=20`;

  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading: false
  })
  }

  handleNextClick = async ()=>{
      
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=344bc8391c4540acbe5f7dc3572f6587&page=${this.state.page+1}&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page +1,
      articles: parsedData.articles,
      loading: false
    })
  
  }

  render() {
    return (
      <div className="container my-3">
        <h1><center>NewsMonkey -- TOP HEADLINES</center></h1>
        {this.state.loading && <Spiner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 51) : ""
                  }
                  Iurl={element.urlToImage}
                  url={element.url} date={element.publishedAt}/>
              </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" 
            onClick ={this.handlePrevClick}> &larr; Previous</button>
          <button disabled = {this.state.page +1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-dark" 
            onClick ={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
