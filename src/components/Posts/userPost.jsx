import React, { Component } from 'react';

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './style.ts';


class UserPost extends Component {

    constructor() {
        super()
        this.state = {
            post: {},
            isLoaded: false
        }
    }

    componentDidMount() {

        axios(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
        .then(post => {
            this.setState({
                post: post.data,
                isLoaded: true
            })
        })
        .catch(error => {
            throw new Error(error)
        })
    }
    
    render() {
        const { post, isLoaded } = this.state 

        const userPost = (<React.Fragment>
            <div><h3>UserPost</h3></div>
            <div key={post.id} style={styles._div}>
            <Card key={post.id} id={post.id} style={styles._card}>
            <CardActionArea id={post.id}>
              <CardContent id={post.id}>
    
                <Typography id={post.id} gutterBottom component="p">
                <span id={post.id}><b>UserId</b>: {post.userId}</span>
                </Typography>

                <Typography id={post.id} gutterBottom component="p">
                <span id={post.id}><b>Id</b>: {post.id}</span>
                </Typography>
    
                <Typography id={post.id} gutterBottom component="p">
                <span id={post.id}><b>Title</b>: {post.title}</span>
                </Typography>

                <Typography id={post.id} gutterBottom component="p">
                <span id={post.id}><b>Body</b>: {post.body}</span>
                </Typography>
    
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
          </React.Fragment>)
        return (
            ( isLoaded === false ? <div> Loading... </div> : <div> {userPost} </div> )
        )
        
    }
}

export default UserPost;