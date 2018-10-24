import React, {Component} from 'react';
import {authSuccess} from '../actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated:  false
        }
    }

    componentWillMount(){
        const token = this.props.match.params.token;
        this.props.authSuccess(token);
        this.setState({
            authenticated: true
        })
    }

    render() {
        console.log(this.props)
        if(this.state.authenticated){
            return (
                <Redirect to="/profile"/>
            )
        }
    }
}

export default connect(null, {authSuccess})(Token);