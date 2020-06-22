import Link from 'next/link'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

import './navigation.css'

export default (props) => {
    const [menuItem, setMenuItem] = useState(props.itemSelected);

    return(
        <div className='navigation-container'>
            <Menu onClick={(menuItem)=>{setMenuItem(menuItem)}} selectedKeys={[menuItem]} mode="horizontal" theme="light">
                <Menu.Item key="homelogo" >
                    <Link href="/">
                        <a href="/">
                            <img src="/static/Logo.png" alt="Alternative Text" />
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="home">
                    <Link href="/"><a href="/">Home</a></Link>
                </Menu.Item>
                <Menu.Item key="stores"  title="Stores">
                    <Link as={`/stores/napoleon`} href={`/stores?store="napoleon"`}>
                            <a>
                                Stores
                            </a>
                    </Link>
                </Menu.Item>
                <SubMenu title="Catagories">
                    <Menu.ItemGroup title="Jewelery">
                        <Menu.Item key="setting:1">
                            <Link as={`/catagory/?catagory="dGVybTo0"`} href={`/catagory/?catagory="dGVybTo0"`} prefetch>
                                <a>
                                    Necklaces
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                            <Link as={`/catagory/?catagory="dGVybTo0"`} href={`/catagory/?catagory="dGVybTo0"`} prefetch>
                                <a>
                                    Bracelets
                                </a>
                            </Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Food">
                        <Menu.Item key="setting:3">Yummy</Menu.Item>
                        <Menu.Item key="setting:4">Tasty</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="posts">
                    <Link href="/posts"><a href="/posts">About Us</a></Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}