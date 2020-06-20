import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Fragment } from 'react'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import Product from '../components/Product'
import Link from 'next/link'

import { Input } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'

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
							productCategories {
								nodes {
								  id
								  name
								}
							  }
						}
					}
				}`;

const Index = ( props ) => {

	const { products } = props;
	return (
		
		<Fragment>
			<Head>
				<title>This is our page title!</title>
				<meta name="description" content="This is an example of a meta description. This will show up in search results." />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			
			<div>
			
			<img src="/static/Logo.png" alt="Alternative Text" />
			<Input placeholder="Basic usage" />
			</div>
			<Navigation/>
			<div>
				<div>
					text
				</div>
			</div>
  </Fragment>
	)
};

Index.getInitialProps = async () => {

	const result = await client.query({
		query: PRODUCTS_QUERY
	});

	return {
		products: result.data.products.nodes,
	}

};

export default Index;

/*<Link as={`/catagory/${product.productCategories.id}`} href={`/catagory?catagory=${product.productCategories.id}`}>
						<a>
							Candles
						</a>
					</Link> */