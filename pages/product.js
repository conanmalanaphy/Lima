import {withRouter} from 'next/router'
import client from '../components/ApolloClient';
import gql from 'graphql-tag';

const Product = withRouter(props => {
  const {product} = props;
  return (
    <div>
      {product ? (
        <div>
          {product.name}
        </div>

      ):''}
    </div>
  )
});

Product.getInitialProps = async function(context){
  let {query:{slug}} = context;
  const id = slug ? slug.split('-').pop() :context.query.id;

  const PRODUCTS_QUERY = gql`query Product($id: ID!) {
    product(id: $id){
      id
      name
    }
    }`;
  const res = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{ id: id }
  }))

  return {product:res.data.product} 
};


export default Product 