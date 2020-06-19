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
  console.log(id)
  const id = slug ? slug.split('-').pop() :context.query.id;

  //console.log(id)
  const PRODUCTS_QUERY = gql`query Product($id: ID!) {
    product(id: $id){
      id
      name
    }
    }`;
//var id = "cHJvZHVjdDo2NDI="
  const res = await client.query(({
    query:PRODUCTS_QUERY,
    variables:{ id: id }
  }))

  return {product:res.data.product} 
};


export default Product 