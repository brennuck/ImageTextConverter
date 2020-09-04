import React from 'react';

import Converter from './Components/Converter';

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
            <div>
                <input
                type="string"
                name="pictures"
                value={this.state.pictures}
                onChange={this.handleChanges}
                placeholder="Image URL"
                />
                <Converter pictures={this.state.pictures} />
            </div>
        )
    }
}

export default App;
