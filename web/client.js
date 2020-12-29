const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '62ei3q1k',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

module.exports = client
