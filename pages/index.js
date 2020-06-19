import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Fragment } from 'react'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';
import Product from '../components/Product'
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

const Index = ( props ) => {

	const { products } = props;
	console.log(products)
	return (
		
		<Fragment>
    <Navigation/>
    <Head>
      <title>This is our page title!</title>
      <meta name="description" content="This is an example of a meta description. This will show up in search results." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Your new server-side rendered React.js app!</h1>
    { products.length ? (
					products.map( product => <Product key={product.id} product={product} />
				)) : ''}
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
