import React, { useState } from 'react';
import Link from 'next/link'
import { Input,Layout, Menu, Breadcrumb,Button } from 'antd';
import 'antd/dist/antd.css';
import './mainpagecontent.css'
const { Header, Content, Footer } = Layout;

const MainPageContent = () => {
    return(
		<div>
			<div className="parallax">
				<div
					style={{
						position: 'absolute',
						color: 'white',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
                    >
					<p style={{ fontSize: '50px' }}>
						LIMA'S ONLINE MARKETPLACE
					</p>
					<p style={{textAlign: 'center'}}>
						<Link as={`/catagory?catagory="dGVybTo0`} href={`/catagory?catagory="dGVybTo0"`}>
							<Button type="primary" shape="round" size='large'>
								Shop now
							</Button>
						</Link>
					</p>
				</div>
			</div>
			< div className="site-layout-background">
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
			</div>
		</div>
	)
}

export default MainPageContent;