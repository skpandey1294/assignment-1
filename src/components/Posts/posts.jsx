import React, { Component } from 'react';

import './posts.css';

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import styles from './style';

import baseUrl from '../../config';

class Posts extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {

        axios(`${baseUrl}/posts`)
        .then(posts => {
            this.setState({
                posts: posts.data,
                isLoaded: true
            })
        })
        .catch(error => {
            console.error(error)
        });
    }


    render() {
        const { posts, isLoaded } = this.state

        const postList = posts.map( post => {
          return (
        <Link key={`post${post.id}`} to={`/${post.id}`}>
        <Card id={`post${post.id}`} className="card" style={styles._card}>
        <CardActionArea id={`post${post.id}`}>
          <CardContent id={`post${post.id}`}>

            <Typography id={`post${post.id}`} gutterBottom component="p">
            <span id={`post${post.id}`}><b>User_ID</b>:{post.userId}</span>
            </Typography>

            <Typography id={`post${post.id}`} gutterBottom component="p">
            <span id={`post${post.id}`}><b>Title</b>:{post.title}</span>
            </Typography>

            <Typography id={`post${post.id}`} gutterBottom component="p">
            <span id={`post${post.id}`}><b>Body</b>:{post.body}</span> 
            </Typography>

          </CardContent>
         </CardActionArea>
         </Card>
        </Link>
          )
        })
        return (  
           ( isLoaded === false ? <div> Loading... </div> : <div className="post-container" style={styles._postDiv}> {postList} </div> )
        )
    }
}

export default Posts;
