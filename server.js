/*const express = require( 'express' );
const next    = require( 'next' );

// Import middleware.
const routes = require( './routes' );
var WooCommerceAPI = require('woocommerce-api');

// Setup app.
const app     = next( { dev: 'production' !== process.env.NODE_ENV } );
const handle  = app.getRequestHandler();
const handler = routes.getRequestHandler( app );

const wooConfig = require('./wooConfig');

var WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  wpAPI: true,
  version: 'wc/v1'
});
const port = 3000;
app.prepare()
  .then( () => {

    // Create server.
    const server = express();

    server.get('/getProducts', (req, response) =>{
      WooCommerce.get("products", function(err, data, res){
        response.json(JSON.parse(res))
      })}
    )
    

    // Don't remove. Important for the server to work. Default route.
    server.get( '*', ( req, res ) => {
      return handle( req, res );
    } );

    // Get current port.
    const port = process.env.PORT || 8080;

    // Error check.
    server.listen( port, err => {
      if ( err ) {
        throw err;
      }

      // Where we starting, yo!
      console.log( `> Ready on port ${port}...` );
    } );
  } );
  */