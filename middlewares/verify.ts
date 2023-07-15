// const User = require( "../model" ).User;
// const checkverify = ( request, response, next ) => {
//   User.findOne( { where: { username: request.body.username } } ).then( user => {
//     if ( user ) {
//       response.status( 400 ).send( { error: "Username already taken" } );
//       return;
//     }
//     next();
//   } );
// }
// module.exports = { checkverify };