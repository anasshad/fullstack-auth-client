import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
import {
  Container,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'
import {logOut} from '../actions';

const TopMenu = (props) => {
  console.log(!props.token)
  return (
  <div>
    <Menu inverted>
      <Container>
        <Menu.Item as='a' header>
          <Icon name="key" size='small' style={{ marginRight: '1.5em' }} />
          Full Stack Authentication
        </Menu.Item>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        {
          props.token ? 
          (<Menu.Item as={Button} size="tiny" onClick={props.logOut} position="right" header>
              <Icon name="sign-out" size='small' style={{ marginRight: '1.5em' }} />
              Logout
          </Menu.Item>)
          :
          (<Menu.Item as={Link} to="/login" position="right"  header>
            <Icon name="sign-in" size='small' style={{ marginRight: '1.5em' }} />
            Login
          </Menu.Item>)
        }
      </Container>
      </Menu>
  </div>
)}

function mapStateToProps(state){
  return {
    token: state.token
  }
}

export default withRouter(connect(mapStateToProps, {logOut})(TopMenu));