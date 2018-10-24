import React, {Component} from 'react';
import {fetchProfile} from '../actions'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const {token} = this.props;
        this
            .props
            .fetchProfile(token)
    }

    render() {
        if (!this.props.token || this.props.error) {
            return <Redirect to='/'/>
        }
        {
            if(this.props.profile){
                return(
                    <div>
                        Hello, {this.props.profile.name}
                    </div>
                )
            }
            else {
                return (
                    <div>Loading...</div>
                )
            }
        }
    }
}

function mapStateToProps(state) {
    return {
        token: state.token, 
        profile: state.profile,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchProfile})(Profile);