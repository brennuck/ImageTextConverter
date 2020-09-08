import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../index.js';

import './Converter.scss';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: this.props.pictures,
            text: "Converted Text",
            loading: false
        }
        this.handleConvert = this.handleConvert.bind(this)
    }

    handleConvert() {
        this.setState({ text: "" })
        this.setState({loading: true})
        trackPromise(
            axios({
                "method":"POST",
                "url":"https://image-to-text2.p.rapidapi.com/cloudVision/imageToText",
                "headers":{
                "content-type":"application/json",
                "x-rapidapi-host":"image-to-text2.p.rapidapi.com",
                "x-rapidapi-key":"3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795",
                "accept":"application/json",
                "useQueryString":true
                },"params":{
                "source": this.props.pictures,
                "sourceType":"url"
                },"data":{
                "source": this.props.pictures,
                "sourceType":"url"
                }
            })
        )
            .then((response)=>{
              console.log(response)
              this.setState({
                    loading: true,
                    text: response.data
                })
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render() {
        return (
            <div className="converterContainer">
                <button className="button" onClick={this.handleConvert}>CONVERT</button>
                <div className="textContainer">
                    <h2> {this.state.text} </h2>
                    <LoadingIndicator />
                </div>
            </div>
        )
    }
}

export default Converter;