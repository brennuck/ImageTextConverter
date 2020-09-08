import React from 'react';

import Converter from './Components/Converter';
import './App.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: ""
        }
    }

    handleChanges = (e) => {
		this.setState({
				...this.state.pictures,
				[e.target.name]: e.target.value,
		});
	};

    render() {
        return (
            <div className="appContainer">
                <h1 className="name">IMG2TXT</h1>
                <input
                type="string"
                name="pictures"
                value={this.state.pictures}
                onChange={this.handleChanges}
                placeholder="Image URL"
                className="input"
                />
                <Converter pictures={this.state.pictures} />
            </div>
        )
    }
}

export default App;
