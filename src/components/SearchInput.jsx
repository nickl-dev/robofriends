import React from 'react'

const SearchInput = ({ searchChange }) => {
  return (
    <>
      <input 
        className='text-center mt-3'
        onChange={searchChange}
        placeholder='Search robots...'
        type='search'
      />
    </>
  )
}

export default SearchInput;