const Card = ({ id, name, email }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img 
        alt={`Robofriend: ${name}`} 
        src={`https://robohash.org/test/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  )
}

export default Card;