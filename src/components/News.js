import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes={
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string

  }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title=`DISCUSSION - ${this.props.category} `;
  }
  async updateNews(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data=await fetch(url);
    this.props.setProgress(40);
    let parsedData=await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false
                })
    this.props.setProgress(100);

  }
async componentDidMount(){
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07862ecd6de7456e84e333947313dc17&page=1&pageSize=${this.props.pageSize}`;
  // this.setState({loading: true});
  // let data=await fetch(url);
  // let parsedData=await data.json();
  // console.log(parsedData);
  // this.setState({articles: parsedData.articles,
  //               totalResults: parsedData.totalResults,
  //               loading: false
  //             })
  this.updateNews();
}


handleNextClick= async()=>{
    // if( !(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07862ecd6de7456e84e333947313dc17&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
        
    //     this.setState({
    //       page: this.state.page+1,
    //       articles: parsedData.articles,
    //       loading: false
    //   })
    // }
    this.setState({page: this.state.page+1});
    this.updateNews();
}
handlePrevClick=async()=>{
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07862ecd6de7456e84e333947313dc17&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   console.log(parsedData);

  //   this.setState({
  //     page: this.state.page-1,
  //     articles: parsedData.articles,
  //     loading: false
  // })
  this.setState({page: this.state.page-1});
  this.updateNews();
}


fetchMoreData = async() => {
  this.setState({page: this.state.page+1});
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: this.state.articles.concat(parsedData.articles),
                  totalResults: parsedData.totalResults
                })
};

  render() {
    return (
      <div className="container my-3">

        <h2 className="text-center" style={{marginTop: '90px'}}>DISCUSSION - top {this.props.category} headlines</h2>
 
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
        <div className="row">

            { this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    
                    title={element.title ? element.title.slice(0,45):""}
                    description={element.description ? element.description.slice(0,119): ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />   
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-secondary mx-3" onClick={this.handlePrevClick}>&larr; Prev </button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}



        

      </div>
      
    );
  }
}
export default News;
