import React, { Component, Fragment } from 'react';

import './userPost.css';

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './style';

import baseUrl from '../../config';

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

       const postResponse = axios(`${baseUrl}/posts/${this.props.match.params.postId}`).then(post => {
            this.setState((state) => {
               return {
                post: post.data
                }  
            })
        })
        .catch(error => {
            console.error(error)
        })

         postResponse.then(() => {   
        axios(`${baseUrl}/users/${this.state.post.userId}`)
        .then(user => {
            this.setState({
                username: user.data.username,
                isLoaded1: true
            })
        })
        .catch(error => {
            console.error(error)
        })
    })

    postResponse.then(() => { 
        axios(`${baseUrl}/posts/${this.props.match.params.postId}/comments`)
        .then(comment => {
            this.setState({
                comment: comment.data,
                isLoaded2: true
            })
        })
        })
        .catch(error => {
            console.error(error)
        })
    }
        
    
    render() {
        const { post, username, comment, isLoaded1, isLoaded2 } = this.state 

        const comments = comment.map(comment => {
            return(
                <div key={`comment${comment.id}`}>
                <hr></hr>
                <Typography id={`comment${comment.id}`} gutterBottom component="p">
                <span id={`comment${comment.id}`}><b>comment by user</b>: {comment.name}</span>
                </Typography><br></br>
                <Typography id={`comment${comment.id}`} gutterBottom component="p">
                <span id={`comment${comment.id}`}><b>comment</b>: {comment.body}</span>
                </Typography>
                </div>
                )
        })  

        const userPost = (
        <Fragment>
            <div>
                <h3>UserPost</h3>
            </div>

            <div key={`post${post.id}`} className="card-container" style={styles._div}>

                <Card id={`post${post.id}`} className="card" style={styles._singleCard}>

                    <CardActionArea id={`post${post.id}`}>

                        <CardContent id={`post${post.id}`}>
                            
                            <Typography id={`post${post.id}`} gutterBottom component="p">
                                <span id={`post${post.id}`}><b>UserName</b>: {username} </span>
                            </Typography>
    
                            <Typography id={`post${post.id}`} gutterBottom component="p">
                            <span id={`post${post.id}`}><b>Title</b>: {post.title} </span>
                            </Typography>

                            <Typography id={`post${post.id}`} gutterBottom component="p">
                            <span id={`post${post.id}`}><b>Body</b>: {post.body} </span>
                            </Typography>

                            <React.Fragment>{comments}</React.Fragment>
    
                        </CardContent>

                    </CardActionArea>

                </Card>

            </div>

        </Fragment>
        )

        return (
            ( ( isLoaded1 === false || isLoaded2 === false ) ? <div> Loading... </div> : <div> {userPost} </div> )
        )
        
    }
}

export default UserPost;