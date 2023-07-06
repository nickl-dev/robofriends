const Card = ({ id, name, email }) => {
  return (
    <div className='bg-cyan-300 p-3 m-2 shadow-lg rounded-md hover:scale-105 ease-in-out duration-100 w-60'>
      <img 
        alt={`Robofriend: ${name}`} 
        src={`https://robohash.org/test/${id}?200x200`}
      />

      <div className="mt-3">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="text-purple-800">{email}</h3>
      </div>
    </div>
  )
}

export default Card;