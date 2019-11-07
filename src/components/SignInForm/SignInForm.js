import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/auth/operations';
import Form from '../Common/Form/Form';
import Input from '../Common/Input/Input';
import Label from '../Common/Label/Label';
import Button from '../Common/Button/Button';

const INITIAL_STATE = { email: '', password: '' };

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label text="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Sign in" type="submit" />
      </Form>
    );
  }
}

const mapDispatch = {
  onSubmit: operations.signIn,
};

export default connect(
  null,
  mapDispatch,
)(SignInForm);
