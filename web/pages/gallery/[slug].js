
import client from '../../client'

const Gallery = (props) => {
  
  return (
    <article>
      <h1>{props.slug.current}</h1>
    </article>
  )
}

Gallery.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "gallery" && slug.current == $slug][0]
  `,
    { slug }
  );
};

export default Gallery
