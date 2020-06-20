import Link from 'next/link'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


export default () => {
    const [menuItem, setMenuItem] = useState('home');

    return(
        <Menu onClick={(menuItem)=>{setMenuItem(menuItem)}} selectedKeys={[menuItem]} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
            <Link href="/"><a href="/">Home</a></Link>
        </Menu.Item>
        <Menu.Item key="posts"  icon={<AppstoreOutlined />}>
        <Link href="/posts"><a href="/posts">Posts</a></Link>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
        </a>
        </Menu.Item>
    </Menu>
  )
}