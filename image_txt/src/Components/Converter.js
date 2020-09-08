import React from 'react';
import axios from 'axios';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: this.props.pictures,
            convertedText: {
                text: "",
            },
            loading: false
        }
        this.handleConvert = this.handleConvert.bind(this)
    }

    handleConvert() {
        this.setState({loading: true})
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
            .then((response)=>{
              console.log(response)
              this.setState({
                    loading: true,
                    convertedText: response.data
                })
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleConvert}>CONVERT</button>
                <h2> {this.state.convertedText.text} </h2>
            </div>
        )
    }
}

export default Converter;