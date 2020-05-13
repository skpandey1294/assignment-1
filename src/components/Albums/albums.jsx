import React, { Component } from 'react';

import './albums.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

import styles from './style.js';

import { Link } from 'react-router-dom';

import baseUrl from '../config';

class Albums extends Component {

    state = {
        albums: [],
        isLoading: false
    }

    componentDidMount() {
        axios(`${baseUrl}/albums`)
        .then(response => {
            this.setState({
                albums: response.data,
                isLoading: true
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {

        const { albums, isLoading } = this.state

        const albumsList = albums.map( album => {
            return ( 
              <Link key={`album${album.id}`} to={`/album/${album.id}`}>

          <Card id={`album${album.id}`} className="card" style={styles._card}>

          <CardActionArea id={`album${album.id}`}>

            <CardContent id={`album${album.id}`}>
  
              <Typography id={`album${album.id}`} gutterBottom component="p">

              <span id={`album${album.id}`}>

                  <b>Title</b>:{album.title}

              </span>

              </Typography>
  
            </CardContent>

          </CardActionArea>

        </Card>

        </Link>
            )
          })
        return (
            
        ( isLoading === false ? <div>Loading...</div> : <div className="albums-container" style={styles._userDiv}>{albumsList}</div> )
       
        )
    }
}

export default Albums;