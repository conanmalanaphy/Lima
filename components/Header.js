import { Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'

import Navigation from '../components/Navigation'

const { Header, Content, Footer } = Layout;

const HeaderComponent = ( itemSelected) =>{

return (<Header theme="light" style={{ position: 'fixed', zIndex: 1, width: '100%', height:"100px" }}>
		<div style={ {   display: 'flex', flexDirection:"row", justifyContent: "flex-start"}}>
			<div >
				<img src="/static/Logo.png" alt="Alternative Text" />
			</div>
			<Navigation itemSelected={itemSelected}/>
			
		</div>
     
    </Header>)
}

export default HeaderComponent;