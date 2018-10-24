import React, {Component} from 'react';
import {
    Container,
    Header,
    Icon,
    Button,
    Grid
} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container style={{marginTop: '4em'}}>

                <Grid centered verticalAlign='middle'>
                    <Grid.Column width={6}>
                        <Icon name='home' size="massive"/>
                    </Grid.Column>
                    <Grid.Column width={10}>

                        <Header size='large'>Welcome to Full Stack Authentication</Header>
                        {!this.props.token && (
                            <div>
                                <Header sub>Login to continue</Header>
                                <br/>
                                <Button primary as={Link} to="/login">Login</Button>
                            </div>
                        )}

                    </Grid.Column>
                </Grid>
            </Container>

        );
    }
}

function mapStateToProps(state){
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, null)(Login);