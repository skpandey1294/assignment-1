import React, { Component } from 'react';

import './userInfo.css'

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './style';

import baseUrl from '../../config';

class UserInfo extends Component {


constructor(){
    super()
    this.state = {
        userInfo: {},
        isLoaded: false
    }
}

    componentDidMount() {

        axios(`${baseUrl}/users/${this.props.match.params.id}`)
        .then(user => {
            this.setState({
                userInfo: user.data,
                isLoaded: true
            })
        })
        .catch(error => {
            console.error(error)
        })
    }


    render() {
        const { userInfo, isLoaded } = this.state

       const userDetails = (<React.Fragment>
            <div><h3>User Details</h3></div>
            <div className="userInfo-container" key={`user${userInfo.id}`} style={styles._div}>
            <Card id={`user${userInfo.id}`} className="card" style={styles._card}>
            <CardActionArea id={`user${userInfo.id}`}>
              <CardContent id={`user${userInfo.id}`}>
    
                <Typography id={`user${userInfo.id}`} gutterBottom component="p">
                <span id={`user${userInfo.id}`}><b>Name</b>:{userInfo.name}</span>
                </Typography>
    
                <Typography id={`user${userInfo.id}`} gutterBottom component="p">
                <span id={`user${userInfo.id}`}><b>Username</b>:{userInfo.username}</span>
                </Typography>
    
                <Typography id={`user${userInfo.id}`} gutterBottom component="p">
                <span id={`user${userInfo.id}`}><b>Email</b>:{userInfo.email}</span>
                </Typography>
    
                <Typography id={`user${userInfo.id}`} gutterBottom component="p">
                <span id={`user${userInfo.id}`}><b>Contact</b>:{userInfo.phone}</span>   
                </Typography>
    
                <Typography id={`user${userInfo.id}`} gutterBottom component="p">
                <span id={`user${userInfo.id}`}><b>Website</b>:{userInfo.website}</span>   
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
          </React.Fragment>)
        return (
            ( isLoaded === false ? <div> Loading... </div> : <div> {userDetails} </div> )
        )
    }
}

export default UserInfo;