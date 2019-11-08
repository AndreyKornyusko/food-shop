import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../redux/auth/selectors';

import SignUpForm from '../components/SignUpForm/SignUpForm';

class SignUp extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) {
      const { from } = this.props.location.state || {
        from: { pathname: '/menu' },
      };

      this.props.history.push(from);
    }
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your account for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(SignUp);
