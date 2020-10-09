import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ErrorMessage extends Component {
    render() {
        return (
            <div style={styles.error_container}><h2 style={styles.error_text}>{this.props.error}</h2></div>
        )
    }
}

const styles = {
    error_container: {
        marginTop: 50
    },
    error_text: {
        textAlign: 'center'
    }
}
