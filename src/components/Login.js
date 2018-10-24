import React, {Component} from 'react';
import queryString from 'query-string';
import {authRequest} from '../actions';
import {connect} from 'react-redux'
import {Container, Header, Button, Icon} from 'semantic-ui-react';
import './App.css';

import SERVER_URL from '../server_url'

class Login extends Component {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    console.log(this.props)
    if (query.token) {
      window
        .localStorage
        .setItem("jwt", query.token);
      this
        .props
        .history
        .push("/");
    }
  }

  render() {
    return (
      <div className="App">
        <Container style={{marginTop: '4em'}}>
          <Header size="large">Login with Facebook</Header>

          <Button as="a" href={`${SERVER_URL}/auth/facebook`} color='facebook'>
            <Icon name='facebook'/>
            Facebook
          </Button>
        </Container>
      </div>
    );
  }
}

export default connect(null, {authRequest})(Login);
