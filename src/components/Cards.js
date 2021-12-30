import Card from './Card'

function Cards({ items }) {
  return (
    <>
      {items.map((item) => {
        const { id, ...rest } = item;
        return (
          <Card
            key={id}
            {...rest}
          />
        )
      })}
    </>
  )
}

export default Cards;