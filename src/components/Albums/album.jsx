import React, { Component } from 'react';

import axios from 'axios';

import './album.css';

import { SkipPrevious, SkipNext }  from '@material-ui/icons';

import baseUrl from '../../config';

let index = 0

class Album extends Component {

    state = {
        photos: [],
        currPicture: '' ,
        currTitle: '',
        length: 0,
        isLoading: false,
        opacity: 0 
    }

    componentDidMount() {
        axios(`${baseUrl}/photos?albumId=${this.props.match.params.albumId}`)
        .then(response => {
            console.log(response)
            this.setState({
                photos:response.data,
                currPicture: response.data[0].url,
                currTitle: response.data[0].title,
                length: response.data.length,
                isLoading: true
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    prev = () => {
        index--
        console.log(index)
        this.setState({
            currPicture: this.state.photos[index].url,
            currTitle: this.state.photos[index].title,
        })
    }

    next = () => {
        index++
        this.setState({
            currPicture: this.state.photos[index].url,
            currTitle: this.state.photos[index].title,
        })
    }

    onHoverTrue = () => {
        this.setState({
            opacity: 1
        })
    }

    onHoverFalse = () => {
        this.setState({
            opacity: 0
        })
    }


    render() {
        const { length, currPicture, currTitle, isLoading, opacity } = this.state

        return (
        (
            isLoading === false ? <div>Loading...</div> :
            <div  onMouseEnter={this.onHoverTrue} onMouseLeave={this.onHoverFalse}>
                <div>
                <button className="btn-prev" onClick={() => this.prev()} disabled={index === 0} style={{position: "relative", top: '37vh', right: '8vw', opacity }}><SkipPrevious /></button>
                <button className="btn-next" onClick={() => this.next()} disabled={index === length-1} style={{position: "relative", top: '37vh', left: '7vw', opacity}}><SkipNext /></button>
            </div>
            <div className="card-container">
                <img className="img" src={currPicture} alt={currTitle}/><br></br>
        <span><b>{currTitle}</b></span>
            </div>
            </div>
        )
        );
    }
}

export default  Album;