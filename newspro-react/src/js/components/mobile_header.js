import React from 'react';
import LogoIcon from '../../images/logo.png';

export default class MobileHeader extends React.Component {
	render() {
		return (
      <div id="mobileheader">
        <header>
          <img src={LogoIcon} alt="logo"/>
          <span>ReactNews</span>
        </header>
      </div>
		);
	};
}
