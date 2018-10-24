import React, {Component} from 'react';
import queryString from 'query-string';
import {authRequest} from '../actions';
import {connect} from 'react-redux'

import {Container, Segment, Header, Icon, Button} from 'semantic-ui-react'

import './App.css';

import SERVER_URL from '../server_url'

class App extends Component {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    console.log(this.props)
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="App">
        This is the app component
        <a href={`${SERVER_URL}/auth/facebook`}>Login Facebook</a>
        <button onClick={() => this.props.authRequest('facebook')} >Facebook</button>
        <Container>
        <Header as='h2'>
          <Icon name='home' />
          <Header.Content>
            Welcome to Full Stack Authentication
            <Header.Subheader>Login to continue</Header.Subheader>
            <Button type="primary">Login</Button>
          </Header.Content>
        </Header>
        </Container>

      </div>
    );
  }
}

export default connect(null, {authRequest})(App);
