import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import DropdownNavigation from '../Navigation/dropdownNav';
import UserMenu from '../../modules/user/UserMenu/UserMenu';

import appLogo from '../../assets/logo.png';
import avatar from '../../assets/avatar.jpg';
import navItems from '../../configs/main-nav';
import CartIcon from '../../modules/cart/cartIcon/cartIconContainer';

import s from './AppHeader.module.scss';
import { ReactComponent as Menu } from '../../assets/line-menu.svg';
import Modal from '../../modules/mobileMenu/modal';

class AppHeader extends Component {
  state = {
    isMenuOpen: false,
  };

  openMenu = () => this.setState({ isMenuOpen: true });
  closeModal = () => this.setState({ isMenuOpen: false });

  render() {
    const { isMenuOpen } = this.state;
    const { onClick, openMenu } = this.props;
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
          <div className={s.usermenu}>
            <UserMenu avatar={avatar} name="Bob Ross" />
          </div>
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

// const AppHeader = () => (
//   <header className={s.header}>
//     <div className={s.logoWrap}>
//       <Logo className={s.logo} image={appLogo} />
//     </div>
//     <div className={s.navWrap}>
//       <Navigation items={navItems} />
//     </div>
//     <CartIcon />
//     <div className={s.usermenu}>
//       <UserMenu avatar={avatar} name="Bob Ross" />
//     </div>
//     <div className={s.mobileNav}>
//       <button className={s.openModal} onClick={openMenu}>
//         <Menu />
//       </button>
//     </div>
//   </header>
// );

export default AppHeader;
