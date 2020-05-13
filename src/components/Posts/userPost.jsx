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
            username: '',
            comment: [],
            isLoaded1: false,
            isLoaded2: false 
        }
    }

    componentDidMount() {

       const postResponse = axios(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`).then(post => {
            this.setState((state) => {
               return {
                post: post.data
                }  
            })
        })
        .catch(error => {
            throw new Error(error)
        })

         postResponse.then(() => {   axios(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
        .then(user => {
            this.setState({
                username: user.data.username,
                isLoaded1: true
            })
        })
        .catch(error => {
            throw new Error(error)
        })
    })

    postResponse.then(() => { axios(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}/comments`)
        .then(comment => {
            this.setState({
                comment: comment.data,
                isLoaded2: true
            })
        })
        })
        .catch(error => {
            throw new Error(error)
        })
    }
        
    
    render() {
        const { post, username, comment, isLoaded1, isLoaded2 } = this.state 

        const comments = comment.map(comment => {
            return(
                <Typography key={comment.id} id={comment.id} gutterBottom component="p">
                <span id={comment.id}><b>comment by </b> <u><i> {comment.name} </i></u>: {comment.body}</span>
                </Typography>
                )
        })  

        const userPost = (
        <React.Fragment>
            <div>
                <h3>UserPost</h3>
            </div>

            <div key={post.id} style={styles._div}>

                <Card key={post.id} id={post.id} style={styles._card}>

                    <CardActionArea id={post.id}>

                        <CardContent id={post.id}>

                            <Typography id={post.id} gutterBottom component="p">
                                <span id={post.id}><b>UserId</b>: {post.userId} </span>
                            </Typography>
                            
                            <Typography id={post.id} gutterBottom component="p">
                                <span id={post.id}><b>UserName</b>: {username} </span>
                            </Typography>
    
                            <Typography id={post.id} gutterBottom component="p">
                            <span id={post.id}><b>Title</b>: {post.title} </span>
                            </Typography>

                            <Typography id={post.id} gutterBottom component="p">
                            <span id={post.id}><b>Body</b>: {post.body} </span>
                            </Typography>

                            <React.Fragment>{comments}</React.Fragment>
    
                        </CardContent>

                    </CardActionArea>

                </Card>

            </div>

        </React.Fragment>
        )

        return (
            ( ( isLoaded1 === false || isLoaded2 === false ) ? <div> Loading... </div> : <div> {userPost} </div> )
        )
        
    }
}

export default UserPost;