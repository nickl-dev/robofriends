import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <Card 
            key={card.id}
            id={card.id}
            name={card.name}
            email={card.email}
          />
        )
      })}
    </>
  )
}

export default CardList;