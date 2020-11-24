import React, {Component} from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    }

    handleSendClick = () => {
        const message = {
            text: this.state.inputText
        };
        this.props.handleSend(message);
        this.setState({
            inputText: ''
        })
    }

    render() {
        return (
            <footer className="ChatInput">
                <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSendClick}>Send</button>
            </footer>
        );
    }
}

export default ChatInput;
