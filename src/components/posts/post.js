import React, { Component } from 'react'

import { Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';

import './post.scss';
import { format } from 'url';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    }
  }
  
  render() {
    let articleProps = this.props.article
    if (!articleProps) {
      return (
        <div className="article-preview">Loading...</div>
      );
    }
  

    return (
      <Card style={{ width: '50rem' }} className="m-4">
        <Card.Body className="p-2">
          <Card.Header className="bg-transparent border-success p-0">
            <div className="article-meta">
              <a  href="#/@Jacob999">
                <img src={articleProps.author.image} />
              </a>

              <div className="info">
                <a className="author" href="#/@Jacob999">{articleProps.author.username}</a>
                <span className="date">
                  <Moment format="MMM DD, YYYY">
                      {articleProps.createdAt}
                  </Moment>
                </span>
              </div>

              <div className="pull-xs-right">
                <Button variant="light py-0">
                <FontAwesomeIcon icon={faHeart}/>
                  {articleProps.favoritesCount}
                  </Button> 
              </div>
            </div>
          </Card.Header>
          <Card.Title>Card Title {articleProps.title}</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            {articleProps.description}
          </Card.Text>
          <Card.Footer className="p-0">
            <div className="article-card-footer">
              <span>Read More</span>
              <ul className="tag-list">
                {
                  articleProps.tagList.map(tag=>(
                    <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
                  ))
                }
              </ul>
            </div>
          </Card.Footer>
        </Card.Body>
    </Card>
    );
  }
}


export default Post;
