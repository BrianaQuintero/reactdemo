import Card from './Card'

function Cards({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, title, content, url, alt } = item;
        return (
          <Card
            key={id}
            title={title}
            content={content}
            url={url}
            alt={alt}
          />
        )
      })}
    </>
  )
}

export default Cards;