import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
// import LoadingIndicator from './index.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './App.scss';

import logo from './Img2TxtLogo.png'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: "",
            text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
            loading: false,
            copied: false,
        }
        this.handleConvert = this.handleConvert.bind(this)
    }

    handleChanges = (e) => {
		this.setState({
				...this.state.pictures,
				[e.target.name]: e.target.value,
		});
    };

    onCopy = () => {
        this.setState({copied: true});
    };
    
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
                "source": this.state.pictures,
                "sourceType":"url"
                },"data":{
                "source": this.state.pictures,
                "sourceType":"url"
                }
            })
        )
            .then((response)=>{
              console.log(response)
              this.setState({
                    loading: true,
                    text: response.data.text
                })
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render() {
        return (
            <div className="appContainer">
                <img src={logo} alt="logo" className="name" />
                <div className="rectangle">
                    <h4 className="insert-img-url-here">Insert image URL here</h4>
                    <input
                    type="string"
                    name="pictures"
                    value={this.state.pictures}
                    onChange={this.handleChanges}
                    placeholder="Enter image URL here"
                    className="input"
                    />
                    <div className="converterContainer">
                        <button className="blankButton"></button>
                        <button className="button" onClick={this.handleConvert}>Convert</button>
                    </div>
                </div>
                <div className="converterTextContainer">
                <h4 className="heres-your-text">Here's your text</h4>
                    <div className="textContainer">
                        <h2 className="text"> {this.state.text} </h2>
                        {/* <LoadingIndicator /> */}
                    </div>
                    <CopyToClipboard onCopy={this.onCopy} text={this.state.text}>
                        {this.state.copied ? <h4 className="copied-text">Copied to clipboard!</h4> : <button className="copy-text">Copy Text</button>}
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}

export default App;
