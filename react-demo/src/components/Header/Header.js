import React from 'react'
import logo from './logo.svg';
import './Header.css'


const a = 'popop'

export default class Header extends React.Component {
	render(){
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
		)
	}
}