import React, { Component } from 'react';

import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './style.ts';

class UserInfo extends Component {


constructor(){
    super()
    this.state = {
        userInfo: {},
        isLoaded: false
    }
}

    componentDidMount() {

        axios(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(user => {
            this.setState({
                userInfo: user.data,
                isLoaded: true
            })
        })
        .catch(error => {
            throw new Error(error)
        })
    }

    componentWillUnmount() { 
        this._isMounted = false
      }


    render() {
        const { userInfo, isLoaded } = this.state

       const userDetails = (<React.Fragment>
            <div><h3>User Details</h3></div>
            <div key={userInfo.id} style={styles._div}>
            <Card key={userInfo.id} id={userInfo.id} style={styles._card}>
            <CardActionArea id={userInfo.id}>
              <CardContent id={userInfo.id}>
    
                <Typography id={userInfo.id} gutterBottom component="p">
                <span id={userInfo.id}><b>Name</b>:{userInfo.name}</span>
                </Typography>
    
                <Typography id={userInfo.id} gutterBottom component="p">
                <span id={userInfo.id}><b>Username</b>:{userInfo.username}</span>
                </Typography>
    
                <Typography id={userInfo.id} gutterBottom component="p">
                <span id={userInfo.id}><b>Email</b>:{userInfo.email}</span>
                </Typography>
    
                <Typography id={userInfo.id} gutterBottom component="p">
                <span id={userInfo.id}><b>Contact</b>:{userInfo.phone}</span>   
                </Typography>
    
                <Typography id={userInfo.id} gutterBottom component="p">
                <span id={userInfo.id}><b>Website</b>:{userInfo.website}</span>   
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