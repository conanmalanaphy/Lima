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
     <HeaderComponent itemSelected='posts' />
      <h1>All the Items we for {catagoryName}</h1>
      { prods.length ? (
						prods.map( product => <Product key={product.id} product={product} />
					)) : ''}
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