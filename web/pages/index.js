import Link from 'next/link'
import groq from 'groq'
import client from '../client'

function Index(props) {
  const { galleries = [] } = props
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {galleries.map(
        ({ _id, title = '', slug = '' }) =>
          slug && (
            <li key={_id}>
              <Link prefetch href="/gallery/[slug]" as={`/gallery/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
            </li>
          )
      )}
    </div>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "gallery" && publishedAt < now()]|order(publishedAt desc)
  `),
})

export default Index
