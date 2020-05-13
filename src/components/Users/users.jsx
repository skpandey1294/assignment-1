import React, { Component } from 'react';

import './users.css';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './style';

import baseUrl from '../../config';


class Users extends Component {

    state = {
        users: [],
        isLoaded: false
        
    }

    componentDidMount() {

        axios(`${baseUrl}/users`)
        .then(users => {
            this.setState({
                users: users.data,
                isLoaded: true
            })
        })
        .catch(error => {
            console.error(error)
        });
    }

    render() {
        const { users, isLoaded } = this.state

        const usersList = users.map( user => {
          return ( 
            <Link key={`user${user.id}`} to={`/user/${user.id}`}>
        <Card id={`user${user.id}`} className="card" style={styles._card}>
        <CardActionArea id={`user${user.id}`}>
          <CardContent id={`user${user.id}`}>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Name</b>:{user.name}</span>
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Username</b>:{user.username}</span>
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Email</b>:{user.email}</span>
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Address</b>:{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</span>
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Contact</b>:{user.phone}</span>   
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Website</b>:{user.website}</span>   
            </Typography>

            <Typography id={`user${user.id}`} gutterBottom component="p">
            <span id={`user${user.id}`}><b>Company</b>:{user.company.name}</span>   
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
          )
        })
        return (  
            ( isLoaded === false ? <div> Loading... </div>: <div className="user-container" style={styles._userDiv}> {usersList} </div> )
        );
    }
}

export default Users;



