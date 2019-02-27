import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import PCDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import MobileDetails from './components/mobile_news_details';

import 'antd/dist/antd.css';
import '../style';//全局样式
import MediaQuery from 'react-responsive'; //获取媒体类型

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Root extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<MediaQuery query='(min-device-width: 1224px)'>
						<Route exact path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCDetails}></Route>
					</MediaQuery>
					<MediaQuery query='(max-device-width: 1224px)'>
						<Route exact path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileDetails}></Route>
					</MediaQuery>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));
