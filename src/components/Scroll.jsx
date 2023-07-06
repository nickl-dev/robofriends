const Scroll = (props) => {
  return (
    <div className='overflow-y-scroll	h-500'>
      {props.children}
    </div>
  )
}

export default Scroll;