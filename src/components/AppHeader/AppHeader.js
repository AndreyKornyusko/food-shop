import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../UserProfile/UserProfile';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import DropdownNavigation from '../Navigation/dropdownNav';
import UserMenu from '../../modules/user/UserMenu/UserMenu';

import appLogo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import navItems from '../../configs/main-nav';
import CartIcon from '../../modules/cart/cartIcon/cartIconContainer';

import s from './AppHeader.module.scss';
import { ReactComponent as Menu } from '../../assets/line-menu.svg';
import Modal from '../../modules/mobileMenu/modal';

import * as selectors from '../../redux/auth/selectors';
import * as operations from '../../redux/auth/operations';

class AppHeader extends Component {
  state = {
    isMenuOpen: false,
  };

  openMenu = () => this.setState({ isMenuOpen: true });
  closeModal = () => this.setState({ isMenuOpen: false });

  render() {
    const { isMenuOpen } = this.state;
    const { onClick, openMenu, isAuthenticated, user, onSignOut } = this.props;
    return (
      <header className={s.header}>
        <div className={s.logoWrap}>
          <Logo image={appLogo} />
        </div>
        <div className={s.navWrap}>
          <Navigation items={navItems} />
        </div>

        <div className={s.menuWrap}>
          <CartIcon />
          {/* <div className={s.usermenu}>
            <UserMenu avatar={avatar} name="Bob Ross" />
          </div> */}

          {isAuthenticated ? (
            <UserMenu username={user.name}>
              <UserProfile onSignOut={onSignOut} user={user} avatar={avatar} />
            </UserMenu>
          ) : (
            <AuthNav />
          )}

          <div className={s.mobileNav}>
            <button className={s.openModal} onClick={this.openMenu}>
              <Menu />
            </button>
            {isMenuOpen && (
              <Modal onClose={this.closeModal}>
                <DropdownNavigation
                  items={navItems}
                  handleClick={this.closeModal}
                />
              </Modal>
            )}
          </div>
        </div>
      </header>
    );
  }
}

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state),
});

const mapDispatch = {
  onSignOut: operations.signOut,
};

export default connect(
  mapState,
  mapDispatch,
)(AppHeader);
