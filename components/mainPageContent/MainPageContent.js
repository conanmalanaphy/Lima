import Link from 'next/link'

import { Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './mainpagecontent.css'
const { Header, Content, Footer } = Layout;


const MainPageContent = () => {
    return(
		<div className="site-layout-background">
			<div>
				<Link as={`/catagory?catagory="dGVybTo0`} href={`/catagory?catagory="dGVybTo0"`}>
					<a>
						Food
					</a>
				</Link>
			</div>
			<div>
				<Link as={`/catagory?catagory="dGVybTo0`} href={`/catagory?catagory="dGVybTo0"`}>
					<a>
						Toys
					</a>
				</Link>
			</div>
			<div>
			</div>
		</div>
	)
}

export default MainPageContent;