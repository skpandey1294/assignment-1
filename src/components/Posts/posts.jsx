import React, { Component } from 'react';

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import styles from './style.ts';

class Posts extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {

        axios(`https://jsonplaceholder.typicode.com/posts`)
        .then(posts => {
            this.setState({
                posts: posts.data,
                isLoaded: true
            })
        })
        .catch(error => {
            throw new Error(error)
        });
    }


    render() {
        const { posts, isLoaded } = this.state

        const postList = posts.map( post => {
          return (
        <Link key={post.id} to={`/${post.id}`}>
        <Card key={post.id} id={post.id} style={styles._card}>
        <CardActionArea key={post.id} id={post.id}>
          <CardContent key={post.id} id={post.id}>

            <Typography id={post.id} gutterBottom component="p">
            <span id={post.id}><b>User_ID</b>:{post.userId}</span>
            </Typography>

            <Typography id={post.id} gutterBottom component="p">
            <span id={post.id}><b>Title</b>:{post.title}</span>
            </Typography>

            <Typography id={post.id} gutterBottom component="p">
            <span id={post.id}><b>Body</b>:{post.body}</span> 
            </Typography>

          </CardContent>
         </CardActionArea>
         </Card>
        </Link>
          )
        })
        return (  
           ( isLoaded === false ? <div> Loading... </div> : <div style={styles._postDiv}> {postList} </div> )
        )
    }
}

export default Posts;
