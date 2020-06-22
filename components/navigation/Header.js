import { Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import Navigation from './Navigation'
import './navigation.css'

const { Header, Content, Footer } = Layout;

const HeaderComponent = ( itemSelected) =>{
	return (
		<Header className='header-component'>
			<div className='header-container'>
				<div>
					<img src="/static/Logo.png" alt="Alternative Text" />
				</div>
				<Navigation itemSelected={itemSelected}/>
			</div>
		</Header>
	)
}

export default HeaderComponent;