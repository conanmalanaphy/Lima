import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import clientConfig from '../client-config'
import { withRouter } from 'next/router'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import HeaderComponent from '../components/navigation/Header';

const { SubMenu } = Menu;
import {Row, Col, Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const Product = withRouter(props => {
  const {product} = props;
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
        <Content style={{ padding: '105px 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item> 
            <Link as={`/`} href={`/`}>
                <a>
                   Home
                </a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link as={`/catagory/?catagory=${product.productCategories.nodes[0].id}`} href={`/catagory/?catagory=${product.productCategories.nodes[0].id}`} >
                  <a>
                  {product.productCategories.nodes[0].name}
                  </a>
              </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}> 
            <main className="main-area">
              <div style={{margin: '0 auto', padding: '0 1em'}}>
                <section style={{display: 'flex', flexWrap: 'wrap'}}>
                {product ? (
                  <div>
                    <h1>
                      {product.name}
                    </h1>
                    <div style={{height:"100px", width:"100px"}}> 
                      <img src={product.image.sourceUrl} style={{borderRadius: '8px'}}/>
                    </div>
                    <h3>
                      {product.description}
                    </h3>
                  </div>
                ):''}
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

Product.getInitialProps = async function(context){
  let {query:{slug}} = context;
  const id = slug ? slug.split('-').pop() :context.query.id;

  const PRODUCTS_QUERY = gql`query Product($id: ID!) {
    product(id: $id){
      id
      name
      description
      image {
        sourceUrl
      }
      productCategories {
        nodes {
          name
          id
        }
      }
    }
    }`;
  const res = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{ id: id }
  }))

  return {product:res.data.product} 
};


export default Product 