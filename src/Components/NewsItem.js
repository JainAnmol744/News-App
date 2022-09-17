import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, Iurl, url, date} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={Iurl? Iurl: "https://pagesix.com/wp-content/uploads/sites/3/2022/08/sylvester-stallone-wife-divorce-dog.jpg?quality=75&strip=all&w=1200"}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">{date}</small></p> 
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark" >Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
