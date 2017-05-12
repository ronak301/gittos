import api from './baseApi';

export const seacrhForKey = ( searchText ) => {
  return new Promise( ( resolve, reject ) => {
    api.get( `/search/repositories?q=${searchText}&sort=stars&order=desc`)
      .then( ( response ) => {
        resolve( response.data );
      } )
      .catch( ( err ) => {
        reject( err );
      } );
  } );
}