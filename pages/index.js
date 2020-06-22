import Head from 'next/head'
import MainPageContent from '../components/mainPageContent/MainPageContent'
import { Fragment } from 'react'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import Product from '../components/product/Product'
import Link from 'next/link'
import HeaderComponent from '../components/navigation/Header';

import { Input,Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;


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
				<title>Entorno - Buy Better, Buy Less</title>
				<meta name="description" content="This is an example of a meta description. This will show up in search results." />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Layout>
				<HeaderComponent itemSelected='home' />
				<Content className="site-layout" style={{ padding: '0 100px', marginTop: 64 }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
					</Breadcrumb>
					<MainPageContent />
				</Content>
				<Footer style={{ textAlign: 'center' }}>Entorno in Lima </Footer>
			</Layout>		
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