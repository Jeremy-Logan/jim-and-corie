import client from '../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Gallery = (props) => {
  const { title = 'Missing title', image = 'Missing image', description } = props
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      {image && (
        <div>
          <img src={urlFor(image).width(50).url()} />
        </div>
      )}
    </article>
  )
}

const query = groq`*[_type == "gallery" && slug.current == $slug][0]{
  title,
  image,
  description,
  gallerySection,
}`

Gallery.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Gallery
