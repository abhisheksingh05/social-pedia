import React, { Component } from 'react'
import { Tab,Tabs } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

import './home.scss';
import Post from '../posts/post';


export class Home extends Component {
  

  constructor(props) {
    super(props)
  
    this.state = {
       articles:[],
       activePage: 1,
       articlesCount:0
    }
    console.log('props', props)
  }

  componentDidMount(){
    this.getArticles(this.state.activePage)
  }
  getArticles(pageNumber){
    let baseUrl = 'https://conduit.productionready.io/api/articles?limit=10&offset='+ (pageNumber-1)*10;
    fetch(baseUrl)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.setState({articles: data.articles, articlesCount:data.articlesCount});
    })
    .catch(error=>{
      console.log('Error', error)
    });
  }
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.getArticles(pageNumber);
  }

  render() {
    let items = [];
    for (let number = 1; number <= this.state.articlesCount/10; number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.activePage} onClick={()=> this.handlePageChange(number)} >
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <Tabs defaultActiveKey="home" id="post-tab">
        <Tab eventKey="home" title="Home">
          {
            this.state.articles.map(article=>(
              <Post key={article.createdAt} article={article}></Post>
            ))
          }
          <Pagination>
            {items}
          </Pagination>
        </Tab>
        <Tab eventKey="profile" title="Your Feed">
        </Tab>
    </Tabs>
    );
  }
}


export default Home;
