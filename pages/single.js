import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'
import clientConfig from '../client-config'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {
   // const userId = context.query.userId

    // Make request for posts.
    //const response = await axios.get( `${clientConfig.siteUrl}/getProducts/${ userId }` )
    // Return our only item in array from response to posts object in props.
    return {
    //  post: response.data
    }
  }

  
  render() {
    return (
      <Fragment>
        <HeaderComponent itemSelected='posts' />
        <h1>{ this.props.post.name }</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={ {
            __html: this.props.post.name
          } } />
      </Fragment>
    )
  }}
