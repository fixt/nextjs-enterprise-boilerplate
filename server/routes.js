/* eslint-disable no-multi-assign */
const nextRoutes = require('@yolkai/next-routes').default;

/**
 * ROUTING EXAMPLES                                  // Name   Page      Pattern
 * .add('about')                                     // about  about     /about
 * .add('blog', '/blog/:slug')                       // blog   blog      /blog/:slug
 * .add('user', '/user/:id', 'profile')              // user   profile   /user/:id
 * .add('/:noname/:lang(en|es)/:wow+', 'complex')    // (none) complex   /:noname/:lang(en|es)/:wow+
 * .add({name: 'beta', pattern: '/v3', page: 'v3'})  // beta   v3        /v3
 */
const routes = nextRoutes() // ----   ----      -----
  // Taxonomy archives
  .add('brandList', '/brands', 'taxonomy/archive')
  .add('castList', '/cast', 'examples/algolia/many')
  .add('filmList', '/films', 'taxonomy/archive')
  .add('parks', '/parks', 'taxonomy/archive')

  // Tax term
  .add('brand', '/brand/:id', 'taxonomy/term') // http://localhost:4000/brand/ethan-allen
  .add('cast', '/cast/:id', 'taxonomy/term') // http://localhost:4000/cast/ariel
  .add('collection', '/collection/:id', 'taxonomy/term') // http://localhost:4000/cast/ariel
  .add('film', '/films/:id', 'taxonomy/term') // http://localhost:4000/film/275
  .add('sold-by', '/sold-by/:id', 'taxonomy/term') //
  .add('tag', '/tags/:id', 'taxonomy/term'); //
module.exports = routes;
