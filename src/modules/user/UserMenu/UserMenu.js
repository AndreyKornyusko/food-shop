import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';
import AuthMenu from '../../../components/AuthNav/AuthNav';
import UserProfile from '../../../components/UserProfile/UserProfile';
import s from './UserMenu.module.scss';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;

    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { username, avatar, children } = this.props;

    return (
      <div
        className={s.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        {children}
        {isDropdownOpen && <Dropdown username={username} />}
      </div>
    );
  }
}
