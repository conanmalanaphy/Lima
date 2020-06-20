import {withRouter} from 'next/router'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';


import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'

import { Input } from 'antd';
import 'antd/dist/antd.css';

const Product = withRouter(props => {
  const {product} = props;
  return (
    <Fragment>
      <div style={ {   display: 'flex', flexDirection:"row", justifyContent: "flex-start"}}>
        <div >
        <img src="/static/Logo.png" alt="Alternative Text" />
          </div>
          <div style={ {   width: "600px", paddingLeft:"100px", paddingTop:"27px"}}>
          <Input placeholder="Basic usage" />
          </div>
        </div>
    

      <Navigation itemSelected="posts"/>
    <div>
      {product ? (
        <div>
          <h1>
          {product.name}
          </h1>

          <h3>
          {product.description}
          </h3>
          <img src={product.image.sourceUrl} />
        </div>

      ):''}
    </div>
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
    }
    }`;
  const res = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{ id: id }
  }))

  return {product:res.data.product} 
};


export default Product 