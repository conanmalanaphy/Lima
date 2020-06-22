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
        <Content style={{ padding: '110px 50px', marginLeft:"50px", marginRight:"50px" }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item> 
              <Link as={`/`} href={`/`}>
                <a>
                   Home
                </a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{catagoryName}</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout" style={{ padding: '24px 0', background:"white" }}>
            <Sider className="site-layout-background" width={200}>
             <div> 
              <h1>{catagoryName}</h1>
              <h5> Price </h5>

             </div>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}> 
              <main className="main-area">
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