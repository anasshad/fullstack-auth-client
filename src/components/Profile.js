import React, {Component} from 'react';
import {fetchProfile} from '../actions'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Container, Header, Icon, Grid, Loader} from 'semantic-ui-react'

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

        if (this.props.profile) {
            return (
                <div>
                    <Container
                        style={{
                        marginTop: '4em'
                    }}>
                        <Grid centered verticalAlign='middle'>
                            <Grid.Column width={6}>
                                <Icon name='user' size="massive"/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header size='large'>Heya! {this.props.profile.name} </Header>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            )
        } else {
            return (
                <div style={{marginTop: '5em'}}><Loader active inline='centered' /></div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {token: state.token, profile: state.profile, error: state.error}
}

export default connect(mapStateToProps, {fetchProfile})(Profile);