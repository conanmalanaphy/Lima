import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import clientConfig from '../client-config'
import {withRouter} from 'next/router'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import HeaderComponent from '../components/navigation/Header';


import Product from '../components/product/Product'

import { Input } from 'antd';
import 'antd/dist/antd.css';
/**
 * GraphQL products query.
 */
const PRODUCTS_QUERY = gql`query {
  products(first: 20) {
    nodes {
      id
      productId
      averageRating
      slug
      description
      image {
        uri
        title
        srcSet
        sourceUrl
      }
      name
    }
  }
}`;

const Store = withRouter(props => {

  const {products} = props;


  return (
    <Fragment>
      <HeaderComponent itemSelected='stores' />
      <h1>All the Items we have</h1>
      { products.length ? (
						products.map( product => <Product key={product.id} product={product} />
					)) : ''}
    </Fragment>
  )
});

Store.getInitialProps = async function(){

  
  const result = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{}
  }))

  return {products:result.data.products.nodes} 
};

export default Store;