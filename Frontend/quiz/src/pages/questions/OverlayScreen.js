import React, {Component} from 'react';

import './styles.css';

export default class OverlayScreen extends Component{
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.show.bind(this)}>show</button>

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div>Content</div>
                </Rodal>
            </div>
        )
    }
}