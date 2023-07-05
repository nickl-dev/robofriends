const Card = ({ id, name, email }) => {
  return (
    <div className='bg-cyan-300 p-3 m-2 shadow-lg rounded-md'>
      <img 
        alt={`Robofriend: ${name}`} 
        src={`https://robohash.org/test/${id}?200x200`}
      />

      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  )
}

export default Card;