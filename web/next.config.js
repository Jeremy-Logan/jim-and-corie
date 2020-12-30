const withCSS = require('@zeit/next-css')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
  },
  exportPathMap: async function (defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "gallery" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/gallery/${slug}`]: { page: '/gallery/[slug]', query: { slug } }
          }),
          defaultPathMap
        )
      )
      .catch(console.error)
    return paths
  }
})

// const withCSS = require('@zeit/next-css')
// const client = require('./client')

// const isProduction = process.env.NODE_ENV === 'production'

// // export async function getGalleryBySlug(slug) {
// //   const data = await getClient(true).fetch(
// //     `*[_type == "gallery" && slug.current == $slug]{
// //       ...,
// //       title,
// //       slug,
// //       image,
// //       description,
// //       gallerySection
// //     }`
// //   )
// //   return data[0]
// // }

// const reduceRoutes = (obj, route) => {
//   const { page = {}, slug = {} } = route
//   const { _createdAt, _updatedAt } = page
//   const { includeInSitemap, disallowRobot } = route
//   const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
//   obj[path] = {
//     query: {
//       slug: slug.current,
//     },
//     includeInSitemap,
//     disallowRobot,
//     _createdAt,
//     _updatedAt,
//     page: '/LandingPage',
//   }
//   return obj
// }

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
//   },
//   exportPathMap: async function () {
//     return client
//       .fetch(
//         `
// {
//   "routes": *[_type == "route"] {
//     ...,
//     disallowRobot,
//     includeInSitemap,
//     page->{
//       _id,
//       title,
//       _createdAt,
//       _updatedAt
//     }
//   }
  
// }

// `
//       )

//       .then((data) => {
//         const { routes = [] } = data
//         const nextRoutes = {
//           // Routes imported from sanity
//           ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
//           '/custom-page': { page: '/CustomPage' },
//         }
//         return nextRoutes
//       })
//   },
// })
