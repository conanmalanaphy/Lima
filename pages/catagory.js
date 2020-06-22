import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import clientConfig from '../client-config'
import { withRouter } from 'next/router'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import HeaderComponent from '../components/navigation/Header';
import Product from '../components/product/Product'

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
import {Row, Col, Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';


const { Header, Content, Footer, Sider } = Layout;

/**
 * GraphQL products query.
 */
const PRODUCTS_QUERY = gql`query Product($id: ID!) {
  productCategory(id: $id) {
    name
    products {
      nodes {
        id
        name
        image {
          sourceUrl
        }
      }
    }
  }
}`;

const AllPosts = withRouter(props => {

    const {products} = props;

    const catagoryName = products.productCategory.name;
    const prods = products.productCategory.products.nodes

  return (
    <Fragment>
      <Head>
        <title>Entorno - Buy Better, Buy Less</title>
        <meta name="description" content="This is an example of a meta description. This will show up in search results." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
         <HeaderComponent itemSelected='stores' />
        <Content style={{ padding: '80px 50px' }}>
      ``  <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{catagoryName}</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Speical Offers">
                  <Menu.Item key="1">Free Delivery</Menu.Item>
                  <Menu.Item key="2">On sale</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Price">
                  <Menu.Item key="5">Any Price</Menu.Item>
                  <Menu.Item key="6">Under £20</Menu.Item>
                  <Menu.Item key="7">£20 - £50</Menu.Item>
                  <Menu.Item key="8">Custom</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Colour">
                  <Menu.Item key="9">Black</Menu.Item>
                  <Menu.Item key="10">Blue</Menu.Item>
                  <Menu.Item key="11">Purple</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}> <h1>All the Items we for {catagoryName}</h1>
              <main class="main-area">
                <div style={{margin: '0 auto', padding: '0 1em'}}>
                  <section style={{display: 'flex', flexWrap: 'wrap'}}>
                    { prods.length ? (
                          prods.map( product => <Product key={product.id} product={product} />
                        )) : ''}
                  </section>
                </div>
              </main>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Entorno in Lima </Footer>
      </Layout>		
    </Fragment>
  )
});

AllPosts.getInitialProps = async function(context){
  let {query:{catagory}} = context;
  //const id = catagory ? catagory.split('-').pop() :context.query.catagory;

  const result = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{ id: catagory }
  }))

  
  return {products:result.data} 
};

export default AllPosts;