import { useRouter } from 'next/router'

const Gallery = () => {
  const router = useRouter()
  
  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  )
}

export default Gallery