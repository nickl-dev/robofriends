import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div className='flex flex-wrap mx-auto justify-center'>
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
    </div>
  )
}

export default CardList;