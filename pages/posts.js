import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import clientConfig from '../client-config'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {
    
    // Make request for posts.
    //const response = await axios.get(`${clientConfig.siteUrl}/getProducts` )
    //console.log(response.data)
    // Return response to posts object in props.
    return {
      //posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <h1>hOur Posts Page!</h1>
        <ul>
        {
            this.props.posts.map( post => {
              return (
                <li key={ post.productId  }>
                <Link href={ `/posts/${ post.id }` }>
                    <a href={ `/posts/${ post.id }` }>
                        { post.name}
                    </a>
                </Link>
            </li>)
            })
          }
        
        </ul>
      </Fragment>
    )
  }
}