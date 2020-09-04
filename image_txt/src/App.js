import React from 'react';

import ImageUploader from 'react-images-upload';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        })
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </div>
        )
    }
}

export default App;
